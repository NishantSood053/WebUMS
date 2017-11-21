package com.ums.utilities;

import java.util.Timer;
import java.util.TimerTask;

import javax.swing.event.EventListenerList;
import javax.xml.bind.Marshaller.Listener;

import org.apache.log4j.Logger;

import com.ums.events.IUMSEventListener;
import com.ums.events.UMSEvent;
import com.ums.events.UMSEventListener;
import com.ums.events.UMSEvents;
import com.ums.network.StartServer;
import com.ums.university.University;

public class TimeSource implements ITimeSource {

	private Logger logger = Trace.getInstance().getLogger(this);
	
	private static TimeSource _instance = new TimeSource();

	static int counter = 0;
	static Timer termEndTimer, registerationEndTimer,systemEndTimer;
	long delay = 0;
	long start = 0;
	UMSEvent eventTermEnds,eventRegisterationEnds,eventRegisterationStarts,eventTermStarts,eventMarksRecorded,eventSystemEnded;

	public static final TimeSource getInstance() {

		if(_instance == null) 
		{
			_instance = new TimeSource();
		}
		return _instance;
	}

	public TimeSource() 
	{
		systemEndTimer = new Timer("System End Timer");//create a new timer
		termEndTimer = new Timer("Term End Timer");//create a new timer
		registerationEndTimer = new Timer("Registeration End Timer");//create a new timer
		eventTermStarts = new UMSEvent(this,UMSEvents.TERMSTART);
		eventTermEnds = new UMSEvent(this, UMSEvents.TERMENDED);
		eventRegisterationStarts = new UMSEvent(this,UMSEvents.REGISTERATIONSTART);
		eventRegisterationEnds = new UMSEvent(this, UMSEvents.REGISTERATIONENDED);
		eventMarksRecorded = new UMSEvent(this, UMSEvents.MARKSRECORDED);
		eventSystemEnded = new UMSEvent(this,UMSEvents.SYSTEMENDED);
		System.out.println("System Started for Admin");
		setSystemEndTimer();
		
	}


	protected EventListenerList listenerList = new EventListenerList();

	public void addMyEventListener(UMSEventListener listener) {
		listenerList.add(UMSEventListener.class, listener);
	}
	public void removeMyEventListener(UMSEventListener listener) {
		listenerList.remove(UMSEventListener.class, listener);
	}

	void fireMyEvent(UMSEvent evt) {
		Object[] listeners = listenerList.getListenerList();
		for (int i = 0; i < listeners.length; i = i+2) {
			if (listeners[i] == UMSEventListener.class) {
				((UMSEventListener) listeners[i+1]).UMSEventReceived(evt);
			}
		}
	}

	private void setSystemEndTimer() {

		
		systemEndTimer.schedule(new TimerTask() {
			@Override
			public void run() {
				fireMyEvent(eventSystemEnded);
			}

		}, Config.SYSTEM_END * Config.STIMULATED_DAY); // System timer for just admin to add students and courses
		
	}


	public void setTermEndTimer() 
	{

		
		termEndTimer.schedule(new TimerTask() {
			@Override
			public void run() {
				fireMyEvent(eventTermEnds);
			}

		}, Config.TERM_END * Config.STIMULATED_DAY); // Term ends after 84 days(1 day = 20 seconds)
	}

	public void setRegisterationEndTimer() 
	{
		
		registerationEndTimer.schedule(new TimerTask() {
			@Override
			public void run() {
				fireMyEvent(eventRegisterationEnds);
			}

		}, Config.REGISTRATION_END * Config.STIMULATED_DAY); // Registeration ends after 14 days(1 day = 20 seconds)
	}
	
	public void setMarksRecordedEvent() 
	{
		fireMyEvent(eventMarksRecorded);
	}


	public void setStart() 
	{
		this.start = System.currentTimeMillis();
	}

	public long getStart() 
	{
		return this.start;
	}

	@Override
	public long currentTimeMillis() {
		// TODO Auto-generated method stub
		return System.currentTimeMillis();
	}

	public long passedTime() 
	{
		return System.currentTimeMillis() - this.start;
	}
	
	public void cancelAllTimers() 
	{
		systemEndTimer.cancel();
		registerationEndTimer.cancel();
		termEndTimer.cancel();
	}

}
