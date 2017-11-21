package com.ums.handler;

import com.ums.handler.model.Output;
import com.ums.handler.model.ServerOutput;
import com.ums.university.University;
import com.ums.utilities.Config;


public class InputHandler {

	public static final int WAITING = 0;
	public static final int FINISHWAITING=1;
	public static final int ADMIN = 2;
	public static final int STUDENT = 3;
	public static final int CREATECOURSE = 4;
	public static final int CREATESTUDENT = 5;
	public static final int REGISTERSTUDENT = 6;
	public static final int DELETESTUDENT = 7;
	public static final int CANCELCOURSE = 8;
	public static final int DELETECOURSE = 9;
	public static final int SELECTCOURSE = 10;
	public static final int DROPCOURSE = 11;
	public static final int DEREGISTERCOURSE = 12;
	public static final int ADMINLOGIN=14;
	public static final int STUDENTLOGIN=15;
	
	
	
	OutputHandler outputHandler=new OutputHandler();

	public ServerOutput processInput(String input, int state) {
		String output = "";
		Output o = new Output("",WAITING);
		ServerOutput oo = new ServerOutput(output,o.getState());
		//Start with waiting state
		if (state == WAITING) {
			output = "Select an Input\nWho Are you?\n1)Admin\n2)Student";
            state = FINISHWAITING;
            oo.setOutput(output);
            oo.setState(state);
		}else if (state == FINISHWAITING) {
            if (input.equalsIgnoreCase("admin") || input.equals("1")) {
	            	output="Please Input The Password:";
	            	state=ADMINLOGIN;
	            oo.setOutput(output);
		        oo.setState(state);
            }else if (input.equalsIgnoreCase("Student") || input.equals("2")) {
	            	output="Please Input Student Number to login:\n";
	            	state=STUDENTLOGIN;
	            oo.setOutput(output);
	            oo.setState(state);
            }else{
	            	output = "Please Select the right Input\nWho Are you?\n1)Admin\n2)Student";
	            	state = FINISHWAITING;
	            	oo.setOutput(output);
		        oo.setState(state);
            }
		}else if(state==ADMINLOGIN){
	        	o=outputHandler.adminLogin(input);
	    		output=o.getOutput();
	    		state=o.getState();
	    		oo.setOutput(output);
	        oo.setState(state);
        }else if(state==STUDENTLOGIN){
	        	o=outputHandler.studentLogin(input);
	    		output=o.getOutput();
	    		state=o.getState();
	    		oo.setOutput(output);
	        oo.setState(state);
	    }else if (state==ADMIN){
        		if (input.equals("1")) {
	            	output = "Enter the Course Details in the following format(Seperated by comma)"
	            			+ " \n NOTE:Course Code should be 6 digits and should not start with 0"
	            			+ "\n coursecode,coursename,numberofassignments(integer),numberofmidterms(integer),classsize(integer),hasproject(true or false)";
	            	state=CREATECOURSE;
	            	oo.setOutput(output);
		        oo.setState(state);
            }else if (input.equals("2")) {
            		output = "Enter the Student Details:\n StudentId,StudentName,IsFullTime (Seperated by comma)";
            		state=CREATESTUDENT;
            		oo.setOutput(output);
	            oo.setState(state);
            }else if (input.equals("3")){
            		output = outputHandler.showCourses(true);
                oo.setOutput(output);
	            oo.setState(state);
            }else if (input.equals("4")){
            		output = outputHandler.showStudents();
                oo.setOutput(output);
	            oo.setState(state);
            }else if (input.equals("5")){
            		output = "Enter the student ID you want to delete";
            		state = DELETESTUDENT;
                oo.setOutput(output);
	            oo.setState(state);
            }else if (input.equals("6")){
	        		output = "Enter the Course Code you want to Cancel";
	        		state = CANCELCOURSE;
	            oo.setOutput(output);
	            oo.setState(state);
            }else if (input.equals("7")){
	            	output = "Enter the Course Code you want to Destroy";
	            	state = DELETECOURSE;
	            	oo.setOutput(output);
	            	oo.setState(state);
            }else if (input.equals("8")){
            		output = "Enter Student Number and CourseId(seperated by comma)";
                state = REGISTERSTUDENT;
                oo.setOutput(output);
	            oo.setState(state);
            }
            else if (input.equals("9")){
            		output = "Successfully Log Out!";
                state = WAITING;
                oo.setOutput(output);
	            oo.setState(state);
            }else if(input.equalsIgnoreCase("menu")){
        			output = Config.AdminMenu;
                state = ADMIN;
                oo.setOutput(output);
	            oo.setState(state);
        		}else{
        			output = Config.AdminMenu;
                state = ADMIN;
                oo.setOutput(output);
	            oo.setState(state);
            }
	    }else if(state == CREATECOURSE) 
	    {
	    	
		    	if(input.equalsIgnoreCase("menu")){
	    			output = Config.AdminMenu;
	            state = ADMIN;
	            oo.setOutput(output);
	            oo.setState(state);
	    		}else {
			    	o = outputHandler.createCourse(input);
		    		output=o.getOutput();
		    		state=o.getState();
		    		oo.setOutput(output);
		        oo.setState(state);
	    		}
	        
	        
	    }else if(state == CREATESTUDENT) 
	    {
		    	if(input.equalsIgnoreCase("menu")){
		    		output = Config.AdminMenu;
		    		state = ADMIN;
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}else {
		    		o = outputHandler.createStudent(input);
		    		output=o.getOutput();
		    		state=o.getState();
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}
	    }else if(state == DELETESTUDENT) 
	    {
		    	if(input.equalsIgnoreCase("menu")){
		    		output = Config.AdminMenu;
		    		state = ADMIN;
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}else {
		    		o = outputHandler.deleteStudent(input);
		    		output=o.getOutput();
		    		state=o.getState();
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}
	    }else if(state == CANCELCOURSE) 
	    {
		    	if(input.equalsIgnoreCase("menu")){
		    		output = Config.AdminMenu;
		    		state = ADMIN;
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}else {
		    		o = outputHandler.cancelCourse(input);
		    		output=o.getOutput();
		    		state=o.getState();
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}
	    }else if(state == DELETECOURSE) 
	    {
		    	if(input.equalsIgnoreCase("menu")){
		    		output = Config.AdminMenu;
		    		state = ADMIN;
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}else {
		    		o = outputHandler.deleteCourse(input);
		    		output=o.getOutput();
		    		state=o.getState();
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}
	    }else if(state == REGISTERSTUDENT) 
	    {
		    	if(input.equalsIgnoreCase("menu")){
		    		output = Config.AdminMenu;
		    		state = ADMIN;
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}else {
		    		o = outputHandler.registerStudentForCourse(input);
		    		output=o.getOutput();
		    		state=o.getState();
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}
	    }
	    else if(state == STUDENT) 
	    {
	    		//Show available courses
		    	if (input.equals("1")) {
		    		output = outputHandler.showCourses(false);
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}else if (input.equals("2")) {
	        		output = "Enter the Course Code you want to Select";
	        		state=SELECTCOURSE;
	        		oo.setOutput(output);
	            oo.setState(state);
	        }else if (input.equals("3")){
	        		output = outputHandler.registerCourse();
	            oo.setOutput(output);
	            oo.setState(state);
	        }else if (input.equals("4")){
	        		output = "Enter the course code you want to drop";
	        		state = DROPCOURSE;
	            oo.setOutput(output);
	            oo.setState(state);
	        }else if (input.equals("5")){
		        	output = "Enter the course code you want to deregister";
		        	state = DEREGISTERCOURSE;
		        	oo.setOutput(output);
		        	oo.setState(state);
	        }else if (input.equals("6")) {
		        	output = outputHandler.showRegisteredCourses();
		        	oo.setOutput(output);
		        	oo.setState(state);
	        }
	        else if (input.equals("7")){
		        	output = "Successfully Log Out!";
		        	state = WAITING;
		        	oo.setOutput(output);
		        	oo.setState(state);
	        }else{
		        	output = Config.StudentMenu;
		        	state = STUDENT;
		        	oo.setOutput(output);
		        	oo.setState(state);
	        }
	    	
	    }else if(state == SELECTCOURSE) 
	    {
		    	if(input.equalsIgnoreCase("menu")){
		    		output = Config.StudentMenu;
		    		state = STUDENT;
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}else {
		    		o = outputHandler.selectCourse(input);
		    		output=o.getOutput();
		    		state=o.getState();
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}
	    }else if(state == DROPCOURSE) 
	    {
		    	if(input.equalsIgnoreCase("menu")){
		    		output = Config.StudentMenu;
		    		state = STUDENT;
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}else {
		    		output= outputHandler.dropCourse();
		    		state= STUDENT;
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}
	    }else if(state == DEREGISTERCOURSE) 
	    {
		    	if(input.equalsIgnoreCase("menu")){
		    		output = Config.StudentMenu;
		    		state = STUDENT;
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}else {
		    		o = outputHandler.deregisterCourse(input);
		    		output=o.getOutput();
		    		state=o.getState();
		    		oo.setOutput(output);
		    		oo.setState(state);
		    	}
	    }

        return oo;
	}
}
