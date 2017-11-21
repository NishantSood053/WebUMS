package com.ums.tests;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;

import com.ums.courses.Course;
import com.ums.students.Student;
import com.ums.utilities.RandomWeights;


public class CourseTests {
	
	
	@Test
	public void testTitle() {
		
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		assertEquals("Check Valid Course Title", "Software Engineering", course.Title());
	}

	@Test
	public void testGetStudents() {
		
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		
		Course course = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		
		Student s = new Student(12345,"Nishant",true);
		Map<Student, Integer> students = new HashMap<Student, Integer>();
		students.put(s, 0);
		course.setEnrolledStudents(students);
		assertEquals("Get Students",course.GetStudents(), new ArrayList<Student>(students.keySet()));
	}

	@Test
	public void testWeightOfAssignment() {
		
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		List<Integer> weightOfAssignments = new ArrayList<Integer>();
		
		Course course = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,false);
		
		weightOfAssignments.add(10);
		weightOfAssignments.add(20);
		weightOfAssignments.add(10);
		
		course.setWeightOfAssignments(weightOfAssignments);
		int expectedValue = 20;
		
		assertEquals("Check Assignment Weight", expectedValue, course.WeightOfAssignment(1)); // Check weight of assignment 1
	}

	@Test
	public void testWeightOfMidterm() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 2;
		boolean hasProject = true;
		List<Integer> weightOfMidterms = new ArrayList<Integer>();
		
		Course course = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,false);
		weightOfMidterms.add(10);
		weightOfMidterms.add(20);
		
		course.setWeightOfMidterms(weightOfMidterms);
		int expectedValue = 20;
		
		assertEquals("Check Midterm Weight", expectedValue, course.WeightOfMidterm(1)); // Check weight of midterm 1
	}

	@Test
	public void testWeightOfFinal() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		
		Course course = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,false);
		course.setWeightOfFinals(10);
		int expectedValue = 10;
		assertEquals("Check Finals Weight", expectedValue, course.WeightOfFinal()); // Check weight of finals
		
	}

	
	@Test
	public void testHasProject() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		assertEquals("Check If the course has Project", true, course.HasProject());
	}

	

	@Test
	public void testAddStudent() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		Student student = new Student(12345,"Nishant",true);
		assertTrue("Student Added",course.AddStudent(student));

	}
	
	@Test
	public void testAddStudentFailed() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		Student student = new Student(12345,"Nishant",true);
		course.AddStudent(student);
		assertFalse(course.AddStudent(student));

	}

	@Test
	public void testRemoveStudent() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		
		Student student = new Student(12345,"Nishant",true);
		course.AddStudent(student);
		assertEquals("Student Removed", true, course.RemoveStudent(student));
	}

	@Test
	public void testCode() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		assertEquals("TestCode", 115001, course.Code());
		
	}
	
	@Test
	public void testTotalWeight() 
	{
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		int totalWeight = 0;
		Course course = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,10,hasProject,true);
		for(int i=0;i<numberOfAssignments;i++) 
		{
			totalWeight += course.WeightOfAssignment(i);
		}
		for(int j=0;j<numberOfMidterms;j++) 
		{
			totalWeight += course.WeightOfMidterm(j);
		}
		totalWeight += course.WeightOfProject()+ course.WeightOfFinal();
		assertEquals("Test Total Weight", totalWeight, 100);
	}
	
	@Test
	public void testMarkForStudent() {
		
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,2,hasProject,true);
		Student student1 = new Student(12345,"Nishant",true);
		
		Map<Student, Integer> studentsEnrolled = new HashMap<Student, Integer>();
		studentsEnrolled.put(student1, 20);
		course.setEnrolledStudents(studentsEnrolled);
		
		assertEquals("Mark for Student", 20, course.MarkForStudent(student1));
	}

	@Test
	public void testIsFull() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,2,hasProject,true);
		Student student1 = new Student(12345,"Nishant",true);
		Student student2 = new Student(12346,"Jatin",true);
		course.AddStudent(student1);
		course.AddStudent(student2);
		assertTrue("Test Class Full", course.IsFull());
	}
	
	@Test
	public void testClassNotFull() 
	{
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		Course course = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,20,hasProject,true);
		Student student1 = new Student(12345,"Nishant",true);
		Student student2 = new Student(12346,"Jatin",true);
		course.AddStudent(student1);
		course.AddStudent(student2);
		assertFalse("Class Not Full", course.IsFull());
	}

	
}
