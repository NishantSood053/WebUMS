package com.ums.university;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Timer;
import org.apache.log4j.Logger;
import com.ums.courses.Course;
import com.ums.events.UMSEvent;
import com.ums.events.UMSEventListener;
import com.ums.events.UMSEvents;
import com.ums.students.Student;
import com.ums.utilities.Config;
import com.ums.utilities.TermEvents;
import com.ums.utilities.TimeSource;
import com.ums.utilities.Trace;


public class University implements IUniversity {

	private Logger logger = Trace.getInstance().getLogger(this);
	
	private static University _instance = new University();
	final Timer timer = new Timer();
	
	List<Course> courses = new ArrayList<Course>();
	List<Student> students = new ArrayList<Student>();
	
	public static final int MaxCoursesForFTStudents = 4;
	public static final int MaxCoursesForPTStudents = 2;
	
	static int universityCourses;
	
	public static final University getInstance() {
		
		if(_instance == null) 
		{
			_instance = new University();
		}
		return _instance;
	}
	
	public void Reset() {
		TermEvents.SYSTEMENDED = false;
		TermEvents.REGISTERATIONENDED = false;
		TermEvents.TERMENDED = false;
		TimeSource.getInstance().cancelAllTimers();
		InitializeCourses();
		InitializeStudents();
		TimeSource.getInstance().addMyEventListener(new UMSEventListener() {
			@Override
			public void UMSEventReceived(UMSEvent event) {
				FiredUMSEvent(event);
			}

		});
	}
	
	public University() {
		
		InitializeCourses();
		InitializeStudents();
		universityCourses = courses.size();
		TimeSource.getInstance().addMyEventListener(new UMSEventListener() {
			@Override
			public void UMSEventReceived(UMSEvent event) {
				FiredUMSEvent(event);
			}

		});
	
	}
	
	
	public void FiredUMSEvent(UMSEvent event) {
		if(event.getEventType() == UMSEvents.TERMENDED ) 
		{
			TermEvents.TERMENDED = true;
			TermEnded();
		}else if(event.getEventType() == UMSEvents.REGISTERATIONENDED) 
		{
			TermEvents.REGISTERATIONENDED = true;
			RegisteraionEnded();
			
		}else if(event.getEventType() == UMSEvents.SYSTEMENDED) 
		{
			TermEvents.SYSTEMENDED = true;
			SystemEnded();
		}else if(event.getEventType() == UMSEvents.MARKSRECORDED) 
		{
			TermEvents.MARKSRECORDED = true;
			MarksRecorded();
		}	
	}
	
	
	
	private void SystemEnded() {
		System.out.println("Admin Time Ended");
		logger.info("Admin Time Ended");
		//System has ended and now start the registration timer
		TimeSource.getInstance().setRegisterationEndTimer();
		System.out.println("Registeration Starts Now!");
		logger.info("Registeration Starts Now");
		//InitializeRegisterationForStudents();
	}
	private void TermEnded() {
		logger.info("Term has been ended");
		System.out.println("Term has been ended");
		//Add Marks for each student for each course
		logger.info("Setting marks for students");
		String message ="";
		for(int i =0; i< courses.size(); i++) 
		{
			Course course = courses.get(i);
			List<Student> studentsEnrolled = course.GetStudents();
			Map<Student,Integer> marksForEnrolledStudents = new HashMap<Student,Integer>();
			for(int j=0; j < studentsEnrolled.size(); j++) 
			{
				//Set Marks for Each Enrolled Student
				int marks = GetRandomMarks(70, 100);
				marksForEnrolledStudents.put(studentsEnrolled.get(j), marks);
				message = "Added :"+"Marks for "+studentsEnrolled.get(j).Name() +" "+marks+" % Marks in "+ course.Title();
				System.out.println(message);
				logger.info(message);
			}
			//Set Mark for Each enrolled student in each course
			course.setEnrolledStudents(marksForEnrolledStudents);
		}
		//Set the marks recorded event
		TimeSource.getInstance().setMarksRecordedEvent();
		
	}
	
	private void MarksRecorded() {
		//Display the marks of students who got more than 80
		logger.info("Marks recorded");
		String message = "";
		System.out.println("Displaying Marks for students who got more than 80% in each Course");
		for(int i =0; i< courses.size(); i++) 
		{
			Course course = courses.get(i);
			List<Student> studentsEnrolled = course.GetStudents();
			for(int j=0; j < studentsEnrolled.size(); j++) 
			{
				//Get Marks for Each Enrolled Student
				int marks = course.MarkForStudent(studentsEnrolled.get(j));
				if(marks >=80) 
				{
					//Clear the message
					message = "";
					message = studentsEnrolled.get(j).Name() +" got "+marks+" % Marks in "+ course.Title();
					System.out.println(message);
					logger.info(message);
				}
			}
			
		}
	}

