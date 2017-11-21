package com.ums.client;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.Console;
import java.io.DataInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintStream;
import java.net.Socket;
import java.net.UnknownHostException;

public class ThreadedClient implements Runnable {
	// The client socket
	  private static Socket clientSocket = null;
	  // The output stream
	  private static BufferedReader streamIn = null;
	  private static BufferedWriter streamOut = null;
	  private static BufferedReader inputLine = null;
	  private static boolean closed = false;
	  
	  public static void main(String[] args) {

	    // The default port.
	    int portNumber = 2222;
	    // The default host.
	    String host = "localhost";

	    if (args.length < 2) {
	      System.out
	          .println("Usage: java MultiThreadChatClient <host> <portNumber>\n"
	              + "Now using host=" + host + ", portNumber=" + portNumber);
	    } else {
	      host = args[0];
	      portNumber = Integer.valueOf(args[1]).intValue();
	    }

	    /*
	     * Open a socket on a given host and port. Open input and output streams.
	     */
	    try {
	      clientSocket = new Socket(host, portNumber);
	      inputLine = new BufferedReader(new InputStreamReader(System.in));

	      streamIn = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
		   streamOut = new BufferedWriter(new OutputStreamWriter(clientSocket.getOutputStream()));
		   
	    } catch (UnknownHostException e) {
	      System.err.println("Don't know about host " + host);
	    } catch (IOException e) {
	      System.err.println("Couldn't get I/O for the connection to the host "
	          + host);
	    }

	    /*
	     * If everything has been initialized then we want to write some data to the
	     * socket we have opened a connection to on the port portNumber.
	     */
	    if (clientSocket != null && streamOut != null && streamIn != null) {
	      try {

	        /* Create a thread to read from the server. */
	        new Thread(new ThreadedClient()).start();
	        while (!closed) {
	        		streamOut.write(inputLine.readLine().trim());
	        }
	        /*
	         * Close the output stream, close the input stream, close the socket.
	         */
	        streamOut.close();
	        streamIn.close();
	        clientSocket.close();
	      } catch (IOException e) {
	        System.err.println("IOException:  " + e);
	      }
	    }
	  }

	  /*
	   * Create a thread to read from the server. (non-Javadoc)
	   * 
	   * @see java.lang.Runnable#run()
	   */
	  public void run() {
	    /*
	     * Keep on reading from the socket till we receive "Bye" from the
	     * server. Once we received that then we want to break.
	     */
	    
	    try {
	      while (true) {
	    	  	streamOut.write(inputLine.readLine());
	        
	        
	        
	      }
	      
	    } catch (IOException e) {
	      System.err.println("IOException:  " + e);
	    }
	  }
	}
