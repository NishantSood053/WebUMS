package com.ums.handler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.ums.courses.Course;
import com.ums.handler.model.Output;
import com.ums.students.Student;
import com.ums.university.University;
import com.ums.utilities.Config;



public class OutputHandler {
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
	
	Student loggedInStudent = null;
	
	public Output createUser(String input) {
		Output output=new Output("",0);
		
		return output;
	}

	public Output adminLogin(String input) {
		Output output=new Output("",0);
		if(input.equalsIgnoreCase(Config.CLERK_PASSWORD)){
			output.setOutput(Config.AdminMenu);
        		output.setState(ADMIN);
		}else{
			output.setOutput("Wrong Password!Please Input The Password:");
        		output.setState(ADMINLOGIN);
		}
		return output;
	}

	public Output studentLogin(String input) {
		Output output=new Output("",0);
		//Input length must be 1
        if(input.equals("") || input.equals(" ")) 
        {
        		SetStateWithMessage(output, STUDENTLOGIN, "Wrong Student ID!Please Input The Password:");
        }else 
        {
        		try 
        		{
        			int studentNumber = Integer.parseInt(input);
        			//Check the student number 
            		loggedInStudent = University.getInstance().GetStudent(studentNumber);
            		output.setOutput("Welcome "+loggedInStudent.Name()+"!\n"+Config.StudentMenu);
            		output.setState(STUDENT);
        		}catch (Exception e) {
        			SetStateWithMessage(output, STUDENTLOGIN, "Student not found or the ID is Wrong");
        		}
        }

		return output;
	}

	public Output createCourse(String input) {
		Output output=new Output("",0);
		String[] strArray = null;   
        strArray = input.split(",");
        
        //Expect the array to be of length 6
        if(strArray.length != 6) 
        {
        		SetStateWithMessage(output, CREATECOURSE, "Please enter all the input parameters");
        		
        }else 
        {
        		int courseCode = 0;
        		String courseTitle ="";
        		int numberOfAssignments = Integer.parseInt(strArray[2]);
        		int numberOfMidterms = Integer.parseInt(strArray[3]);
        		int classSize = Integer.parseInt(strArray[4]);
        		boolean hasProject= Boolean.getBoolean(strArray[5]);
        		
        		
        		//If course code is not correct
        		if(!isCourseCodeCorrect(strArray[0])) 
             {
        				SetStateWithMessage(output, CREATECOURSE, "Course Code Incorrect(Should be 6 digit and should not start from 0)");
        				output.setOutput(Config.FALIURE);
             }
        		//If the number of assignments is not correct
        		else if(!isInteger(strArray[2]) || numberOfAssignments < 0 || numberOfAssignments > 5 ) 
             {
        			SetStateWithMessage(output, CREATECOURSE, "The assignments input should be integer and not more than 5");
        			output.setOutput(Config.FALIURE);
             }
        		//If the number of midterms is not correct
        		else if(!isInteger(strArray[3]) || numberOfMidterms < 0 || numberOfMidterms > 2 ) 
             {
        			SetStateWithMessage(output, CREATECOURSE, "The midterm input should be integer and not more than 2");
        			output.setOutput(Config.FALIURE);
             }
        		//If the class size is not correct
        		else if(!isInteger(strArray[3]) || classSize < 25) 
             {
        			SetStateWithMessage(output, CREATECOURSE, "The input should be integer and minimum class size should be 25");
        			output.setOutput(Config.FALIURE);
             }
        		//If the has project value is not correct
        		else if(!isBoolean(strArray[5])) 
             {
        			SetStateWithMessage(output, CREATECOURSE, "The input for HasProject should be either \"true\" or \"false\" ");
        			output.setOutput(Config.FALIURE);
             }
             else 
             {

            	 courseCode = Integer.parseInt(strArray[0]);
            	 courseTitle = strArray[1];
            	 numberOfAssignments = Integer.parseInt(strArray[2]);
            	 numberOfMidterms = Integer.parseInt(strArray[3]);
            	 hasProject = Boolean.getBoolean(strArray[4]);

            	 try {
            		 University.getInstance().CreateCourse(courseTitle,courseCode,numberOfAssignments,numberOfMidterms,classSize,hasProject,true);
            		 output.setOutput("Course Created Successfully\n");
            		 output.setOutput(Config.SUCCESS);
            		 output.setState(ADMIN);
            	 }catch (Exception e) {
            		 SetStateWithMessage(output, CREATECOURSE, e.getMessage());
            		 output.setOutput(Config.FALIURE);
            	 	}
             }
    		
        }
   
		return output;
	}
	
	
	public Output createStudent(String input) {
		Output output=new Output("",0);
		String[] strArray = null;   
        strArray = input.split(",");
        
      //Expect the array to be of length 3
        if(strArray.length != 3) 
        {
        		SetStateWithMessage(output, CREATESTUDENT, "Please enter all the input parameters");
        		output.setOutput(Config.FALIURE);
        }else 
        {
        		int studentID = Integer.parseInt(strArray[0]);
            String studentName = strArray[1];
            Boolean isFullTime = Boolean.valueOf(strArray[2]);
            
            if(!isInteger(strArray[0])) 
            {
            		SetStateWithMessage(output,CREATESTUDENT,"Student ID should be integer");
            		output.setOutput(Config.FALIURE);
            }
            else if(!isBoolean(strArray[2])) 
            {
            		SetStateWithMessage(output,CREATESTUDENT,"Full time status should be either true or false");
            		output.setOutput(Config.FALIURE);
            }
            else 
            {
	            	try {
	            		University.getInstance().CreateStudent(studentID, studentName, isFullTime);
	            		output.setOutput("Student Created Successfully\n");
	            		output.setState(ADMIN);
	            		output.setOutput(Config.SUCCESS);
	            	}catch (Exception e) {
	            		SetStateWithMessage(output, CREATESTUDENT, e.getMessage());
	            		output.setOutput(Config.FALIURE);
	            	}
            }
            
        }
        
		return output;
	}
	
