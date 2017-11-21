package com.ums.events;

public class UMSEvents {
	
	public String _eventName;
	
	public UMSEvents(String eventName) {
		// TODO Auto-generated constructor stub
		_eventName = eventName;
	}

	public static final UMSEvents TERMSTART = new UMSEvents("Term Started");
	public static final UMSEvents TERMENDED = new UMSEvents("Term Ended");
	public static final UMSEvents REGISTERATIONSTART = new UMSEvents("Registeration Started");
	public static final UMSEvents REGISTERATIONENDED = new UMSEvents("Registeration Ended");
	public static final UMSEvents MARKSRECORDED = new UMSEvents("Marks Recorded");
	public static final UMSEvents SYSTEMENDED = new UMSEvents("System Ended"); // Admin cannot add or modify things after this time
	

}
