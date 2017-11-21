package com.ums.courses;

import java.util.List;

public class ProjectCourse extends Course implements IProjectCourse {

	int weightOfProject;
	
	public ProjectCourse(String title,int code,int numberOfAssignments,int numberOfMidterms,int capSize,
			boolean hasProject,boolean shouldGenerateWeights) {
		super(  title, code, numberOfAssignments, numberOfMidterms,capSize,hasProject, shouldGenerateWeights);
		
		
	}

	@Override
	public int WeightOfProject() {
		return weightOfProject;
	}

}