	private Integer GetRandomMarks(int min,int max) {
		Random rand = new Random();
		int marks = rand.nextInt((max-min) +1) + min;
		return marks;
	}

	private void RegisteraionEnded() 
	{
		System.out.println("Registeration has been ended");
		logger.info("Registration Time Ended");
		//Registration has ended and now start the term timer
		TimeSource.getInstance().setTermEndTimer();
		System.out.println("Term Starts Now!");
		logger.info("Term Starts Now");
	}
	
	private void InitializeStudents() {
		logger.info("Initializing students..");
		int[] studentNumbers = new int[]{8543748, 8543746};
		String[] studentNames = new String[]{"nishant","jatin"};
		boolean[] isFullTime = new boolean[]{true,false};
		for(int i=0;i<studentNumbers.length;i++) {
			Student s = new Student(studentNumbers[i], studentNames[i], isFullTime[i]);
			students.add(s);
			
		}
				
		
	}

	private void InitializeCourses() {
		logger.info("Initializing courses..");
		Course course1 = new Course("Software Engineering", 115001, 2,2,30,true,true);
		Course course2 = new Course("Computer Animation", 115002, 2,2,30,true,true);
		Course course3 = new Course("Information and Communication System", 114001, 2,2,30,true,true);
		Course course4 = new Course("Virtual Environments", 114002, 2,2,30,true,true);
		Course course5 = new Course("Fault Tolerence", 114003, 2,2,30,true,true);
		Course course6 = new Course("Distributed Database Technologies", 114004, 2,2,30,true,true);
		courses.add(course1);
		courses.add(course2);
		courses.add(course3);
		courses.add(course4);
		courses.add(course5);
		courses.add(course6);
	}
	
	private void InitializeRegisterationForStudents() 
	{
		for(int j=0 ; j <courses.size(); j++) 
		{
			
			for(int k=0 ; k< students.size(); k++) 
			{

				try {
					RegisterStudentforCourse(students.get(k), courses.get(j));
					System.out.println("Registering student "+ students.get(k).Name()+" to course "+courses.get(j).Title());
				}catch(Exception e) 
				{
					System.out.println(e.getMessage());
				}
			}
		}
		
	}

	@Override
	public List<Course> Courses() {
		// TODO Auto-generated method stub
		return courses;
	}

	@Override
	public List<Student> Students() {
		// TODO Auto-generated method stub
		return students;
	}

	
	@Override
	public Student RegisterStudentforCourse(Student student, Course aCourse) {
		// TODO Auto-generated method stub
		String message = "";
		boolean shouldBeRegistered = true;
		List<Student> enrolledStudents = new ArrayList<Student>();
		//If registration has not ended
		if (!TermEvents.REGISTERATIONENDED) {
			enrolledStudents.clear();
			enrolledStudents = aCourse.GetStudents();
			for(int i =0 ;i< enrolledStudents.size(); i++) 
			{
				//If the student is already registered to the course
				if(enrolledStudents.get(i).StudentNumber() == student.StudentNumber()) 
				{
					shouldBeRegistered = false;
					message = "This student is already registered in this course";
					break;
				}
				
			}
		
		}
		
		if (shouldBeRegistered) {
			student.SelectCourse(aCourse);
			student.RegisterCourse(aCourse);
			aCourse.AddStudent(student);
			logger.info("Student Registered Successfully"+student.Name()+" to Course "+aCourse.Title());

		}else {

			logger.error(message);
			throw new NullPointerException(message);
		}

		return student;
	}

	@Override
	public void CancelCourse(Course course) {
		
		//Check if the course Exist
		if(GetCourse(course.Code())!=null) {
			//Deregister all students from that course but the course still exist in the list
			List<Student> studentsRegistered = course.GetStudents();
			logger.info("Deregistering all students from the course");
			for(int i =0; i< studentsRegistered.size(); i++) 
			{
				studentsRegistered.get(i).DeregisterCourse(course);
				course.RemoveStudent(studentsRegistered.get(i));
			}
		}
		
	}

	@Override
	public boolean DestroyCourse(Course course) {
		
		if(TermEvents.TERMENDED) 
		{
			logger.error("Cannot Destory the Course: Term has been ended");
			throw new NullPointerException("Term has Ended");
		
		}else if (TermEvents.REGISTERATIONENDED) 
		{
			logger.error("Cannot Destory the Course: Registeration has ended");
			throw new NullPointerException("Registeration has Ended");
		}
		
		boolean courseCanBeDeleted = false;
		//Check if the CourseExist
		if(GetCourse(course.Code())!=null) {
			//Delete the course from the course list
			List<Student> studentsRegistered = course.GetStudents();
			for(int i =0; i< studentsRegistered.size(); i++) 
			{
				studentsRegistered.get(i).DeregisterCourse(course);
				course.RemoveStudent(studentsRegistered.get(i));
			}
			logger.info("All students from "+course.Title()+" have been removed successfully");
			//Remove the course from the list
			courses.remove(courses.indexOf(course));
			courseCanBeDeleted = true;
		}
		if(!courseCanBeDeleted) 
		{
			logger.error("Cannot Destory the Course: It does not exist");
			throw new NullPointerException("Course Cannot be deleted because it does not exist");
		}
		logger.info("Course "+course.Title()+ " Deleted successfully");
		return courseCanBeDeleted;
	}


