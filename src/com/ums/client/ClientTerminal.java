package com.ums.client;

import org.beryx.textio.TextIO;
import org.beryx.textio.TextIoFactory;
import org.beryx.textio.TextTerminal;

public class ClientTerminal {
	
	private static final ClientTerminal _instance = new ClientTerminal();
	
	public static final ClientTerminal getInstance() {
		return _instance;
	}
	
	TextIO textIO = TextIoFactory.getTextIO();
	TextTerminal terminal = textIO.getTextTerminal();
	
	public String ProcessMessageOnTerminal(String message) 
	{
		String output = textIO.newStringInputReader().read(message);
		System.out.println(output);
		return output;
	}
	
	public void DisplayMessageOnTerminal(String message) 
	{
		terminal.printf(message+"\n");
	}
}
