package com.ums.students;

import java.util.ArrayList;
import java.util.List;

import javax.swing.plaf.SliderUI;

import org.apache.log4j.Logger;

import com.ums.courses.Course;
import com.ums.university.University;
import com.ums.utilities.TermEvents;
import com.ums.utilities.Trace;

public class Student implements IStudent{

	private Logger logger = Trace.getInstance().getLogger(this);
	
	int studentNumber;
	String name;
	List<Course> completedCourses;
	List<Course> currentCourses;
	Course selectedCourse = null;
	boolean isFullTime;
	boolean isCreated;
	

	
	public Student(int studentNumber, String studentName, boolean isFullTime) {
		super();
		this.studentNumber = studentNumber;
		this.name = studentName;
		this.isFullTime = isFullTime;
		this.isCreated = true;
		this.completedCourses = new ArrayList<Course>();
		this.currentCourses = new ArrayList<Course>();
		logger.info("Student Initialized "+studentNumber);
	}

	@Override
	public List<Course> CompletedCourses() {
		// TODO Auto-generated method stub
		return completedCourses;
	}

	@Override
	public int StudentNumber() {
		// TODO Auto-generated method stub
		return studentNumber;
	}

	@Override
	public String Name() {
		// TODO Auto-generated method stub
		return name;
	}

	@Override
	public List<Course> CurrentCourses() {
		// TODO Auto-generated method stub
		return currentCourses;
	}

	@Override
	public boolean IsFullTime() {
		// TODO Auto-generated method stub
		return isFullTime;
	}

	@Override
	public boolean IsCreated() {
		// TODO Auto-generated method stub
		return isCreated;
	}

	@Override
	public Course SelectCourse(Course course) {
		// TODO Auto-generated method stub
		
		if(completedCourses.contains(course) || currentCourses.contains(course)) 
		{
			logger.error("Cannot Select the Course "+course.Title() +" Because its either you are already registered or it has been completed");
			throw new NullPointerException("Course Cannot be selected/dropped: Because its either you are already registered or it has been completed");
		}
		SetSelectedCourse(course);
		logger.info("Course Selected "+course.Title());
		//Course Selected
		return selectedCourse;
	}

	@Override
	public boolean RegisterCourse(Course course) {
		
		String message = "";
		if(TermEvents.TERMENDED) 
		{
			message = "Cannot Register for Course: Term has been Ended";
			logger.error(message);
			throw new NullPointerException("Term has Ended");
		
		}else if (!TermEvents.SYSTEMENDED) 
		{
			message = "Cannot Register for Course: Registration has not started yet";
			logger.error(message);
			throw new NullPointerException("Registeration has not started yet");
		}else if (TermEvents.REGISTERATIONENDED) 
		{
			message = "Cannot Register for Course: Registeration has Ended";
			logger.error(message);
			throw new NullPointerException("Registeration has Ended");
		}
		
		// TODO Auto-generated method stub
		if( course != selectedCourse || currentCourses.contains(course) || completedCourses.contains(course)) 
		{
			message = "Cannot Register for Course: You might have already completed the course or registered";
			logger.error(message);
			throw new NullPointerException("Course not selected or is/it already completed/exists");
			
		}
		
		
		if((IsFullTime() && CurrentCourses().size() > University.MaxCoursesForFTStudents) 
				|| (!IsFullTime() && CurrentCourses().size() > University.MaxCoursesForPTStudents)) 
		{
			
			message = "Cannot register for more courses: You are not allowed based on your status";
			logger.error(message);
			return false;
		}
		
		logger.info("Course Registred Successfully "+course.Title());
		currentCourses.add(course);
		selectedCourse = null;
		return true;
	}

	@Override
	public boolean DropCourse(Course course) {
		
		if(!TermEvents.SYSTEMENDED) 
		{
			logger.error("Cannot Drop for Course: Term has not started yet");
			throw new NullPointerException("Course not dropped: Term has not started yet");
		}
		if(!TermEvents.REGISTERATIONENDED) 
		{
			logger.error("Cannot Drop for Course: Term has not started yet");
			throw new NullPointerException("Course not dropped: Term has not started yet");
		}
		
		if(TermEvents.TERMENDED) 
		{
			logger.error("Cannot Drop for Course: Term has ended");
			throw new NullPointerException("Course not dropped: Term has ended");
		}
		
		if(selectedCourse != course || completedCourses.contains(course) || currentCourses.contains(course)) 
		{	
			logger.error("Cannot Drop for Course: Because its not selected");
			throw new NullPointerException("Course not dropped because its not selected");
			
		}else 
		{
			logger.info("Course Dropped Successfully "+course.Title());
			selectedCourse = null;
			return true;
		}
		
	}

	@Override
	public boolean DeregisterCourse(Course course) {
		
		if(!TermEvents.SYSTEMENDED) 
		{
			logger.error("Cannot Deregister the Course: Registration has not started yet");
			throw new NullPointerException("Course not Deregistered: Term has not started yet");
		}
		if(TermEvents.REGISTERATIONENDED) 
		{
			logger.error("Cannot Deregister the Course: Registration has ended");
			throw new NullPointerException("Cannot Deregister the Course: Registration has ended");
		}

		if(TermEvents.TERMENDED) 
		{
			logger.error("Cannot Deregister the Course: Term has ended");
			throw new NullPointerException("Cannot Deregister the Course: Term has ended");
		}
		
		
		if(!currentCourses.contains(course)) 
		{
			logger.error("Cannot Deregister the Course:"+course.Title()+" You are currenlty not registered");
			throw new NullPointerException("You are not registered to this course");
		}
		
		else 
		{
			logger.info("Course Deregistered Successfully "+course.Title());
			currentCourses.remove(course);
			//Remove the student from  this course
			course.RemoveStudent(this);
			selectedCourse = null;
			return true;
		}
		
	}
	
	public void SetCompletedCourses(List<Course> completedCourses) 
	{
		this.completedCourses = completedCourses;
	}
	
	public void SetCurrentCourses(List<Course> currentCourses) 
	{
		this.currentCourses = currentCourses;
	}
	
	public void SetSelectedCourse(Course selectedCourse) 
	{
		this.selectedCourse  = selectedCourse;
	}
	
	public Course GetSelectedCourse() 
	{
		if(selectedCourse == null) 
		{
			logger.error("Currently no course is selected");
			throw new NullPointerException("No Current Selected Course");
		}
		return selectedCourse;
	}

}