	public Output deleteStudent(String input) {

		Output output=new Output("",0);
		System.out.println("Input Valie"+input);
		//Expect the array to be of length 1
        if(input.equals("") || input.equals(" ")) 
        {
        		SetStateWithMessage(output, DELETESTUDENT, "Please enter all the input parameters");
        		output.setOutput(Config.FALIURE);
        }else 
        {
        		int studentID = 0;
	        	try {
	        		studentID = Integer.parseInt(input);
	        	}catch(Exception e) 
	        	{
	        		SetStateWithMessage(output,DELETESTUDENT,"Student ID should be integer");
	        		output.setOutput(Config.FALIURE);
	        	}
        		
            
	        	try {
	        		Student student = University.getInstance().GetStudent(studentID);
	        		University.getInstance().DeleteStudent(student);
	        		output.setOutput("Student Deleted Successfully\n");
	        		output.setState(ADMIN);
	        		output.setOutput(Config.SUCCESS);
	        	}catch (Exception e) {
	        		SetStateWithMessage(output, DELETESTUDENT, e.getMessage());
	        		output.setOutput(Config.FALIURE);
	        	}
	   
        }
        
		return output;
	
	}
	
	public Output cancelCourse(String input) {
		Output output=new Output("",0);
		//Expect the array to be of length 1
        if(input.equals("") || input.equals(" ")) 
        {
        		SetStateWithMessage(output, CANCELCOURSE, "Please enter all the input parameters");
        		output.setOutput(Config.FALIURE);
        		
        }else 
        {
        		int courseCode = 0;
	        	try {
	        		courseCode = Integer.parseInt(input);
	        	}catch(Exception e) 
	        	{
	        		SetStateWithMessage(output,CANCELCOURSE,"Please enter the Correct Course code(It should be a 6 digit integer value)");
	        		output.setOutput(Config.FALIURE);
	        	}
        		
            
	        	try {
	        		Course course = University.getInstance().GetCourse(courseCode);
	        		University.getInstance().CancelCourse(course);
	        		output.setOutput("Course Cancelled Successfully\n");
	        		output.setState(ADMIN);
	        		output.setOutput(Config.SUCCESS);
	        	}catch (Exception e) {
	        		SetStateWithMessage(output, CANCELCOURSE, "Course Cannot be Canceled (Course does not exist in the list)");
	        		output.setOutput(Config.FALIURE);
	        	}
	   
        }
        
		return output;
	}
	
