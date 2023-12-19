-- Crée une table
CREATE TABLE Activity (
    id integer PRIMARY KEY,
    name VARCHAR (100),
    description VARCHAR (100),
    unit VARCHAR (10)
);

-- Insère des données dans la table
INSERT INTO Activity VALUES (0,'read','read description','pages');
INSERT INTO Activity VALUES (1,'hiking','hiking description','km');