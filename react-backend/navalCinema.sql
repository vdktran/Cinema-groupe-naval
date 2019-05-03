CREATE DATABASE navalDB CHARACTER SET 'utf8';

USE navalDB;

CREATE TABLE film (
    film_id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR (250),
    genre_id INT,
    langue_id INT,
    dimension_id INT,
    date_de_sortie DATE,
    synopsis VARCHAR (1000),
    statut_id INT,
    img_affiche VARCHAR(50),
    img_background VARCHAR(50)
)
ENGINE=INNODB;

INSERT INTO film
VALUES  (NULL, 'Avengers: End Game', 1, 3, 1, '2019-04-25', "c'est bien", 2, 'afficheAvengers.jpg', 'bakcgroundAvengers.jpg'),
  (NULL, 'Coeurs Ennenmis', 2, 3, 1, '2019-05-01', "c'est bof", 2, 'afficheCoeursEnnenmis.jpg', 'bakcgroundCoeursEnnenmis.jpg'),
  (NULL, 'Gloria Bell', 2, 3, 1, '2019-04-25', "c'est pas mal", 2, 'afficheGloriaBell.jpg', 'bakcgroundGloriaBell.jpg'),
  (NULL, 'Tanguy, Le Retour', 3, 3, 1, '2019-04-10', "c'est super", 2, 'afficheTanguyLeRetour.jpg', 'bakcgroundTanguyLeRetour.jpg'),
  (NULL, 'Le Parc Des Merveilles', 5, 3, 1, '2019-04-03', "c'est kiffant", 2, 'afficheLeParcDesMerveilles.jpg', 'bakcgroundLeParcDesMerveilles.jpg');

CREATE TABLE genre (
    genre_id INT PRIMARY KEY AUTO_INCREMENT,
    genre_name VARCHAR (30)
)
ENGINE=INNODB;

INSERT INTO genre
VALUES  (NULL, 'Action'),
        (NULL, 'Drame'),
        (NULL, 'Comedie'),
        (NULL, 'Science Fiction'),
        (NULL, 'Animation'),
        (NULL, 'Thriller');

CREATE TABLE dimension (
    dimension_id INT PRIMARY KEY AUTO_INCREMENT,
    dimension_name VARCHAR (5)
)
ENGINE=INNODB;

INSERT INTO dimension 
VALUES (NULL, '2D'),
       (NULL, '3D'),
       (NULL, '2D/3D');

CREATE TABLE langues (
    langue_id INT PRIMARY KEY AUTO_INCREMENT,
    langues_name VARCHAR (5)
)
ENGINE=INNODB;

INSERT INTO langues 
VALUES (NULL, 'VO'),
       (NULL, 'VF'),
       (NULL, 'VO/VF');

CREATE TABLE statut (
    statut_id INT PRIMARY KEY AUTO_INCREMENT,
    statut_name VARCHAR (15)
)
ENGINE=INNODB;

INSERT INTO statut
VALUES (NULL, 'Retiré'),
       (NULL, "A l'affiche"),
       (NULL, 'A venir');

CREATE TABLE seances (
    seance_id INT PRIMARY KEY AUTO_INCREMENT,
    salle_id INT,
    film_id INT,
    date_du_jour DATE,
    horaire TIME,
    dimension VARCHAR(5),
    place_dispo INT
)
ENGINE=INNODB;

INSERT INTO seances
VALUES (NULL, 4, 1, '2019-05-02', '12:45:00', '2D', 300);

CREATE TABLE salles (
    salle_id INT PRIMARY KEY AUTO_INCREMENT,
    capacite INT
)
ENGINE=INNODB;

INSERT INTO salles 
VALUES (NULL, 150),
       (NULL, 150),
       (NULL, 150),
       (NULL, 300),
       (NULL, 300);

CREATE TABLE reservations (
    reservation_id INT PRIMARY KEY AUTO_INCREMENT,
    users_id INT,
    seance_id INT,
    prix_id INT,
    quantite INT
)
ENGINE=INNODB;

INSERT INTO reservations
VALUES (NULL, 1, 1, 3, 2);

CREATE TABLE prix (
    prix_id INT PRIMARY KEY AUTO_INCREMENT,
    nom_du_tarif VARCHAR (30),
    tarif INT
)
ENGINE=INNODB;

INSERT INTO prix
VALUES (NULL, 'Etudiant', 6.99),
       (NULL, 'Plein tarif', 12.99),
       (NULL, 'Moins de 26 ans', 9.50);

CREATE TABLE critiques (
    critique_id INT PRIMARY KEY AUTO_INCREMENT,
    users_id INT,
    film_id INT,
    note INT,
    critique_date DATE
)
ENGINE=INNODB;

CREATE TABLE users (
    users_id INT PRIMARY KEY AUTO_INCREMENT,
    users_nom VARCHAR (30),
    users_prenom VARCHAR (50),
    users_email VARCHAR (30),
    users_naissance DATE,
    users_telephone VARCHAR(10)
)
ENGINE=INNODB;

INSERT INTO users
VALUES (NULL, 'Tran', 'Victor', 'Victor@gmail.com', '1970-01-01', '0687873719'),
       (NULL, 'Choisy', 'Tatiana', 'Tatou@gmail.com', '1950-01-01', '0678980862');


CREATE TABLE newsletter (
    newsletter_id INT PRIMARY KEY AUTO_INCREMENT,
    newsletter_email VARCHAR (30)
)
ENGINE=INNODB;

INSERT INTO newsletter
VALUES (NULL, 'fueijf@gmail.com'),
       (NULL, 'azertyuiop@hotmail.fr');

/* Foreign keys */

ALTER TABLE film
ADD FOREIGN KEY (genre_id) REFERENCES genre (genre_id);

ALTER TABLE film
ADD FOREIGN KEY (langue_id) REFERENCES langues (langue_id);

ALTER TABLE film
ADD FOREIGN KEY (dimension_id) REFERENCES dimension (dimension_id);

ALTER TABLE film
ADD FOREIGN KEY (statut_id) REFERENCES statut (statut_id);

ALTER TABLE seances
ADD FOREIGN KEY (salle_id) REFERENCES salles (salle_id);

ALTER TABLE seances
ADD FOREIGN KEY (film_id) REFERENCES film (film_id);

ALTER TABLE reservations
ADD FOREIGN KEY (users_id) REFERENCES users (users_id);

ALTER TABLE reservations
ADD FOREIGN KEY (seance_id) REFERENCES seances (seance_id);

ALTER TABLE reservations
ADD FOREIGN KEY (prix_id) REFERENCES prix (prix_id);

ALTER TABLE critiques
ADD FOREIGN KEY (users_id) REFERENCES users (users_id);

ALTER TABLE critiques
ADD FOREIGN KEY (film_id) REFERENCES film (film_id);