	public Output deleteCourse(String input) {
		Output output=new Output("",0);	
		//Expect the array to be of length 1
        if(input.equals("") || input.equals(" ")) 
        {
        		SetStateWithMessage(output, DELETECOURSE, "Please enter all the input parameters");
        		output.setOutput(Config.FALIURE);
        }else 
        {
        		int courseCode = 0;
	        	try {
	        		courseCode = Integer.parseInt(input);
	        	}catch(Exception e) 
	        	{
	        		SetStateWithMessage(output,DELETECOURSE,"Please enter the Correct Course code(It should be a 6 digit integer value)");
	        		output.setOutput(Config.FALIURE);
	        	}
        		
            
	        	try {
	        		Course course = University.getInstance().GetCourse(courseCode);
	        		University.getInstance().DestroyCourse(course);
	        		output.setOutput("Course Deleted Successfully\n");
	        		output.setOutput(Config.SUCCESS);
	        		output.setState(ADMIN);
	        	}catch (Exception e) {
	        		SetStateWithMessage(output, DELETECOURSE, e.getMessage());
	        		output.setOutput(Config.FALIURE);
	        	}
	   
        }
        
		return output;
	}

	public String showCourses(boolean isAdmin) {
		Output output=new Output("",0);

		List<Course> courses = new ArrayList<Course>();
		courses.clear();
		courses = University.getInstance().Courses();
		String courseList = "";
	
		for(int i=0;i<courses.size();i++) 
		{
			courseList +=(i+1)+")"+courses.get(i).Code()+" "+courses.get(i).Title()+"\n";
		}
		if(isAdmin) 
		{
			output.setState(ADMIN);
		}else 
		{
			output.setState(STUDENT);
		}
		return courseList;
	}
	
	public String showRegisteredCourses() 
	{
		Output output=new Output("",0);
		List<Course> courses = loggedInStudent.CurrentCourses();
		String courseList = "";
		for(int i=0;i<courses.size();i++) 
		{
			courseList +=(i+1)+")"+courses.get(i).Code()+" "+courses.get(i).Title()+"\n";
		}
		
		if(courses.isEmpty()) 
		{
			courseList = "You are not registered to any course";
		}
		output.setState(STUDENT);
		return courseList;
	}

	public String showStudents() {
		Output output=new Output("",0);
		List<Student> students = University.getInstance().Students();
		
		String studentsList = "";
	
		for(int i=0;i<students.size();i++) 
		{
			
			studentsList +=(i+1)+")"+students.get(i).StudentNumber()+" "+students.get(i).Name()+"\n";
		}
		studentsList += "Showing Enrolled Students \n";
		for(int j=0; j< University.getInstance().Courses().size(); j++) 
		{
			List<Student> enrolledStudents = new ArrayList<Student>();
			enrolledStudents = University.getInstance().Courses().get(j).GetStudents();
			
			for(int i = 0 ; i< enrolledStudents.size();i++) 
			{
				studentsList += enrolledStudents.get(i).Name()+" Registred for Course "+University.getInstance().Courses().get(j).Title()+"\n";
			}
			
		}
		
		output.setState(ADMIN);
		return studentsList;
	}
	
	public Output selectCourse(String input) {
		Output output=new Output("",0);
		System.out.println("Input Valie"+input);
		//Expect the array to be of length 1
        if(input.equals("") || input.equals(" ")) 
        {
        		SetStateWithMessage(output, SELECTCOURSE, "Please enter all the input parameters");
        		output.setOutput(Config.FALIURE);
        		
        }else 
        {
        		
	        	try {
	        		int courseCode = Integer.parseInt(input);
	        		Course course = University.getInstance().GetCourse(courseCode);
	        		loggedInStudent.SelectCourse(course);
	        		output.setOutput("Course Selected Successfully\n");
	        		output.setState(STUDENT);
	        		output.setOutput(Config.SUCCESS);
	        	}catch(Exception e) 
	        	{
	        		SetStateWithMessage(output,SELECTCOURSE,e.getMessage());
	        		output.setOutput(Config.FALIURE);
	        	}
            
	   
        }
        
		return output;
	}
	
	public String registerCourse() {
		Output output=new Output("",0);
		if(loggedInStudent != null) 
		{
			try {
				Course selectedCourse = loggedInStudent.GetSelectedCourse();
				University.getInstance().RegisterStudentforCourse(loggedInStudent, selectedCourse);
				output.setOutput("Course Registered Successfully\n");
        			output.setState(STUDENT);
        			output.setOutput(Config.SUCCESS);
			}catch(Exception e) 
			{
				SetStateWithMessage(output, STUDENT, e.getMessage());
				output.setOutput(Config.FALIURE);
			}
		}
		
		return output.getOutput();
	}
	
