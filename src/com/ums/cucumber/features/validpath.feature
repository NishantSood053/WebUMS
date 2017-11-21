#Feature File contains all valid paths
Feature: ALL UMS VALID FEATURES
#LOGIN
	Scenario Outline: Admin Login with valid password
		Given the university system has started
		And the user inputs <input>
		When the user logs in with password <password>
		Then the admin is logged in 
	
		Examples:
    		|input	| password   |
    		|admin	| admin		 |
    		|1		| admin		 |
    		
  Scenario Outline: Student Login with valid password
		Given the university system has started
		And the user inputs <input>
		When the user logs in with studentnumber <id> 
		Then the student is logged in 
	
		Examples:
    		|input	| id		    |
    		|student	| 8543748	|	
    		|2		| 8543748	|
 
 #ADMIN CREATE COURSE
 
	 Scenario Outline: Admin Creates a course before registration starts
			Given the university system has started
			And Wait for System Time Start Event to Fire
			And the user inputs 1 
			And the user logs in with password admin
			And the user inputs 1
			When the admin creates the course <course code>,<title>,<number of assignments>,<number of midterms>,<classsize>,<has a project>
			Then the course success	
		
		Examples:
			| course code	| title		 			| number of assignments    | number of midterms | classsize | has a project			   |
			| 115010			| OOP					| 2    					   | 2 				   | 30 			| true 					   |
		
#Admin Create Student

	 Scenario Outline: Admin Creates a student before registration starts
			Given the university system has started
			And Wait for System Time Start Event to Fire
			And the user inputs 1 
			And the user logs in with password admin
			And the user inputs 2
			When the admin creates the student <student id>,<name>,<is fulltime>
			Then create student success	
		
		Examples:
	    | student id		 | name       | is fulltime		|
	    | 8543790      	 | john        | true            |
	    
#Admin Deletes Course
	Scenario Outline: Admin deletes existing course before term ends
		Given the university system has started
	    And Wait for System Time Start Event to Fire
		And the user inputs 1 
		And the user logs in with password admin
	   	And the user inputs 1
		And the admin creates the course <course code>,<title>,<number of assignments>,<number of midterms>,<classsize>,<has a project>
	    And the user inputs 7
	    When the admin deletes course <course code>
	    Then delete course success
	
	    Examples: 
	    | course code	| title		 			| number of assignments    | number of midterms | classsize 	| has a project			   |
		| 115020			| Ad Hoc Networking		| 2    					   | 2 				   | 30 			| true 					   |
    	   
#Admin Delete Student

 	Scenario Outline: Admin Deletes a student before registration starts
			Given the university system has started
			And Wait for System Time Start Event to Fire
			And the user inputs 1 
			And the user logs in with password admin
			And the user inputs 2
			And the admin creates the student <student id>,<name>,<is fulltime>
			And the user inputs 5
			When the admin deletes student <student id>
			Then delete student success	
		
		Examples:
	    | student id		 | name       | is fulltime		|
	    | 8543730      	 | wick       | false            |
	    
#Admin Cancel the Course

Scenario Outline: Admin cancels the course before term ends
		Given the university system has started
	    And Wait for System Time Start Event to Fire
		And the user inputs 1 
		And the user logs in with password admin
	   	And the user inputs 1
		And the admin creates the course <course code>,<title>,<number of assignments>,<number of midterms>,<classsize>,<has a project>
	    And the user inputs 6
	    When the admin cancel course <course code>
	    Then cancel course success
	
	    Examples: 
	    | course code	| title		 						| number of assignments    | number of midterms | classsize 	| has a project			   |
		| 115070			| Internetworking Technologies		| 2    					   | 2 				   | 30 			| true 					   |
			   		
 #LOGOUT 
    		
    	Scenario Outline: Admin Logouts
		Given the university system has started
		And the user inputs <1>
		When the user logs in with password <admin>
		And the user inputs <input>
		Then the admin is logged out 
	
		Examples:
    		|input|
    		|9	  |
    		
  #Student Selects a Course
  Scenario Outline: Student Selects an exisiting Course
		Given the university system has started
		And the user inputs 2
		And the user logs in with studentnumber 8543748
		And the user inputs 2
		When the user selects the course <course code>
		Then select course success 
	
		Examples:
    		|course code	|
    		|115001  	|	
    		
 #Student Registers a Course
  	Scenario Outline: Student Registers for a course after registration starts and before term starts
		Given the university system has started
		And Wait for System Time Start Event to Fire
	    And Wait for Registration Start Event to Fire
		And the user inputs student
		And the user logs in with studentnumber 8543748
		And the user inputs 2
		And the user selects the course <course code>
		When the user inputs 3
		Then register course success 
	
		Examples:
    		|course code	|
    		|115001  	|	  						
   
 #Student Deregisters a course
 
 	Scenario Outline: Student De-Registers for a course after registration starts and before term starts
		Given the university system has started
		And Wait for System Time Start Event to Fire
	    And Wait for Registration Start Event to Fire
		And the user inputs student
		And the user logs in with studentnumber 8543748
		And the user inputs 2
		And the user selects the course <course code>
		And the user inputs 3
		And the user inputs 5
		When the user selects the course <course code>
		Then deregister course success 
	
		Examples:
    		|course code	|
    		|115001  	|	
 
 #Student Drops the course 
 	Scenario Outline: Student Drops for a course after term starts
		Given the university system has started
		And Wait for System Time Start Event to Fire
	    And Wait for Registration Start Event to Fire
	    And Wait for Term Start Event to Fire
		And the user inputs student
		And the user logs in with studentnumber 8543748
		And the user inputs 2
		And the user selects the course <course code>
		And the user inputs 4
		When the user selects the course <course code>
		Then drop course success 
	 
	
		Examples:
    		|course code	|
    		|115001  	|	
 
   
 
 		
   
 