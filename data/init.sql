--  Tables creation
CREATE SCHEMA IF NOT EXISTS reminder;

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
    achievement INT,
    dateAchieved DATE,
    FOREIGN KEY (actId) REFERENCES reminder.Activity(id),
    FOREIGN KEY (usrId) REFERENCES reminder.User(id)
);

CREATE TABLE reminder.Saved (
    id INT PRIMARY KEY,
    actId INT,
    usrId INT,
    frequence VARCHAR(50),
    FOREIGN KEY (actId) REFERENCES reminder.Activity(id),
    FOREIGN KEY (usrId) REFERENCES reminder.User(id)
);

-- Insertion
INSERT INTO reminder.Activity VALUES (0, 'read', 'read description', 'pages');
INSERT INTO reminder.Activity VALUES (1, 'hiking', 'hiking description', 'km');
INSERT INTO reminder.User VALUES (0, 'dev', '123');