CREATE TABLE filmer (
    id INTEGER PRIMARY KEY,
    film_navn VARCHAR(200) NOT NULL,
    film_sjanger VARCHAR(100) NOT NULL,
    film_regisør VARCHAR(100) NOT NULL,
    film_rating INTEGER NOT NULL,
    constraint rating_check check (film_rating >= 1 and film_rating <= 6)

);



INSERT INTO filmer (id, film_navn, film_sjanger, film_regisør, film_rating) VALUES (1, 'Inception', 'Sci-Fi', 'Christopher Nolan', 6);
INSERT INTO filmer (id, film_navn, film_sjanger, film_regisør, film_rating) VALUES (2, 'The Godfather', 'Crime', 'Francis Ford Coppola', 6);
INSERT INTO filmer (id, film_navn, film_sjanger, film_regisør, film_rating) VALUES (3, 'Pulp Fiction', 'Crime', 'Quentin Tarantino', 5);
INSERT INTO filmer (id, film_navn, film_sjanger, film_regisør, film_rating) VALUES (4, 'Dune', 'Sci-Fi', 'Denise Villeneuve', 6);
INSERT INTO filmer (id, film_navn, film_sjanger, film_regisør, film_rating) VALUES (5, 'One Battle after Another', 'thriller', 'Paul Thomas Anderson ', 6);
