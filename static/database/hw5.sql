CREATE TABLE DEPARTMENT (
    Name CHAR(4) PRIMARY KEY
);

CREATE TABLE STUDENT (
    Name VARCHAR(20),
    Student_number INT PRIMARY KEY,
    Class INT,
    Major CHAR(4) NOT NULL,
    FOREIGN KEY (Major) REFERENCES DEPARTMENT(Name) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE COURSE (
    Course_name VARCHAR(40),
    Course_number CHAR(8) PRIMARY KEY,
    Credit_hours INT,
    Department CHAR(4) NOT NULL,
    FOREIGN KEY (Department) REFERENCES DEPARTMENT(Name) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE SECTION (
    Section_identifier INT PRIMARY KEY,
    Course_number CHAR(8),
    Semester VARCHAR(6),
    Year CHAR(4),
    Instructor VARCHAR(20),
    FOREIGN KEY (Course_number) REFERENCES COURSE(Course_number) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE GRADE_REPORT (
    Student_number INT,
    Section_identifier INT,
    Grade CHAR(1),
    PRIMARY KEY (Student_number, Section_identifier),
    FOREIGN KEY (Student_number) REFERENCES STUDENT(Student_number) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Section_identifier) REFERENCES SECTION(Section_identifier) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE PREREQUISITE (
    Course_number CHAR(8),
    Prerequisite_number CHAR(8),
    PRIMARY KEY (Course_number, Prerequisite_number),
    FOREIGN KEY (Course_number) REFERENCES COURSE(Course_number) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Prerequisite_number) REFERENCES COURSE(Course_number) ON DELETE CASCADE ON UPDATE CASCADE
);

