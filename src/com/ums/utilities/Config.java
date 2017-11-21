package com.ums.utilities;

public class Config {
	public static final int MAX_CLIENTS = 5;
	public static final int DEFAULT_PORT = 5050;
	public static final String DEFAULT_HOST = "127.0.0.1";
	public static final int MAX_BORROWED_ITEMS = 3;
	//20 seconds for 1 day
	public static final int STIMULATED_DAY = 1 * 20 * 1000;
	public static final int OVERDUE = 1;
	public static final int REGISTRATION_END = 14; // 14 Days for Registration
	public static final int TERM_END = 84; // 84 Days for Term
	public static final int SYSTEM_END = 20; // 20 Days for Admin
	public static final String CLERK_PASSWORD = "admin";
	
	public static final String AdminMenu = "What can I do for you?\nMenu:\n1)Create Course \n2)Create Student \n3)Show Courses \n4)Show Students \n5)Delete Student \n6)Cancel Course \n7)Delete Course \n8)Register Student to a Course \n9)Logout";
	public static final String StudentMenu = "What can I do for you?\nMenu:\n1)Get All Courses \n2)Select Course \n3)Register Course \n4)Drop Course \n5)Deregister Course \n6)Get Registered Courses  \n7)Logout";
	public static final int EVENTCOUNT = 4;
	
	public static final String SUCCESS = "Success";
	public static final String FALIURE = "Faliure";
}
