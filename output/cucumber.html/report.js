$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("invalidpath.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature File contains all invalid paths"
    }
  ],
  "line": 2,
  "name": "ALL UMS INVALID FEATURES",
  "description": "",
  "id": "all-ums-invalid-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#LOGIN"
    }
  ],
  "line": 5,
  "name": "Admin Login with invalid password",
  "description": "",
  "id": "all-ums-invalid-features;admin-login-with-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user inputs \u003cinput\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user logs in with password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the admin is not logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;admin-login-with-invalid-password;",
  "rows": [
    {
      "cells": [
        "input",
        "password"
      ],
      "line": 12,
      "id": "all-ums-invalid-features;admin-login-with-invalid-password;;1"
    },
    {
      "cells": [
        "admin",
        "asdasdas"
      ],
      "line": 13,
      "id": "all-ums-invalid-features;admin-login-with-invalid-password;;2"
    },
    {
      "cells": [
        "1",
        "asdsn"
      ],
      "line": 14,
      "id": "all-ums-invalid-features;admin-login-with-invalid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Admin Login with invalid password",
  "description": "",
  "id": "all-ums-invalid-features;admin-login-with-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user inputs admin",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user logs in with password asdasdas",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the admin is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 141136321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 2441010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdasdas",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 65990,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_not_logged_in()"
});
formatter.result({
  "duration": 1121320,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Admin Login with invalid password",
  "description": "",
  "id": "all-ums-invalid-features;admin-login-with-invalid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user inputs 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user logs in with password asdsn",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the admin is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 3442397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 69793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdsn",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 54496,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_not_logged_in()"
});
formatter.result({
  "duration": 21124,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Student Login with invalid password",
  "description": "",
  "id": "all-ums-invalid-features;student-login-with-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the user inputs \u003cinput\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user logs in with studentnumber \u003cid\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;student-login-with-invalid-password;",
  "rows": [
    {
      "cells": [
        "input",
        "id"
      ],
      "line": 23,
      "id": "all-ums-invalid-features;student-login-with-invalid-password;;1"
    },
    {
      "cells": [
        "student",
        "1128790"
      ],
      "line": 24,
      "id": "all-ums-invalid-features;student-login-with-invalid-password;;2"
    },
    {
      "cells": [
        "2",
        "8872673"
      ],
      "line": 25,
      "id": "all-ums-invalid-features;student-login-with-invalid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Student Login with invalid password",
  "description": "",
  "id": "all-ums-invalid-features;student-login-with-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the user inputs student",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user logs in with studentnumber 1128790",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2669403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 45193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1128790",
      "offset": 36
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_studentnumber(String)"
});
formatter.result({
  "duration": 93275,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 19126,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Student Login with invalid password",
  "description": "",
  "id": "all-ums-invalid-features;student-login-with-invalid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the user inputs 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user logs in with studentnumber 8872673",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2687409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 71597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8872673",
      "offset": 36
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_studentnumber(String)"
});
formatter.result({
  "duration": 57894,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 19560,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 27,
      "value": "#Course Creation"
    }
  ],
  "line": 28,
  "name": "Admin Creates an already existing course before registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-an-already-existing-course-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the admin creates the course \u003ccourse code\u003e,\u003ctitle\u003e,\u003cnumber of assignments\u003e,\u003cnumber of midterms\u003e,\u003cclasssize\u003e,\u003chas a project\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the course faliure",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-an-already-existing-course-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "course code",
        "title",
        "number of assignments",
        "number of midterms",
        "classsize",
        "has a project"
      ],
      "line": 38,
      "id": "all-ums-invalid-features;admin-creates-an-already-existing-course-before-registration-starts;;1"
    },
    {
      "cells": [
        "115001",
        "Software Engineering",
        "2",
        "2",
        "30",
        "true"
      ],
      "line": 39,
      "id": "all-ums-invalid-features;admin-creates-an-already-existing-course-before-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "Admin Creates an already existing course before registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-an-already-existing-course-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the admin creates the course 115001,Software Engineering,2,2,30,true",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 3230849,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 22144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 61968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 42981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 40026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115001",
      "offset": 29
    },
    {
      "val": "Software Engineering",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 57
    },
    {
      "val": "2",
      "offset": 59
    },
    {
      "val": "30",
      "offset": 61
    },
    {
      "val": "true",
      "offset": 64
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_course(int,String,int,int,int,String)"
});
formatter.result({
  "duration": 2213294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 47025,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "Admin Creates a course after registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-a-course-after-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the admin creates the course \u003ccourse code\u003e,\u003ctitle\u003e,\u003cnumber of assignments\u003e,\u003cnumber of midterms\u003e,\u003cclasssize\u003e,\u003chas a project\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "the course faliure",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-a-course-after-registration-starts;",
  "rows": [
    {
      "cells": [
        "course code",
        "title",
        "number of assignments",
        "number of midterms",
        "classsize",
        "has a project"
      ],
      "line": 52,
      "id": "all-ums-invalid-features;admin-creates-a-course-after-registration-starts;;1"
    },
    {
      "cells": [
        "115010",
        "OOP",
        "2",
        "2",
        "30",
        "true"
      ],
      "line": 53,
      "id": "all-ums-invalid-features;admin-creates-a-course-after-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 53,
  "name": "Admin Creates a course after registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-a-course-after-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the admin creates the course 115010,OOP,2,2,30,true",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "the course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 3491148,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 17916,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 23480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 58872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 46208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 43537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115010",
      "offset": 29
    },
    {
      "val": "OOP",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 40
    },
    {
      "val": "2",
      "offset": 42
    },
    {
      "val": "30",
      "offset": 44
    },
    {
      "val": "true",
      "offset": 47
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_course(int,String,int,int,int,String)"
});
formatter.result({
  "duration": 618779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 33680,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 55,
      "value": "#Admin Create Student"
    }
  ],
  "line": 56,
  "name": "Admin Creates a student after registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-a-student-after-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the admin creates the student \u003cstudent id\u003e,\u003cname\u003e,\u003cis fulltime\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "create student faliure",
  "keyword": "Then "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-a-student-after-registration-starts;",
  "rows": [
    {
      "cells": [
        "student id",
        "name",
        "is fulltime"
      ],
      "line": 67,
      "id": "all-ums-invalid-features;admin-creates-a-student-after-registration-starts;;1"
    },
    {
      "cells": [
        "8543790",
        "john",
        "true"
      ],
      "line": 68,
      "id": "all-ums-invalid-features;admin-creates-a-student-after-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 68,
  "name": "Admin Creates a student after registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-a-student-after-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the admin creates the student 8543790,john,true",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "create student faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 3686194,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 17404,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 15357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 50747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 53191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 38382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543790",
      "offset": 30
    },
    {
      "val": "john",
      "offset": 38
    },
    {
      "val": "true",
      "offset": 43
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_student_john_true(int,String,String)"
});
formatter.result({
  "duration": 185049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 39475,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 70,
      "value": "#Student with student id 8543748 is initialized as soon as the university system is started"
    }
  ],
  "line": 71,
  "name": "Admin Creates an already exisiting student before registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-an-already-exisiting-student-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 72,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the admin creates the student \u003cstudent id\u003e,\u003cname\u003e,\u003cis fulltime\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "create student faliure",
  "keyword": "Then "
});
formatter.examples({
  "line": 80,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-an-already-exisiting-student-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "student id",
        "name",
        "is fulltime"
      ],
      "line": 81,
      "id": "all-ums-invalid-features;admin-creates-an-already-exisiting-student-before-registration-starts;;1"
    },
    {
      "cells": [
        "8543748",
        "nishant",
        "true"
      ],
      "line": 82,
      "id": "all-ums-invalid-features;admin-creates-an-already-exisiting-student-before-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 82,
  "name": "Admin Creates an already exisiting student before registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-an-already-exisiting-student-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 72,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the admin creates the student 8543748,nishant,true",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "create student faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 3697574,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 14326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 53998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 42575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 39380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543748",
      "offset": 30
    },
    {
      "val": "nishant",
      "offset": 38
    },
    {
      "val": "true",
      "offset": 46
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_student_john_true(int,String,String)"
});
formatter.result({
  "duration": 631024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 115326,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 84,
      "value": "#Admin Deletes Course"
    }
  ],
  "line": 86,
  "name": "Admin deletes a course which does not exist before term ends",
  "description": "",
  "id": "all-ums-invalid-features;admin-deletes-a-course-which-does-not-exist-before-term-ends",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 87,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "the user inputs 7",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the admin deletes course 115050",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "delete course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 3389569,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 18125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 62204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 45412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 58332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115050",
      "offset": 25
    }
  ],
  "location": "UMSStepDefinitions.the_admin_deletes_course(String)"
});
formatter.result({
  "duration": 119744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 42460,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "Admin deletes existing course after term ends",
  "description": "",
  "id": "all-ums-invalid-features;admin-deletes-existing-course-after-term-ends",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 96,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "Wait for Term End Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the user inputs 7",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the admin deletes course 115010",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "delete course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2703564,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 16880,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Term_End_Event_to_Fire()"
});
formatter.result({
  "duration": 21527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 45360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 55971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 356181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115010",
      "offset": 25
    }
  ],
  "location": "UMSStepDefinitions.the_admin_deletes_course(String)"
});
formatter.result({
  "duration": 101728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 46935,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 105,
      "value": "#Admin Deletes Student"
    }
  ],
  "line": 107,
  "name": "Admin Deletes an existing student after term ends",
  "description": "",
  "id": "all-ums-invalid-features;admin-deletes-an-existing-student-after-term-ends",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 108,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Wait for Term End Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "the user inputs 5",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "the admin deletes student 8543748",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "delete student faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 3225548,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 15639,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 10524,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Term_End_Event_to_Fire()"
});
formatter.result({
  "duration": 9889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 44574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 31972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 45601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543748",
      "offset": 26
    }
  ],
  "location": "UMSStepDefinitions.the_admin_deletes_student(String)"
});
formatter.result({
  "duration": 163508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 44484,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Admin Deletes a student which has not been created before term ends",
  "description": "",
  "id": "all-ums-invalid-features;admin-deletes-a-student-which-has-not-been-created-before-term-ends",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 119,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the user inputs 5",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "the admin deletes student 8567244",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "delete student faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 3171094,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 13032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 62047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 36826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 30813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8567244",
      "offset": 26
    }
  ],
  "location": "UMSStepDefinitions.the_admin_deletes_student(String)"
});
formatter.result({
  "duration": 133032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 48333,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 127,
      "value": "#Admin Cancels the course"
    }
  ],
  "line": 129,
  "name": "Admin cancels the course after registeration ends",
  "description": "",
  "id": "all-ums-invalid-features;admin-cancels-the-course-after-registeration-ends",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 130,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 131,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Wait for Registration End Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "the user inputs 6",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "the admin cancel course 115070",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "cancel course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2752683,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 15345,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 14935,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_End_Event_to_Fire()"
});
formatter.result({
  "duration": 20206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 42902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 97473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 40085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115070",
      "offset": 24
    }
  ],
  "location": "UMSStepDefinitions.the_admin_cancel_course(String)"
});
formatter.result({
  "duration": 119695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 42845,
  "status": "passed"
});
formatter.scenario({
  "line": 140,
  "name": "Admin cancels the course after term ends",
  "description": "",
  "id": "all-ums-invalid-features;admin-cancels-the-course-after-term-ends",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 141,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "the user inputs 6",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "the admin cancel course 115070",
  "keyword": "When "
});
formatter.step({
  "line": 147,
  "name": "cancel course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2139118,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 13720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 46200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 45270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 58735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115070",
      "offset": 24
    }
  ],
  "location": "UMSStepDefinitions.the_admin_cancel_course(String)"
});
formatter.result({
  "duration": 86505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 42166,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 149,
      "value": "#Student Selects the Course"
    }
  ],
  "line": 150,
  "name": "Student Selects a course which does not exist",
  "description": "",
  "id": "all-ums-invalid-features;student-selects-a-course-which-does-not-exist",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 151,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "the user logs in with studentnumber 8543748",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "the user selects the course \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 156,
  "name": "select course faliure",
  "keyword": "Then "
});
formatter.examples({
  "line": 158,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;student-selects-a-course-which-does-not-exist;",
  "rows": [
    {
      "cells": [
        "course code"
      ],
      "line": 159,
      "id": "all-ums-invalid-features;student-selects-a-course-which-does-not-exist;;1"
    },
    {
      "cells": [
        "112001"
      ],
      "line": 160,
      "id": "all-ums-invalid-features;student-selects-a-course-which-does-not-exist;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 160,
  "name": "Student Selects a course which does not exist",
  "description": "",
  "id": "all-ums-invalid-features;student-selects-a-course-which-does-not-exist;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 151,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "the user logs in with studentnumber 8543748",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "the user selects the course 112001",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 156,
  "name": "select course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 3234331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 34501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543748",
      "offset": 36
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_studentnumber(String)"
});
formatter.result({
  "duration": 84184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 40853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "112001",
      "offset": 28
    }
  ],
  "location": "UMSStepDefinitions.the_user_selects_the_course(String)"
});
formatter.result({
  "duration": 140336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 41865,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 162,
      "value": "#Student Registers a Course"
    }
  ],
  "line": 163,
  "name": "Student Registers for a course after registration ends",
  "description": "",
  "id": "all-ums-invalid-features;student-registers-for-a-course-after-registration-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 164,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 165,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "Wait for Registration End Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "the user logs in with studentnumber 8543748",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "the user selects the course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "the user inputs 3",
  "keyword": "When "
});
formatter.step({
  "line": 173,
  "name": "register course faliure",
  "keyword": "Then "
});
formatter.examples({
  "line": 175,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;student-registers-for-a-course-after-registration-ends;",
  "rows": [
    {
      "cells": [
        "course code"
      ],
      "line": 176,
      "id": "all-ums-invalid-features;student-registers-for-a-course-after-registration-ends;;1"
    },
    {
      "cells": [
        "115001"
      ],
      "line": 177,
      "id": "all-ums-invalid-features;student-registers-for-a-course-after-registration-ends;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 177,
  "name": "Student Registers for a course after registration ends",
  "description": "",
  "id": "all-ums-invalid-features;student-registers-for-a-course-after-registration-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 164,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 165,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "Wait for Registration End Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "the user logs in with studentnumber 8543748",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "the user selects the course 115001",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "the user inputs 3",
  "keyword": "When "
});
formatter.step({
  "line": 173,
  "name": "register course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2260381,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 12092,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 10026,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_End_Event_to_Fire()"
});
formatter.result({
  "duration": 9713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 31009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543748",
      "offset": 36
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_studentnumber(String)"
});
formatter.result({
  "duration": 45233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 23285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115001",
      "offset": 28
    }
  ],
  "location": "UMSStepDefinitions.the_user_selects_the_course(String)"
});
formatter.result({
  "duration": 334781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 687553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 37456,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 179,
  "name": "Student Registers for an already registered course after registration starts",
  "description": "",
  "id": "all-ums-invalid-features;student-registers-for-an-already-registered-course-after-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 180,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 181,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "the user logs in with studentnumber 8543748",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "the user selects the course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "the user inputs 3",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "the user selects the course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "the user inputs 3",
  "keyword": "When "
});
formatter.step({
  "line": 191,
  "name": "register course faliure",
  "keyword": "Then "
});
formatter.examples({
  "line": 193,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;student-registers-for-an-already-registered-course-after-registration-starts;",
  "rows": [
    {
      "cells": [
        "course code"
      ],
      "line": 194,
      "id": "all-ums-invalid-features;student-registers-for-an-already-registered-course-after-registration-starts;;1"
    },
    {
      "cells": [
        "115001"
      ],
      "line": 195,
      "id": "all-ums-invalid-features;student-registers-for-an-already-registered-course-after-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 195,
  "name": "Student Registers for an already registered course after registration starts",
  "description": "",
  "id": "all-ums-invalid-features;student-registers-for-an-already-registered-course-after-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 180,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 181,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "the user logs in with studentnumber 8543748",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "the user selects the course 115001",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "the user inputs 3",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "the user selects the course 115001",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "the user inputs 3",
  "keyword": "When "
});
formatter.step({
  "line": 191,
  "name": "register course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2454802,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 12624,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 9415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 34391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543748",
      "offset": 36
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_studentnumber(String)"
});
formatter.result({
  "duration": 41774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 35569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115001",
      "offset": 28
    }
  ],
  "location": "UMSStepDefinitions.the_user_selects_the_course(String)"
});
formatter.result({
  "duration": 386240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 890261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115001",
      "offset": 28
    }
  ],
  "location": "UMSStepDefinitions.the_user_selects_the_course(String)"
});
formatter.result({
  "duration": 359716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 101730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 36743,
  "status": "passed"
});
formatter.uri("validpath.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature File contains all valid paths"
    }
  ],
  "line": 2,
  "name": "ALL UMS VALID FEATURES",
  "description": "",
  "id": "all-ums-valid-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#LOGIN"
    }
  ],
  "line": 4,
  "name": "Admin Login with valid password",
  "description": "",
  "id": "all-ums-valid-features;admin-login-with-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user inputs \u003cinput\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user logs in with password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the admin is logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;admin-login-with-valid-password;",
  "rows": [
    {
      "cells": [
        "input",
        "password"
      ],
      "line": 11,
      "id": "all-ums-valid-features;admin-login-with-valid-password;;1"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 12,
      "id": "all-ums-valid-features;admin-login-with-valid-password;;2"
    },
    {
      "cells": [
        "1",
        "admin"
      ],
      "line": 13,
      "id": "all-ums-valid-features;admin-login-with-valid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Admin Login with valid password",
  "description": "",
  "id": "all-ums-valid-features;admin-login-with-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user inputs admin",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user logs in with password admin",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the admin is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2860916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 32295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 27538,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_logged_in()"
});
formatter.result({
  "duration": 33744,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Admin Login with valid password",
  "description": "",
  "id": "all-ums-valid-features;admin-login-with-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user inputs 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user logs in with password admin",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the admin is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2337421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 31245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 50124,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_logged_in()"
});
formatter.result({
  "duration": 12508,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Student Login with valid password",
  "description": "",
  "id": "all-ums-valid-features;student-login-with-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the user inputs \u003cinput\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user logs in with studentnumber \u003cid\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;student-login-with-valid-password;",
  "rows": [
    {
      "cells": [
        "input",
        "id"
      ],
      "line": 22,
      "id": "all-ums-valid-features;student-login-with-valid-password;;1"
    },
    {
      "cells": [
        "student",
        "8543748"
      ],
      "line": 23,
      "id": "all-ums-valid-features;student-login-with-valid-password;;2"
    },
    {
      "cells": [
        "2",
        "8543748"
      ],
      "line": 24,
      "id": "all-ums-valid-features;student-login-with-valid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Student Login with valid password",
  "description": "",
  "id": "all-ums-valid-features;student-login-with-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the user inputs student",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user logs in with studentnumber 8543748",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2464344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 30188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543748",
      "offset": 36
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_studentnumber(String)"
});
formatter.result({
  "duration": 44330,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 15536,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Student Login with valid password",
  "description": "",
  "id": "all-ums-valid-features;student-login-with-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the user inputs 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user logs in with studentnumber 8543748",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 7541773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 60664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543748",
      "offset": 36
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_studentnumber(String)"
});
formatter.result({
  "duration": 53852,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 12008,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 26,
      "value": "#ADMIN CREATE COURSE"
    }
  ],
  "line": 28,
  "name": "Admin Creates a course before registration starts",
  "description": "",
  "id": "all-ums-valid-features;admin-creates-a-course-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the admin creates the course \u003ccourse code\u003e,\u003ctitle\u003e,\u003cnumber of assignments\u003e,\u003cnumber of midterms\u003e,\u003cclasssize\u003e,\u003chas a project\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the course success",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;admin-creates-a-course-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "course code",
        "title",
        "number of assignments",
        "number of midterms",
        "classsize",
        "has a project"
      ],
      "line": 38,
      "id": "all-ums-valid-features;admin-creates-a-course-before-registration-starts;;1"
    },
    {
      "cells": [
        "115010",
        "OOP",
        "2",
        "2",
        "30",
        "true"
      ],
      "line": 39,
      "id": "all-ums-valid-features;admin-creates-a-course-before-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "Admin Creates a course before registration starts",
  "description": "",
  "id": "all-ums-valid-features;admin-creates-a-course-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the admin creates the course 115010,OOP,2,2,30,true",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the course success",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2093981,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 12634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 30921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 27826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 21631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115010",
      "offset": 29
    },
    {
      "val": "OOP",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 40
    },
    {
      "val": "2",
      "offset": 42
    },
    {
      "val": "30",
      "offset": 44
    },
    {
      "val": "true",
      "offset": 47
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_course(int,String,int,int,int,String)"
});
formatter.result({
  "duration": 657755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.success(String)"
});
formatter.result({
  "duration": 31352,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 41,
      "value": "#Admin Create Student"
    }
  ],
  "line": 43,
  "name": "Admin Creates a student before registration starts",
  "description": "",
  "id": "all-ums-valid-features;admin-creates-a-student-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the admin creates the student \u003cstudent id\u003e,\u003cname\u003e,\u003cis fulltime\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "create student success",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;admin-creates-a-student-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "student id",
        "name",
        "is fulltime"
      ],
      "line": 53,
      "id": "all-ums-valid-features;admin-creates-a-student-before-registration-starts;;1"
    },
    {
      "cells": [
        "8543790",
        "john",
        "true"
      ],
      "line": 54,
      "id": "all-ums-valid-features;admin-creates-a-student-before-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 54,
  "name": "Admin Creates a student before registration starts",
  "description": "",
  "id": "all-ums-valid-features;admin-creates-a-student-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the admin creates the student 8543790,john,true",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "create student success",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 1396560,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 10148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 24610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 248464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 22168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543790",
      "offset": 30
    },
    {
      "val": "john",
      "offset": 38
    },
    {
      "val": "true",
      "offset": 43
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_student_john_true(int,String,String)"
});
formatter.result({
  "duration": 290692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.success(String)"
});
formatter.result({
  "duration": 25009,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 56,
      "value": "#Admin Deletes Course"
    }
  ],
  "line": 57,
  "name": "Admin deletes existing course before term ends",
  "description": "",
  "id": "all-ums-valid-features;admin-deletes-existing-course-before-term-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the admin creates the course \u003ccourse code\u003e,\u003ctitle\u003e,\u003cnumber of assignments\u003e,\u003cnumber of midterms\u003e,\u003cclasssize\u003e,\u003chas a project\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the user inputs 7",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the admin deletes course \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "delete course success",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;admin-deletes-existing-course-before-term-ends;",
  "rows": [
    {
      "cells": [
        "course code",
        "title",
        "number of assignments",
        "number of midterms",
        "classsize",
        "has a project"
      ],
      "line": 69,
      "id": "all-ums-valid-features;admin-deletes-existing-course-before-term-ends;;1"
    },
    {
      "cells": [
        "115020",
        "Ad Hoc Networking",
        "2",
        "2",
        "30",
        "true"
      ],
      "line": 70,
      "id": "all-ums-valid-features;admin-deletes-existing-course-before-term-ends;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 70,
  "name": "Admin deletes existing course before term ends",
  "description": "",
  "id": "all-ums-valid-features;admin-deletes-existing-course-before-term-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the admin creates the course 115020,Ad Hoc Networking,2,2,30,true",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the user inputs 7",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the admin deletes course 115020",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "delete course success",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 3145617,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 11794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 36686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115020",
      "offset": 29
    },
    {
      "val": "Ad Hoc Networking",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 54
    },
    {
      "val": "2",
      "offset": 56
    },
    {
      "val": "30",
      "offset": 58
    },
    {
      "val": "true",
      "offset": 61
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_course(int,String,int,int,int,String)"
});
formatter.result({
  "duration": 505257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 25631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115020",
      "offset": 25
    }
  ],
  "location": "UMSStepDefinitions.the_admin_deletes_course(String)"
});
formatter.result({
  "duration": 390135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.success(String)"
});
formatter.result({
  "duration": 25777,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 72,
      "value": "#Admin Delete Student"
    }
  ],
  "line": 74,
  "name": "Admin Deletes a student before registration starts",
  "description": "",
  "id": "all-ums-valid-features;admin-deletes-a-student-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the admin creates the student \u003cstudent id\u003e,\u003cname\u003e,\u003cis fulltime\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs 5",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the admin deletes student \u003cstudent id\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "delete student success",
  "keyword": "Then "
});
formatter.examples({
  "line": 85,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;admin-deletes-a-student-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "student id",
        "name",
        "is fulltime"
      ],
      "line": 86,
      "id": "all-ums-valid-features;admin-deletes-a-student-before-registration-starts;;1"
    },
    {
      "cells": [
        "8543730",
        "wick",
        "false"
      ],
      "line": 87,
      "id": "all-ums-valid-features;admin-deletes-a-student-before-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 87,
  "name": "Admin Deletes a student before registration starts",
  "description": "",
  "id": "all-ums-valid-features;admin-deletes-a-student-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the admin creates the student 8543730,wick,false",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs 5",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the admin deletes student 8543730",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "delete student success",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 1305217,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 239347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 25498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 20828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543730",
      "offset": 30
    },
    {
      "val": "wick",
      "offset": 38
    },
    {
      "val": "false",
      "offset": 43
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_student_john_true(int,String,String)"
});
formatter.result({
  "duration": 242559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543730",
      "offset": 26
    }
  ],
  "location": "UMSStepDefinitions.the_admin_deletes_student(String)"
});
formatter.result({
  "duration": 136069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.success(String)"
});
formatter.result({
  "duration": 24767,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 89,
      "value": "#Admin Cancel the Course"
    }
  ],
  "line": 91,
  "name": "Admin cancels the course before term ends",
  "description": "",
  "id": "all-ums-valid-features;admin-cancels-the-course-before-term-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 92,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the admin creates the course \u003ccourse code\u003e,\u003ctitle\u003e,\u003cnumber of assignments\u003e,\u003cnumber of midterms\u003e,\u003cclasssize\u003e,\u003chas a project\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the user inputs 6",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the admin cancel course \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "cancel course success",
  "keyword": "Then "
});
formatter.examples({
  "line": 102,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;admin-cancels-the-course-before-term-ends;",
  "rows": [
    {
      "cells": [
        "course code",
        "title",
        "number of assignments",
        "number of midterms",
        "classsize",
        "has a project"
      ],
      "line": 103,
      "id": "all-ums-valid-features;admin-cancels-the-course-before-term-ends;;1"
    },
    {
      "cells": [
        "115070",
        "Internetworking Technologies",
        "2",
        "2",
        "30",
        "true"
      ],
      "line": 104,
      "id": "all-ums-valid-features;admin-cancels-the-course-before-term-ends;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 104,
  "name": "Admin cancels the course before term ends",
  "description": "",
  "id": "all-ums-valid-features;admin-cancels-the-course-before-term-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 92,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the admin creates the course 115070,Internetworking Technologies,2,2,30,true",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the user inputs 6",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the admin cancel course 115070",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "cancel course success",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 1736492,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 16030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 23331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 21215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115070",
      "offset": 29
    },
    {
      "val": "Internetworking Technologies",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 65
    },
    {
      "val": "2",
      "offset": 67
    },
    {
      "val": "30",
      "offset": 69
    },
    {
      "val": "true",
      "offset": 72
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_course(int,String,int,int,int,String)"
});
formatter.result({
  "duration": 550391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 25892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115070",
      "offset": 24
    }
  ],
  "location": "UMSStepDefinitions.the_admin_cancel_course(String)"
});
formatter.result({
  "duration": 376074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.success(String)"
});
formatter.result({
  "duration": 33432,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 106,
      "value": "#LOGOUT"
    }
  ],
  "line": 108,
  "name": "Admin Logouts",
  "description": "",
  "id": "all-ums-valid-features;admin-logouts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 109,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 110,
  "name": "the user inputs \u003c1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the user logs in with password \u003cadmin\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "the user inputs \u003cinput\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the admin is logged out",
  "keyword": "Then "
});
formatter.examples({
  "line": 115,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;admin-logouts;",
  "rows": [
    {
      "cells": [
        "input"
      ],
      "line": 116,
      "id": "all-ums-valid-features;admin-logouts;;1"
    },
    {
      "cells": [
        "9"
      ],
      "line": 117,
      "id": "all-ums-valid-features;admin-logouts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 117,
  "name": "Admin Logouts",
  "description": "",
  "id": "all-ums-valid-features;admin-logouts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 109,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 110,
  "name": "the user inputs \u003c1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the user logs in with password \u003cadmin\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "the user inputs 9",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the admin is logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 1529151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c1\u003e",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 35517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cadmin\u003e",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 57588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 24370,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_logged_out()"
});
formatter.result({
  "duration": 16895,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 119,
      "value": "#Student Selects a Course"
    }
  ],
  "line": 120,
  "name": "Student Selects an exisiting Course",
  "description": "",
  "id": "all-ums-valid-features;student-selects-an-exisiting-course",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 121,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the user logs in with studentnumber 8543748",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the user selects the course \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "select course success",
  "keyword": "Then "
});
formatter.examples({
  "line": 128,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;student-selects-an-exisiting-course;",
  "rows": [
    {
      "cells": [
        "course code"
      ],
      "line": 129,
      "id": "all-ums-valid-features;student-selects-an-exisiting-course;;1"
    },
    {
      "cells": [
        "115001"
      ],
      "line": 130,
      "id": "all-ums-valid-features;student-selects-an-exisiting-course;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 130,
  "name": "Student Selects an exisiting Course",
  "description": "",
  "id": "all-ums-valid-features;student-selects-an-exisiting-course;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 121,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the user logs in with studentnumber 8543748",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the user selects the course 115001",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "select course success",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 1740973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 43261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543748",
      "offset": 36
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_studentnumber(String)"
});
formatter.result({
  "duration": 68942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 26372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115001",
      "offset": 28
    }
  ],
  "location": "UMSStepDefinitions.the_user_selects_the_course(String)"
});
formatter.result({
  "duration": 390600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.success(String)"
});
formatter.result({
  "duration": 32909,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 132,
      "value": "#Student Registers a Course"
    }
  ],
  "line": 133,
  "name": "Student Registers for a course after registration starts and before term starts",
  "description": "",
  "id": "all-ums-valid-features;student-registers-for-a-course-after-registration-starts-and-before-term-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 134,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 135,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the user logs in with studentnumber 8543748",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the user selects the course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "the user inputs 3",
  "keyword": "When "
});
formatter.step({
  "line": 142,
  "name": "register course success",
  "keyword": "Then "
});
formatter.examples({
  "line": 144,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;student-registers-for-a-course-after-registration-starts-and-before-term-starts;",
  "rows": [
    {
      "cells": [
        "course code"
      ],
      "line": 145,
      "id": "all-ums-valid-features;student-registers-for-a-course-after-registration-starts-and-before-term-starts;;1"
    },
    {
      "cells": [
        "115001"
      ],
      "line": 146,
      "id": "all-ums-valid-features;student-registers-for-a-course-after-registration-starts-and-before-term-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 146,
  "name": "Student Registers for a course after registration starts and before term starts",
  "description": "",
  "id": "all-ums-valid-features;student-registers-for-a-course-after-registration-starts-and-before-term-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 134,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 135,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the user logs in with studentnumber 8543748",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the user selects the course 115001",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "the user inputs 3",
  "keyword": "When "
});
formatter.step({
  "line": 142,
  "name": "register course success",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 1471875,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 8244,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 12394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543748",
      "offset": 36
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_studentnumber(String)"
});
formatter.result({
  "duration": 38499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115001",
      "offset": 28
    }
  ],
  "location": "UMSStepDefinitions.the_user_selects_the_course(String)"
});
formatter.result({
  "duration": 263335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 539377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.success(String)"
});
formatter.result({
  "duration": 23341,
  "status": "passed"
});
});