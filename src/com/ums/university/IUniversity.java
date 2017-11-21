package com.ums.university;
import java.util.List;

import com.ums.courses.*;
import com.ums.students.Student;
public interface IUniversity {
	
	List<Course> Courses();
	List<Student> Students();
	Course CreateCourse(String title,int code,int numberOfAssignments,
			int numberOfMidterms,int capSize,boolean hasProject,boolean shouldGenerateWeights);
	Student RegisterStudentforCourse(Student student,Course aCourse) throws Exception;
	void CancelCourse(Course course);
	boolean DestroyCourse(Course course);
	Student CreateStudent(int studentNumber, String name, boolean isFullTime);
	boolean DeleteStudent(Student student);

}
