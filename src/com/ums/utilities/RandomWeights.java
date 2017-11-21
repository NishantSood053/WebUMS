package com.ums.utilities;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class RandomWeights {
	
	private List<Integer> weightOfAssignments = new ArrayList<Integer>();
	private List<Integer> weightOfMidterms = new ArrayList<Integer>();
	int totalNumber;
	private List<Integer> randomNumbers = new ArrayList<Integer>();
	private List<Integer> weightedRandomNumbers = new ArrayList<Integer>();
	int noOfAssignments;
	int noOfMidterms;
	boolean hasProject;
	int weightOfFinals;
	int weightOfProject;
	
	
	public RandomWeights(int noOfAssignments,int noOfMidterms,boolean hasProject) 
	{
		this.noOfAssignments = noOfAssignments;
		this.noOfMidterms = noOfMidterms;
		this.hasProject = hasProject;
		totalNumber = noOfAssignments + noOfMidterms + 1; //1 for final
		if(hasProject) 
		{
			//add one
			totalNumber += 1; // for project
		}
		
		randomNumbers.add(0);
		for(int i=0;i<totalNumber-1;i++) 
		{
			Random rm = new Random();
			randomNumbers.add(rm.nextInt(100));
		}
		randomNumbers.add(100);

		Subtract();
		AssignWeights();
	}
	
	public void Subtract() 
	{
		Collections.sort(randomNumbers);
		for(int i=1;i<randomNumbers.size();i++) 
		{
			weightedRandomNumbers.add(randomNumbers.get(i) - randomNumbers.get(i-1)); 
			//System.out.println("Random number "+weightedRandomNumbers.get(i-1));
		}
		
	}
	
	public void AssignWeights() 
	{
		for(int i=0;i< noOfAssignments;i++) 
		{
				weightOfAssignments.add(weightedRandomNumbers.get(i));
				//System.out.println(weightOfAssignments.get(i));
			
		}
		
		for(int j = 0; j<noOfMidterms;j++) 
		{
			weightOfMidterms.add(weightedRandomNumbers.get(j+noOfAssignments));
			//System.out.println(weightOfMidterms.get(j));
		}
		
		
		weightOfFinals = weightedRandomNumbers.get(noOfAssignments+noOfMidterms);
		
		if(hasProject) 
		{
			weightOfProject =  weightedRandomNumbers.get(noOfAssignments+noOfMidterms+1);
		}
	}
	
	public List<Integer> WeightOfAssignments()
	{
		return weightOfAssignments;
	}
	
	public List<Integer> WeightOfMidterms()
	{
		return weightOfMidterms;
	}

	public int WeightOfFinals() 
	{
		return weightOfFinals;
	}
	
	public int WeightOfProject() 
	{
		return weightOfProject;
	}
}
