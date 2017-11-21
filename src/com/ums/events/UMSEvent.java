package com.ums.events;

import java.util.EventObject;

public class UMSEvent extends EventObject {
	
	private UMSEvents eventType;

	public UMSEvent(Object source, UMSEvents eventType) {
		super(source);
		this.eventType = eventType;
	}
	
	public UMSEvents getEventType() 
	{
		return this.eventType;
	}
	
	

}
