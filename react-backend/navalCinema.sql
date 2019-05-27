CREATE DATABASE navalDB
CHARACTER
SET 'utf8';

USE navalDB;

CREATE TABLE films (
    film_id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR
(250),
    genre_id INT,
    langue_id INT,
    dimension_id INT,
    date_de_sortie DATE,
    synopsis VARCHAR
(1000),
    statut_id INT,
    img_affiche VARCHAR
(200),
    img_background VARCHAR
(200),
    img_slider VARCHAR
(200)
)
ENGINE=INNODB;

INSERT INTO films
VALUES
    (NULL, 'Avengers: End Game', 1, 3, 1, '2019-04-25', "c'est bien", 2, 'afficheAvengers.jpg', 'bakcgroundAvengers.jpg', NULL),
    (NULL, 'Coeurs Ennenmis', 2, 3, 1, '2019-05-01', "c'est bof", 2, 'afficheCoeursEnnenmis.jpg', 'bakcgroundCoeursEnnenmis.jpg', NULL),
    (NULL, 'Gloria Bell', 2, 3, 1, '2019-04-25', "c'est pas mal", 2, 'afficheGloriaBell.jpg', 'bakcgroundGloriaBell.jpg', NULL),
    (NULL, 'Tanguy, Le Retour', 3, 3, 1, '2019-04-10', "c'est super", 2, 'afficheTanguyLeRetour.jpg', 'bakcgroundTanguyLeRetour.jpg', NULL),
    (NULL, 'Le Parc Des Merveilles', 5, 3, 1, '2019-04-03', "c'est kiffant", 2, 'afficheLeParcDesMerveilles.jpg', 'bakcgroundLeParcDesMerveilles.jpg', NULL);

CREATE TABLE genres (
    genre_id INT PRIMARY KEY AUTO_INCREMENT,
    genre_name VARCHAR
(30)
)
ENGINE=INNODB;

INSERT INTO genres
VALUES
    (NULL, 'Action'),
    (NULL, 'Drame'),
    (NULL, 'Comedie'),
    (NULL, 'Science Fiction'),
    (NULL, 'Animation'),
    (NULL, 'Thriller');

CREATE TABLE dimensions (
    dimension_id INT PRIMARY KEY AUTO_INCREMENT,
    dimension_name VARCHAR
(5)
)
ENGINE=INNODB;

INSERT INTO dimensions
VALUES
    (NULL, '2D'),
    (NULL, '3D'),
    (NULL, '2D/3D');

CREATE TABLE langues (
    langue_id INT PRIMARY KEY AUTO_INCREMENT,
    langues_name VARCHAR
(5)
)
ENGINE=INNODB;

INSERT INTO langues
VALUES
    (NULL, 'VO'),
    (NULL, 'VF'),
    (NULL, 'VO/VF');

CREATE TABLE statuts (
    statut_id INT PRIMARY KEY AUTO_INCREMENT,
    statut_name VARCHAR
(15)
)
ENGINE=INNODB;

INSERT INTO statuts
VALUES
    (NULL, 'Retiré'),
    (NULL, "A l'affiche"),
    (NULL, 'A venir');

CREATE TABLE seances (
    seance_id INT PRIMARY KEY AUTO_INCREMENT,
    salle_id INT,
    film_id INT,
    date_du_jour DATE,
    dayweek VARCHAR
(20),
    horaire TIME,
    dimension_id INT,
    langue_id INT,
    place_dispo INT
)
ENGINE=INNODB;

INSERT INTO seances
VALUES
    (NULL, 4, 1, '2019-06-03', 'Lundi' , '12:45:00', 2, 1, 300);

CREATE TABLE salles (
    salle_id INT PRIMARY KEY AUTO_INCREMENT,
    salle_name INT,
    capacite INT
)
ENGINE=INNODB;

INSERT INTO salles
VALUES
    (NULL, 1, 150),
    (NULL, 2, 150),
    (NULL, 3, 150),
    (NULL, 4, 300),
    (NULL, 5, 300);

