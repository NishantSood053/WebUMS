package com.ums.network;

import com.ums.utilities.Config;
import com.ums.utilities.TimeSource;

public class StartServer {
	
	public static void main(String[] argv) {
		System.out.println("Starting server ...");
		TimeSource.getInstance().setStart(); // Set the server start time
		new UMSServer(Config.DEFAULT_PORT);
	}
}
