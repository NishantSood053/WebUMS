#Feature File contains all invalid paths
Feature: ALL UMS INVALID FEATURES

#LOGIN
	Scenario Outline: Admin Login with invalid password
		Given the university system has started
		And the user inputs <input>
		When the user logs in with password <password>
		Then the admin is not logged in 
	
		Examples:
    		|input	| password   |
    		|admin	| asdasdas	 |
    		|1		| asdsn		 |
    		
    	Scenario Outline: Student Login with invalid password
		Given the university system has started
		And the user inputs <input>
		When the user logs in with studentnumber <id> 
		Then the student is not logged in 
	
		Examples:
    		|input	| id		    |
    		|student	| 1128790	|	
    		|2		| 8872673	|
    		
#Course Creation
	Scenario Outline: Admin Creates an already existing course before registration starts
			Given the university system has started
			And Wait for System Time Start Event to Fire
			And the user inputs 1 
			And the user logs in with password admin
			And the user inputs 1
			When the admin creates the course <course code>,<title>,<number of assignments>,<number of midterms>,<classsize>,<has a project>
			Then the course faliure	
			
		Examples:
			| course code	| title		 			| number of assignments    | number of midterms | classsize | has a project			   |
			| 115001			| Software Engineering	| 2    					   | 2 				   | 30 			| true 					   |
			
	Scenario Outline: Admin Creates a course after registration starts
			Given the university system has started
			And Wait for System Time Start Event to Fire
			And Wait for Registration Start Event to Fire
			And the user inputs 1 
			And the user logs in with password admin
			And the user inputs 1
			When the admin creates the course <course code>,<title>,<number of assignments>,<number of midterms>,<classsize>,<has a project>
			Then the course faliure	
			
		Examples:
			| course code	| title		 			| number of assignments    | number of midterms | classsize | has a project			   |
			| 115010			| OOP					| 2    					   | 2 				   | 30 			| true 					   |

#Admin Create Student
	Scenario Outline: Admin Creates a student after registration starts
			Given the university system has started
			And Wait for System Time Start Event to Fire
			And Wait for Registration Start Event to Fire
			And the user inputs 1 
			And the user logs in with password admin
			And the user inputs 2
			When the admin creates the student <student id>,<name>,<is fulltime>
			Then create student faliure	
		
		Examples:
	    | student id		 | name       | is fulltime		|
	    | 8543790      	 | john        | true            |
	
	#Student with student id 8543748 is initialized as soon as the university system is started    
	Scenario Outline: Admin Creates an already exisiting student before registration starts
			Given the university system has started
			And Wait for System Time Start Event to Fire
			And the user inputs 1 
			And the user logs in with password admin
			And the user inputs 2
			When the admin creates the student <student id>,<name>,<is fulltime>
			Then create student faliure	
		
		Examples:
	    | student id		 | name       | is fulltime		|
	    | 8543748      	 | nishant    | true             |

#Admin Deletes Course

	Scenario: Admin deletes a course which does not exist before term ends
		Given the university system has started
	    And Wait for System Time Start Event to Fire
	    And the user inputs 1 
		And the user logs in with password admin
		And the user inputs 7
	    When the admin deletes course 115050
	    Then delete course faliure
	    
	Scenario: Admin deletes existing course after term ends
		Given the university system has started
	    And Wait for System Time Start Event to Fire
	    And Wait for Term End Event to Fire
		And the user inputs 1 
		And the user logs in with password admin
		And the user inputs 7
	    When the admin deletes course 115010
	    Then delete course faliure
	    
#Admin Deletes Student

	Scenario: Admin Deletes an existing student after term ends
			Given the university system has started
			And Wait for System Time Start Event to Fire
			And Wait for Registration Start Event to Fire
			And Wait for Term End Event to Fire
			And the user inputs 1 
			And the user logs in with password admin
			And the user inputs 5
			When the admin deletes student 8543748
			Then delete student faliure	
	
	Scenario: Admin Deletes a student which has not been created before term ends
			Given the university system has started
			And Wait for System Time Start Event to Fire
			And the user inputs 1 
			And the user logs in with password admin
			And the user inputs 5
			When the admin deletes student 8567244
			Then delete student faliure	

