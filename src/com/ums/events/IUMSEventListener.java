package com.ums.events;

import java.util.EventListener;

public interface IUMSEventListener extends EventListener{
	
	public void UMSEventReceived(UMSEvent event);

}