CREATE TABLE reservations (
    reservation_id INT PRIMARY KEY AUTO_INCREMENT,
    users_id INT,
    seance_id INT,
    prix_id INT,
    quantite INT,
    film_id INT
)
ENGINE=INNODB;

INSERT INTO reservations
VALUES
    (NULL, 1, 1, 3, 2, 1);

CREATE TABLE prix (
    prix_id INT PRIMARY KEY AUTO_INCREMENT,
    nom_du_tarif VARCHAR
(30),
    tarif INT
)
ENGINE=INNODB;

INSERT INTO prix
VALUES
    (NULL, 'Etudiant', 6.99),
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
    users_nom VARCHAR
(30),
    users_prenom VARCHAR
(50),
    users_email VARCHAR
(30),
    users_naissance DATE,
    users_telephone VARCHAR
(10)
)
ENGINE=INNODB;

INSERT INTO users
VALUES
    (NULL, 'Tran', 'Victor', 'Victor@gmail.com', '1970-01-01', '0687873719'),
    (NULL, 'Choisy', 'Tatiana', 'Tatou@gmail.com', '1950-01-01', '0678980862');


CREATE TABLE newsletter (
    newsletter_id INT PRIMARY KEY AUTO_INCREMENT,
    newsletter_email VARCHAR
(30)
)
ENGINE=INNODB;

INSERT INTO newsletter
VALUES
    (NULL, 'fueijf@gmail.com'),
    (NULL, 'azertyuiop@hotmail.fr');

CREATE TABLE contacts (
    contact_id INT PRIMARY KEY AUTO_INCREMENT,
    contact_pseudo VARCHAR
(50),
    contact_objet VARCHAR
(50),
    contact_message VARCHAR
(500)
)
ENGINE=INNODB;

INSERT INTO contacts
VALUES
    (NULL, 'pseudo1', 'probleme avec un truc', "Salut j'ai un problème ca marche pas aidez moi svp"),
    (NULL, 'pseudo2', 'ça marche pas lol', 'pk sa marchent pa tn cite?');

CREATE TABLE articles (
    article_id INT PRIMARY KEY AUTO_INCREMENT,
    article_img VARCHAR
(200),
    article_title VARCHAR
(50),
    article_text TEXT,
    auteur VARCHAR
(20),
    article_date DATE
)
ENGINE=INNODB;

INSERT INTO articles
VALUES
    (NULL, NULL, 'LE TITRE', 'LE TEXTE', 'TATOU', '2017-03-16');

/* Foreign keys */

ALTER TABLE films
ADD FOREIGN KEY (genre_id) REFERENCES genres (genre_id);

ALTER TABLE films
ADD FOREIGN KEY (langue_id) REFERENCES langues (langue_id);

ALTER TABLE films
ADD FOREIGN KEY (dimension_id) REFERENCES dimensions (dimension_id);

ALTER TABLE films
ADD FOREIGN KEY (statut_id) REFERENCES statuts (statut_id);

ALTER TABLE seances
ADD FOREIGN KEY (salle_id) REFERENCES salles (salle_id);

ALTER TABLE seances
ADD FOREIGN KEY (film_id) REFERENCES films (film_id);

ALTER TABLE seances
ADD FOREIGN KEY (langue_id) REFERENCES langues (langue_id);

ALTER TABLE reservations
ADD FOREIGN KEY (users_id) REFERENCES users (users_id);

ALTER TABLE reservations
ADD FOREIGN KEY (seance_id) REFERENCES seances (seance_id);

ALTER TABLE reservations
ADD FOREIGN KEY (prix_id) REFERENCES prix (prix_id);

ALTER TABLE critiques
ADD FOREIGN KEY (users_id) REFERENCES users (users_id);

ALTER TABLE critiques
ADD FOREIGN KEY (film_id) REFERENCES films (film_id);

ALTER TABLE reservations
ADD FOREIGN KEY (film_id) REFERENCES films (film_id);

ALTER TABLE seances
ADD FOREIGN KEY (dimension_id) REFERENCES dimensions (dimension_id);