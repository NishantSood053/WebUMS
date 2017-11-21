package com.ums.courses;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.apache.log4j.Logger;

import com.ums.students.Student;
import com.ums.university.University;
import com.ums.utilities.RandomWeights;
import com.ums.utilities.Trace;

public class Course implements ICourse {

	private Logger logger = Trace.getInstance().getLogger(this);
	
	String title;
	int code;
	
	int weightOfFinal;
	boolean hasProject;
	int weightOfProject;
	int numberOfAssignments;
	int numberOfMidterms;
	List<Integer> weightOfAssignments;
	List<Integer> weightOfMidterm;
	
	Map<Student,Integer> studentsEnrolled = new HashMap<Student,Integer>();;
	
	int capSize = 10; //By default each class can hold 10 students
	RandomWeights weights;
	boolean shouldGenerateWeights = true;

	public Course(String title,int code,int numberOfAssignments,int numberOfMidterms,int capSize,boolean hasProject,boolean shouldGenerateWeights) 
	{
		super();
		this.title = title;
		this.code = code;
		this.weightOfAssignments = new ArrayList<Integer>();
		this.weightOfMidterm = new ArrayList<Integer>();
		this.weightOfFinal = 0;
		this.weightOfProject = 0;
		this.hasProject = hasProject;
		this.numberOfAssignments = numberOfAssignments;
		this.numberOfMidterms = numberOfMidterms;
		this.capSize = capSize;
		
		//Randomly generate Weights
		if(shouldGenerateWeights) {
			weights = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
			setWeightOfAssignments(weights.WeightOfAssignments());
			setWeightOfMidterms(weights.WeightOfMidterms());
			setWeightOfFinals(weights.WeightOfFinals());
			if(hasProject) 
			{
				setWeightOfProject(weights.WeightOfProject());
			}
		}
		
		logger.info("Course Initialized Successfully");
	}
	
	
	@Override
	public String Title() {
		// TODO Auto-generated method stub
		return title;
	}

	@Override
	public List<Student> GetStudents() {
		// TODO Auto-generated method stub
		List<Student> studentsList = new ArrayList<Student>();
		Iterator<Student> iterator = studentsEnrolled.keySet().iterator();
		while(iterator.hasNext()) 
		{
			studentsList.add(iterator.next());
		}
		return studentsList;
		
	}

	@Override
	public int WeightOfAssignment(int assignmentNumber) {
		return weightOfAssignments.get(assignmentNumber);
	}

	@Override
	public int WeightOfMidterm(int midtermmNumber) {
		// TODO Auto-generated method stub
		return weightOfMidterm.get(midtermmNumber);
	}

	@Override
	public int WeightOfFinal() {
		// TODO Auto-generated method stub
		return weightOfFinal;
	}
	
	public int WeightOfProject() {
		// TODO Auto-generated method stub
		return weightOfProject;
	}


	@Override
	public int MarkForStudent(Student student) {
		
		return this.studentsEnrolled.get(student);
		//return marksForEnrolledStudentsList.get(enrolledStudentsList.indexOf(student));
	}

	@Override
	public boolean HasProject() {
		// TODO Auto-generated method stub
		return hasProject;
	}

	@Override
	public boolean IsFull() {
		// TODO Auto-generated method stub
		if (GetStudents().size() == capSize) {
				return true;
			}
		return false;
	}
	
	
	public void setEnrolledStudents(Map<Student, Integer> studentsEnrolled) {
		
		this.studentsEnrolled = studentsEnrolled;
		
	}
	
	public Map<Student, Integer> getEnrolledStudents()
	{
		return this.studentsEnrolled;
	}
	

	@Override
	public boolean AddStudent(Student s) {
		// TODO Auto-generated method stub
		boolean canBeEnrolled = true; 
		if(GetStudents().size() >= capSize) 
		{
			logger.error("No more students can be added: Exceeded cap size of "+capSize);
			canBeEnrolled = false;
			
		}else {
			//Check if the student already enrolled in the course
			for(int i=0;i < GetStudents().size(); i++) 
			{
				if(s.equals(GetStudents().get(i)))
				{
					logger.info("Student Already Enrolled");
					canBeEnrolled = false;
					break;
				}
			}
			
			if(canBeEnrolled)
			{
				logger.info("Student Added Successfully: "+s.StudentNumber());
				studentsEnrolled.put(s,0); //Mark student with 0
				
			}
		}
		
		return canBeEnrolled;
	}

	@Override
	public boolean RemoveStudent(Student s) {
		// TODO Auto-generated method stub
		Iterator<Student> iterator = studentsEnrolled.keySet().iterator();
		while (iterator.hasNext()) {
			Student index = (Student)iterator.next();
			if (s.equals(index)) {
				logger.info("Student Removed Successfully: "+s.StudentNumber());
				studentsEnrolled.remove(s);
				return true;
			}
		}
		
		logger.error("No Student exist");
		return false;
	}
	

	@Override
	public int Code() {
		// TODO Auto-generated method stub
		return code;
	}

	@Override
	public List<Integer> PreRequisities() {
		// TODO Auto-generated method stub
		return null;
	}

	
	public void setWeightOfAssignments(List<Integer> weights) 
	{
		for(int i=0;i<weights.size();i++)
		{
			weightOfAssignments.add(weights.get(i));
		}
	}
	
	public void setWeightOfMidterms(List<Integer> weights) 
	{
		for(int i=0;i<weights.size();i++)
		{
			weightOfMidterm.add(weights.get(i));
		}
	}
	
	public void setWeightOfFinals(int weight) 
	{
		weightOfFinal = weight;
	}
	
	public void setWeightOfProject(int weight) 
	{
		weightOfProject = weight;
	}
}
