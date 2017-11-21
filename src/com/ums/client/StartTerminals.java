package com.ums.client;

import com.ums.utilities.Config;

public class StartTerminals {
	public static void main(String[] argv) {
		new UMSClient(Config.DEFAULT_HOST, Config.DEFAULT_PORT);
	}
}

