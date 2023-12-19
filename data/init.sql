--  Tables creation
CREATE TABLE Activity (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(100),
    unit VARCHAR(10)
);

CREATE TABLE "User" (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE Achieve (
    id INT PRIMARY KEY,
    actId INT,
    achievement INT,
    dateAchieve DATE,
    FOREIGN KEY (actId) REFERENCES Activity(id)
);

CREATE TABLE Save (
    id INT PRIMARY KEY,
    actId INT,
    frequence VARCHAR(50),
    FOREIGN KEY (actId) REFERENCES Activity(id)
);

-- Insertion
INSERT INTO Activity VALUES (0, 'read', 'read description', 'pages');
INSERT INTO Activity VALUES (1, 'hiking', 'hiking description', 'km');
INSERT INTO "User" VALUES (0, 'dev', '123');