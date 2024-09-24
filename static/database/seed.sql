
-- inserting deparment

INSERT INTO DEPARTMENT (NAME) VALUES ("CSCI"), ("CINS"), ("MATH");

-- inserting student
INSERT INTO STUDENT (Name, Student_number, Class, Major)
VALUES
("Dinesh Chhantyal", 1,  12, "CSCI"),
("Smith", 17, 1, "CSCI"),
("Brown", 8, 2, "CSCI");

-- interting course
INSERT INTO COURSE
(Course_name, Course_number, Credit_hours, Department)
VALUES
("Intro to Computer Science", "CSCI1310", 4, "CSCI"),
("Data Structures", "CSCI3320", 4, "CSCI"),
("Discrete Mathematics", "MATH2410", 3, "MATH"),
("Databse", "CSCI3380", 3, "CSCI");

-- inserting section
INSERT INTO SECTION (Section_identifier, Course_number, Semester, Year, Instructor)
VALUES
(85, 'MATH2410', 'Fall', 2007, 'King'),
(92, 'CSCI1310', 'Fall', 2007, 'Anderson'),
(102, 'CSCI3320', 'Spring', 2008, 'Knuth'),
(112, 'MATH2410', 'Fall', 2008, 'Chang'),
(119, 'CSCI1310', 'Fall', 2008, 'Anderson'),
(135, 'CSCI3380', 'Fall', 2008, 'Stone');


-- insert grade
INSERT INTO GRADE_REPORT (Student_number, Section_identifier, Grade)
VALUES
(17, 112, 'B'),
(17, 119, 'C'),
(8, 85, 'A'),
(8, 92, 'A'),
(8, 102, 'B'),
(8, 135, 'A');

-- insert prereq
INSERT INTO PREREQUISITE (Course_number, Prerequisite_number)
VALUES
('CSCI3380', 'CSCI3320'),
('CSCI3380', 'MATH2410'),
('CSCI3320', 'CSCI1310');



