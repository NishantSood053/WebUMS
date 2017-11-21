package com.ums.courses;

import java.util.List;

import com.ums.students.Student;

public interface ICourse {

	String Title();
	int Code(); // 6 digits code(xx- dept code, xxxx - course code) First digit is not zero
	List<Student> GetStudents();
	List<Integer> PreRequisities();
	int WeightOfAssignment(int assignmentNumber);
	int WeightOfMidterm(int midtermNumber);
	int WeightOfFinal();
	int MarkForStudent(Student student);
	boolean HasProject();
	boolean IsFull();
	boolean AddStudent(Student s);
	boolean RemoveStudent(Student s);
}
