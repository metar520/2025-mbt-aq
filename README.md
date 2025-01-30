# Software Quality Engineering - System Testing
This is a repository for the system-testing assignment of the Software Quality Engineering course at the [Ben-Gurion University](https://in.bgu.ac.il/), Israel.

## Assignment Description
In this assignment, we tested an open-source software called [Moodle](https://moodle.org).

Moodle is a free, open-source Learning Management System designed for educators to create and manage online courses. It supports customizable learning experiences, interactive activities, and a wide range of plugins for assessments, communication, and collaboration. Moodle is widely used by universities and schools for e-learning, offering flexibility and scalability across various platforms.

## Installation
	1.	Download XAMPP from https://www.apachefriends.org/
	2.	Install XAMPP and start:
	•	Apache (for the web server)
	•	MySQL (for the database)
	3.	Extract the downloaded Moodle folder to C:\xampp\htdocs\moodle
	4.	Open your web browser and go to: http://localhost/moodle
   5.	Follow the Moodle installation wizard.

## What we tested

User story #1: A student try to answer and subbmit a quiz in a course in Moodle website.
   Precondition:
      - The student in logged in to the system.
      - This course exist in Moodle.
      - The quiz exist in the course.
   Expected outcome:
      - The student subbmit the quiz successfully.

User story #2: A teacher hides the quiz in the course for the students.
   Precondition:
      - The teacher in logged in to the system.
      - This course exist in Moodle.
      - The quiz exist in the course.
      - The teacher in edit mode in the course.
   Expected outcome:
      - The teacher hides the quiz successfully - quiz is not longer visible for students.
      
## How we tested
We used two different testing methods:
1. [Cucumber](https://cucumber.io/), a behavior-driven testing framework.
2. [Provengo](https://provengo.tech/), a story-based testing framework.

Each of the testing methods is elaborated in its own directory. 

## Results
Update all README.md files (except for d-e, see Section 1). Specifically, replace all $$*TODO*…$$ according to the instructions inside the $$.

## Detected Bugs
We detected the following bugs:

1. Bug 1: 
   1. General description: ...
   2. Steps to reproduce: ...
   3. Expected result: ...
   4. Actual result: ...
   5. Link to the bug report: (you are encouraged to report the bug to the developers of the software)
2. Bug 2: ...

$$*TODO* if you did not detect the bug, you should delete this section$$  
