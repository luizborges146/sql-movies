-- CREATE TABLE movies (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   movie_name VARCHAR(30) NOT NULL

-- );

-- CREATE TABLE reviews (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   review TEXT NOT NULL,
--   movie_id INT NOT NULL,
--   FOREIGN KEY (movie_id)
--   REFERENCES movies(id)
--   ON DELETE SET NULL
-- );


INSERT INTO movies (movie_name)
VALUES ("Matrix"),
        ("Spider-Man"),
        ("Rocky"),
        ("Holloween"),
        ("Top gun");

INSERT INTO reviews (review, movie_id)
VALUES ("4 Stars", 1),
        ("3 Stars",2),
        ("4 Stars",3),
        ("3 Stars",4),
        ("5 Stars",5),
        ("2 Stars",2);