	public Output registerStudentForCourse(String input) 
	{
		Output output=new Output("",0);
		String[] strArray = null;   
        strArray = input.split(",");
       
        //Expect the array to be of length 3
        if(strArray.length != 2) 
        {
        		SetStateWithMessage(output, REGISTERSTUDENT, "Please enter all the input parameters");
        		
        }else 
        {
	        	int studentNumber = 0;
	        Student student = null;
	        int courseCode = 0;
	        
	        if(!isNumber(strArray[0])) 
	        {
	        		SetStateWithMessage(output, REGISTERSTUDENT, "Student Number Invalid");
	        }else if(!isCourseCodeCorrect(strArray[1])) 
	        {
	    			SetStateWithMessage(output, REGISTERSTUDENT, "Course Code Incorrect(Should be 6 digit and should not start from 0)");
	        }else {
		        	 studentNumber = Integer.parseInt(strArray[0]);
		        	 courseCode = Integer.parseInt(strArray[1]);
		        	 try {
		        		 Course course = University.getInstance().GetCourse(courseCode);
		        		 student = University.getInstance().GetStudent(studentNumber);
		        		 University.getInstance().RegisterStudentforCourse(student,course);
		        		 output.setOutput("STUDENT Registered Successfully\n");
		        		 output.setState(ADMIN);
		        	 }catch(Exception e)
		        	 {
		        		 SetStateWithMessage(output, ADMIN, e.getMessage());
		        	 }
	         }
        }
		return output;
	}
	
	public String dropCourse() {
		Output output=new Output("",0);

		try {
			Course selectedCourse = loggedInStudent.GetSelectedCourse();
			loggedInStudent.DropCourse(selectedCourse);
			output.setOutput("Course Dropped Successfully\n");
			output.setState(STUDENT);
			output.setOutput(Config.SUCCESS);
		}catch (Exception e) {
			SetStateWithMessage(output, DROPCOURSE, e.getMessage());
			output.setOutput(Config.FALIURE);
		}

		return output.getOutput();
	}

	public Output deregisterCourse(String input) {
		Output output=new Output("",0);
		System.out.println("Input Valie"+input);
		//Expect the array to be of length 1
        if(input.equals("") || input.equals(" ")) 
        {
        		SetStateWithMessage(output, DEREGISTERCOURSE, "Please enter all the input parameters");
        		output.setOutput(Config.FALIURE);
        		
        }else 
        {
        		
	        	try {
	        		int courseCode = Integer.parseInt(input);
	        		Course course = University.getInstance().GetCourse(courseCode);
	        		loggedInStudent.DeregisterCourse(course);
	        		output.setOutput("Course Deregistred Successfully\n");
	        		output.setState(STUDENT);
	        		output.setOutput(Config.SUCCESS);
	        	}catch(Exception e) 
	        	{
	        		SetStateWithMessage(output,DEREGISTERCOURSE,"Course Cannot be Deregistred.\nPlease enter the Correct Course code(It should be a 6 digit integer value)");
	        		output.setOutput(Config.FALIURE);
	        	}
            
	   
        }
        
		return output;
	}

	


	
	public static boolean isInteger(String value) {
		char[] ch = value.toCharArray();
		boolean isNumber=true;
		
			for (int i = 0; i < ch.length; i++) {
				isNumber = Character.isDigit(ch[i]);
			}
		
		return isNumber;
	}
	
	public boolean isBoolean(String value) 
	{
		//Check if the string is true or false
		Boolean isBool = false;
		
		if(value.equalsIgnoreCase("true")) 
		{
			isBool = true;
		}else if(value.equalsIgnoreCase("false")) 
		{
			isBool = true;
		}else 
		{
			isBool = false;
		}
		
		return isBool;
	}
	
	public boolean isNumber(String value) {
		char[] ch = value.toCharArray();
		boolean isNumber=true;
			for (int i = 0; i < ch.length; i++) {
				isNumber = Character.isDigit(ch[i]);
			}
		return isNumber;
	}
	
	public boolean isCourseCodeCorrect(String code) 
	{
		boolean isValid = true;
		//Check the length of the code(it should be 6)
		if(code.length() != 6) isValid =false;
		
		//Check the first digit of the course code(should not be zero)
		if(code.startsWith("0")) isValid =false;
		
		//Check if the code is integer number
		if(!isNumber(code)) isValid = false;
		
		
		return isValid;
	}
	
	public void SetStateWithMessage(Output output,int state,String message) 
	{
		output.setOutput(message);
		output.setState(state);
	}

	
	
		
	
}
