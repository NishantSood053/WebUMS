package com.ums.network;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;

import com.ums.handler.InputHandler;
import com.ums.handler.model.Client;
import com.ums.handler.model.ServerOutput;
import com.ums.university.University;
import com.ums.utilities.Config;
import com.ums.utilities.Trace;

public class UMSServer  implements Runnable{
	int clientCount = 0;
	private Thread thread = null;
	private ServerSocket server = null;
	private HashMap<Integer, ServerThread> clients;
	private Logger logger = Trace.getInstance().getLogger(this);
	InputHandler handler=new InputHandler();
	private List<Client> clientList=new ArrayList<Client>();
	public UMSServer(int port) {
		try {
			logger.info("Binding to port " + port);
			clients = new HashMap<Integer, ServerThread>();
			server = new ServerSocket(port);
			server.setReuseAddress(true);
			start();
		} catch (IOException ioe) {
			logger.fatal(ioe);
		}
	}
	
	public void start() {
		if (thread == null) {
			thread = new Thread(this);
			thread.start();
			University.getInstance(); //Initialize the university class
			logger.info(String.format("Server started: %s %d", server,thread.getId()));
			System.out.println("Server started successfully!");
		}
	}

	public void run() {
		while (thread != null) {
			try {
				logger.info("Waiting for a client ...");
				addThread(server.accept());
			} catch (IOException e) {				
				logger.fatal(e);
			}}
	}
	
	private void addThread(Socket socket) {
		String message = String.format("%s : Client Address : [%15s] Client Socket: [%-6d]\n", "Client accepted", socket.getRemoteSocketAddress(), socket.getPort());
		logger.info(String.format(message));
		if (clientCount < Config.MAX_CLIENTS) {
			try {
				ServerThread serverThread = new ServerThread(this, socket);
				serverThread.open();
				serverThread.start();
				clients.put(serverThread.getID(), serverThread);
				this.clientCount++;
			} catch (IOException e) {
				logger.fatal(e);
			}
		} else {
			logger.info(String.format("Client Tried to connect: %s", socket));
			logger.info(String.format("Client refused: maximum number of clients reached: d", 5));
		}
	}

	public synchronized void handle(int ID, String input) {
		
		if (input.equals("Exit")) 
		{
			logger.info(String.format("Client: %d Exits", ID));
			if (clients.containsKey(ID)) {
				clients.get(ID).send("Exit" + "\n");
				remove(ID);
				logger.info(String.format("Client : "+ ID +"Exits"));
			}}

		else 
		{
			ServerThread from = clients.get(ID);			
			logger.info(String.format("Input from %s:%d"+" "+input,from.getSocketAddress(),from.getID()));
			ServerOutput so;
			String output;
			if(exist(from)){
				int state=clientState(from);
				so=handler.processInput(input,state);
				output=so.getOutput()+"\n";
				from.send(output);
				clientSetState(from,so.getState());
				logger.info(String.format("Output to %s:%d"+" "+output,from.getSocketAddress(),from.getID()));
			}else{
				Client client=new Client(from,InputHandler.WAITING);
				clientList.add(client);
				so=handler.processInput(input,InputHandler.WAITING);
				output=so.getOutput()+"\n";
				from.send(output);
				clientSetState(from,so.getState());
				logger.info(String.format("Output to %s:%d"+" "+output,from.getSocketAddress(),from.getID()));
			};
			
	}} 


	private void clientSetState(ServerThread from, int state) {
		int index=0;
		for(int i=0;i<clientList.size();i++){
			if(clientList.get(i).getClient().equals(from)){
				index=i;
			}
		}
		clientList.get(index).setState(state);
		
	}

	private int clientState(ServerThread from) {
		int result=0;
		for(int i=0;i<clientList.size();i++){
			if(clientList.get(i).getClient().equals(from)){
				result=clientList.get(i).getState();
			}
		}
		return result;
	}

	private boolean exist(ServerThread from) {
		boolean result=false;
		for(int i=0;i<clientList.size();i++){
			if(clientList.get(i).getClient().equals(from)){
				result=true;
			}
		}
		return result;
	}

	/** Try and shutdown the client cleanly */
	public synchronized void remove(int ID) {
		if (clients.containsKey(ID)) {
			ServerThread toTerminate = clients.get(ID);
			clients.remove(ID);
			clientCount--;
			toTerminate.close();
			toTerminate = null;
		}
	}

}