#Admin Cancels the course

	Scenario: Admin cancels the course after registeration ends
		Given the university system has started
	    And Wait for System Time Start Event to Fire
	    And Wait for Registration Start Event to Fire
	    And Wait for Registration End Event to Fire
		And the user inputs 1 
		And the user logs in with password admin
	   	And the user inputs 6
	    When the admin cancel course 115070	
	    Then cancel course faliure
	    
	Scenario: Admin cancels the course after term ends
		Given the university system has started
	    And Wait for System Time Start Event to Fire
		And the user inputs 1 
		And the user logs in with password admin
	   	And the user inputs 6
	    When the admin cancel course 115070	
	    Then cancel course faliure

#Student Selects the Course
	Scenario Outline: Student Selects a course which does not exist
		Given the university system has started
		And the user inputs student
		And the user logs in with studentnumber 8543748
		And the user inputs 2
		When the user selects the course <course code>
		Then select course faliure 
	
		Examples:
    		|course code	|
    		|112001  	|	
 
 #Student Registers a Course
 	Scenario Outline: Student Registers for a course before registration starts 
		Given the university system has started
		And Wait for System Time Start Event to Fire
	    And the user inputs student
		And the user logs in with studentnumber 8543748
		And the user inputs 2
		And the user selects the course <course code>
		When the user inputs 3
		Then register course faliure 
	
		Examples:
    		|course code	|
    		|115001  	|
    		
  	Scenario Outline: Student Registers for a course after registration ends 
		Given the university system has started
		And Wait for System Time Start Event to Fire
	    And Wait for Registration Start Event to Fire
	    And Wait for Registration End Event to Fire
	    And the user inputs student
		And the user logs in with studentnumber 8543748
		And the user inputs 2
		And the user selects the course <course code>
		When the user inputs 3
		Then register course faliure 
	
		Examples:
    		|course code	|
    		|115001  	|	
   
 	Scenario Outline: Student Registers for an already registered course after registration starts 
		Given the university system has started
		And Wait for System Time Start Event to Fire
	    And Wait for Registration Start Event to Fire
	    And the user inputs student
		And the user logs in with studentnumber 8543748
		And the user inputs 2
		And the user selects the course <course code>
		And the user inputs 3
		And the user inputs 2
		And the user selects the course <course code>
		When the user inputs 3
		Then register course faliure 
	
		Examples:
    		|course code	|
    		|115001  	|	
    		
  #Student Deregisters a  course
 	Scenario Outline: Student De-Registers for a course before registration starts 
		Given the university system has started
		And Wait for System Time Start Event to Fire
		And the user inputs student
		And the user logs in with studentnumber 8543748
		And the user inputs 2
		And the user selects the course <course code>
		And the user inputs 3
		And the user inputs 5
		When the user selects the course <course code>
		Then deregister course faliure 
	
		Examples:
    		|course code	|
    		|115001  	|	 
    		
 	Scenario Outline: Student De-Registers for a course after registration ends 
		Given the university system has started
		And Wait for System Time Start Event to Fire
	    And Wait for Registration Start Event to Fire
	     And Wait for Registration End Event to Fire
		And the user inputs student
		And the user logs in with studentnumber 8543748
		And the user inputs 2
		And the user selects the course <course code>
		And the user inputs 3
		And the user inputs 5
		When the user selects the course <course code>
		Then deregister course faliure 
	
		Examples:
    		|course code	|
    		|115001  	|	 
    		
 	Scenario Outline: Student De-Registers for a course not registered to 
		Given the university system has started
		And Wait for System Time Start Event to Fire
	    And Wait for Registration Start Event to Fire
		And the user inputs student
		And the user logs in with studentnumber 8543748
		And the user inputs 5
		When the user selects the course <course code>
		Then deregister course faliure 
	
		Examples:
    		|course code	|
    		|115001  	|	
    		
  #Student Drops the course 
 	Scenario Outline: Student Drops a course before term starts
		Given the university system has started
		And Wait for System Time Start Event to Fire
	    And Wait for Registration Start Event to Fire
		And the user inputs student
		And the user logs in with studentnumber 8543748
		And the user inputs 2
		And the user selects the course <course code>
		And the user inputs 4
		When the user selects the course <course code>
		Then drop course faliure 
	 
	
		Examples:
    		|course code	|
    		|115001  	|
    		
    	Scenario Outline: Student Drops an unselected course after term starts
		Given the university system has started
		And Wait for System Time Start Event to Fire
	    And Wait for Registration Start Event to Fire
	    And Wait for Term Start Event to Fire
		And the user inputs student
		And the user logs in with studentnumber 8543748
		And the user inputs 4
		When the user selects the course <course code>
		Then drop course faliure 
		
		Examples:
    		|course code	|
    		|115001  	|
	 

 