package com.ums.students;

import java.util.List;

import com.ums.courses.Course;

public interface IStudent {
	
	List<Course> CompletedCourses();
	int StudentNumber();
	String Name();
	List<Course> CurrentCourses();
	boolean IsFullTime();
	boolean IsCreated();
	Course SelectCourse(Course courses);
	boolean RegisterCourse(Course course);
	boolean DropCourse(Course course);
	boolean DeregisterCourse(Course course);

}
