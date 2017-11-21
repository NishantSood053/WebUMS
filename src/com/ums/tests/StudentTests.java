package com.ums.tests;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import com.ums.students.Student;
import com.ums.utilities.RandomWeights;
import com.ums.utilities.TermEvents;
import com.ums.courses.*;

public class StudentTests {

	

	@Test
	public void testCompletedCourses() {
		List<Course> completedCourses = new ArrayList<Course>();
		
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course1 = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		Course course2 = new Course("Computer Animation",115002,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		completedCourses.add(course1);
		completedCourses.add(course2);
		Student student = new Student(12345,"Nishant",true);
		student.SetCompletedCourses(completedCourses);
		
		assertEquals("Completed Courses", completedCourses, student.CompletedCourses());
	}

	@Test
	public void testStudentNumber() {
		Student student = new Student(12345,"Nishant",true);
		assertEquals("Student Number", 12345, student.StudentNumber());
	}

	@Test
	public void testName() {
		Student student = new Student(12345,"Nishant",true);
		assertEquals("Student Name", "Nishant", student.Name());
	}

	@Test
	public void testCurrentCourses() {
		
		List<Course> currentCourses = new ArrayList<Course>();
		
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course1 = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		Course course2 = new Course("Computer Animation",115002,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		currentCourses.add(course1);
		currentCourses.add(course2);
		Student student = new Student(12345,"Nishant",true);
		student.SetCurrentCourses(currentCourses);
		
		assertEquals("Current Courses", currentCourses, student.CurrentCourses());
		
	}

	@Test
	public void testIsFullTime() {
		Student student = new Student(12345,"Nishant",true);
		assertTrue("Student is Full Time", student.IsFullTime());
	}
	
	@Test
	public void testIsNotFullTime() 
	{
		Student student = new Student(12345,"Nishant",false);
		assertFalse("Student is not Full Time", student.IsFullTime());
	}

	@Test
	public void testIsCreated() {
		Student student = new Student(12345,"Nishant",true);
		assertEquals("Student is Created", true, student.IsCreated());
	}

	@Test
	public void testSelectCourse() {
		
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		
		Student student = new Student(12345,"Nishant",true);
		Course course1 = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		
		student.SetSelectedCourse(course1);
		
		assertEquals("Course Selected", course1, student.SelectCourse(course1));
	}
	
	@Test(expected=NullPointerException.class)
	public void testSelectCourseFails() {
		
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		
		Student student = new Student(12345,"Nishant",true);
		Course course1 = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		//Already Registered to the course
		List<Course> currentCourses = new ArrayList<Course>();
		currentCourses.add(course1);
		student.SetCurrentCourses(currentCourses);
		
		//Select the Course
		student.SetSelectedCourse(course1);
		
		assertEquals("Course Cannot be Selected", null, student.SelectCourse(course1));
	}

	@Test
	public void testRegisterCourse() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course1 = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		Course course2 = new Course("Computer Animation",115002,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		Course course3 = new Course("Virtual Environments",115003,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		
		currentCourses.add(course3);
		completedCourses.add(course1); // Course Already Completed
		TermEvents.SYSTEMENDED = true;
		TermEvents.REGISTERATIONENDED = false;
		Student s = new Student(12345,"Nishant",true);
		s.SetSelectedCourse(course2); //Select course 2 to be selected
		assertTrue("Register Course", s.RegisterCourse(course2));
		TermEvents.SYSTEMENDED = false;
	}
	
	@Test(expected=NullPointerException.class)
	public void testFailedToRegisterCourse() 
	{
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course1 = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		Course course2 = new Course("Computer Animation",115002,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		currentCourses.add(course2);
		
		completedCourses.add(course1); // Course Already Completed
		
		Student s = new Student(12345,"Nishant",true);
		assertFalse("Course Already Completed", s.RegisterCourse(course1));
	}
	
	@Test(expected=NullPointerException.class)
	public void testFailedToRegisterCourseNotSelected() 
	{
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course1 = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		Course course2 = new Course("Computer Animation",115002,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		currentCourses.add(course2);
		
		completedCourses.add(course1); // Course Already Completed
		
		Student s = new Student(12345,"Nishant",true);
		
		assertFalse("Course Already Completed", s.RegisterCourse(course1));
	}

	@Test
	public void testDropCourse() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course1 = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		Student s = new Student(12345,"Nishant",true);
		s.SetSelectedCourse(course1); //Select the course first
		TermEvents.SYSTEMENDED = true;
		TermEvents.REGISTERATIONENDED = true;
		assertTrue("Dropped Course ",s.DropCourse(course1));
		TermEvents.SYSTEMENDED = false;
		TermEvents.REGISTERATIONENDED = false;
	}
	
	@Test(expected=NullPointerException.class)
	public void testDropCourseFalied() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course1 = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		Course course2 = new Course("Computer Animation",115002,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		Student s = new Student(12345,"Nishant",true);
		s.SetSelectedCourse(course1); //Select the course first
		TermEvents.SYSTEMENDED = true;
		TermEvents.REGISTERATIONENDED = true;
		assertFalse("Dropped Course ",s.DropCourse(course2));
		TermEvents.SYSTEMENDED = false;
		TermEvents.REGISTERATIONENDED = false;
	}


	@Test
	public void testDeregisterCourse() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course1 = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);	
		Course course2 = new Course("Computer Animation",115002,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		Student s = new Student(12345,"Nishant",true);
		s.SetSelectedCourse(course1);
		s.RegisterCourse(course1);
		TermEvents.SYSTEMENDED = true;
		
		assertTrue("Deregister Course ", s.DeregisterCourse(course1));
		TermEvents.SYSTEMENDED = false;
	}
	
	@Test(expected=NullPointerException.class)
	public void testDeregisterCourseFailed() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course1 = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);	
		Course course2 = new Course("Computer Animation",115002,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		Student s = new Student(12345,"Nishant",true);
		s.SetSelectedCourse(course2);
	
		assertFalse("Deregister Course ", s.DeregisterCourse(course2));
	}

}
