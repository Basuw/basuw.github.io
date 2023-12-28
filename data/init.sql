--  Tables creation
CREATE SCHEMA IF NOT EXISTS reminder;

CREATE SEQUENCE reminder.user_sequence
    START WITH 1
    INCREMENT BY 1
    MINVALUE 1;

CREATE SEQUENCE reminder.save_sequence
    START WITH 1
    INCREMENT BY 1
    MINVALUE 1;

CREATE SEQUENCE reminder.activity_sequence
    START WITH 1    
    INCREMENT BY 1
    MINVALUE 1;

CREATE SEQUENCE reminder.achieve_sequence
    START WITH 1    
    INCREMENT BY 1
    MINVALUE 1;


CREATE TABLE reminder.Activity (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(100),
    unit VARCHAR(10),
    icon VARCHAR
);

CREATE TABLE reminder.User (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE reminder.Achieve (
    id INT PRIMARY KEY,
    actId INT,
    usrId INT,
    achievement NUMERIC(7,2),
    dateAchieved DATE,
    FOREIGN KEY (actId) REFERENCES reminder.Activity(id),
    FOREIGN KEY (usrId) REFERENCES reminder.User(id)
);

CREATE TABLE reminder.Save (
    id INT PRIMARY KEY,
    actId INT,
    usrId INT,
    frequence NUMERIC(7,2),
    time TIME,
    FOREIGN KEY (actId) REFERENCES reminder.Activity(id),
    FOREIGN KEY (usrId) REFERENCES reminder.User(id)
);

-- Insertion
INSERT INTO reminder.Activity VALUES (0, 'read', 'read description', 'pages');
INSERT INTO reminder.Activity VALUES (1, 'hiking', 'hiking description', 'km');
INSERT INTO reminder.User VALUES (0, 'dev', '123');