	@Override
	public Course CreateCourse(String title,int code,int numberOfAssignments,int numberOfMidterms,
			int capSize,boolean hasProject,boolean shouldGenerateWeights) {
		Course course = null;
		
		if(TermEvents.TERMENDED) 
		{
			logger.error("Cannot Create the Course: Term has been ended");
			throw new NullPointerException("Term has Ended");
		
		}else if (TermEvents.REGISTERATIONENDED) 
		{
			logger.error("Cannot Create the Course: Registration has ended");
			throw new NullPointerException("Registeration has Ended");
		}else if(TermEvents.SYSTEMENDED) 
		{
			logger.error("Cannot Create the Course: Admin Time Ended");
			throw new NullPointerException("Admin Time Ended");
		}
		
		
		boolean shouldCourseBeAdded = true;
		//Check if the course is already added to the current course list
		for (int i=0; i<courses.size(); i++) {
			String courseTitle = courses.get(i).Title();
			int courseCode = courses.get(i).Code();
			if (courseTitle.equalsIgnoreCase(title)|| courseCode == code) {
				logger.info("Course with code " +courseCode+ " already exist");
				shouldCourseBeAdded = false;
				break;
			}
		}
		
			if (shouldCourseBeAdded) {
					course = new Course(title, code,numberOfAssignments,numberOfMidterms,capSize,hasProject,true);
					courses.add(course);
					logger.info(String.format("Creating New Course: Course Info:[%s,%d]; State: Success", title, code));
			} else {
				
				logger.error(String.format("Creating New Course Failed: Course Info:[%s,%d]; State: Failed", title, code));
				throw new NullPointerException("Course Cannot be added because it already exists");
			}
		
		return course;
	}

	@Override
	public Student CreateStudent(int studentNumber, String name, boolean isFullTime) {
		
		Student student = null;
		if(TermEvents.SYSTEMENDED)
		{
			throw new NullPointerException("System Time has Ended");
		}
		boolean shouldStudentBeAdded = true;
		
		//Check if the student already exists(Only checking unique id Students can have the same name)
		for (int i=0; i<students.size(); i++) {
			int studNumber = students.get(i).StudentNumber();
			if (studNumber == studentNumber) {
				shouldStudentBeAdded = false;
			}
		}
	
		if (shouldStudentBeAdded) {
			student = new Student(studentNumber,name,isFullTime);
			students.add(student);
		} 

		else 
		{
			logger.error(String.format("Operation: Creating New Student Failed: Course Info:[%d,%s]; State: Failed", studentNumber, name));
			throw new NullPointerException("Student Cannot be Created");
		}

		return student;
		
	}
	
	public void SetStudents(List<Student> students) 
	{
		this.students = students;
	}
	
	public Student GetStudent(int studentNumber) 
	{
		Student student = null;
		//If the student exist
		for(int i=0; i< students.size(); i++) 
		{
			if(students.get(i).StudentNumber() == studentNumber) 
			{
				student = students.get(i);
			}
		}
		
		if(student == null) 
		{
			throw new NullPointerException("Student Not Found");
		}
		
		return student;
	}
	
	public Course GetCourse(int courseCode) 
	{
		Course course = null;
		//If the Course exist
		for(int i=0; i< courses.size(); i++) 
		{
			if(courses.get(i).Code() == courseCode) 
			{
				course = courses.get(i);
			}
		}
	
		if(course == null) 
		{
			throw new NullPointerException("Course Not Found");
		}
		
		return course;
	}
	
	public void SetCourses(List<Course> courses) 
	{
		this.courses = courses;
	}

	@Override
	public boolean DeleteStudent(Student student) {
		boolean isDeleted = false;
		if(TermEvents.TERMENDED)
		{
			throw new NullPointerException("Term has Ended");
		}
		if(student != null) 
		{
			if(students.contains(student)) 
			{
				//Remove student from all the registred courses
				for(int i=0; i< courses.size(); i++) 
				{
					if(courses.get(i).GetStudents().contains(student)) 
					{
						courses.get(i).RemoveStudent(student);
					}
				}
				//Remove the student from the university list
				students.remove(student);
				isDeleted = true;
			}
			
		}else 
		{
			logger.error(String.format("Operation: Student Does Not exist; State: Failed"));
			throw new NullPointerException("Student Not found");
		}
		
		return isDeleted;
	}



	
}
