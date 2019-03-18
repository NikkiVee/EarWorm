DROP DATABASE IF EXISTS ear_worm;
CREATE DATABASE ear_worm;

\c ear_worm

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE
);

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  genre_name VARCHAR NOT NULL UNIQUE
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  artist VARCHAR NOT NULL,
  title VARCHAR NOT NULL,
  song_url VARCHAR NOT NULL,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  genre_id INT NOT NULL REFERENCES genres(id) ON DELETE CASCADE
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  song_id INT NOT NULL REFERENCES songs(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comment_body VARCHAR NOT NULL,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  song_id INT NOT NULL REFERENCES songs(id) ON DELETE CASCADE
);

INSERT INTO users (username)
VALUES ('bad_karma'), ('who_am_i'), ('zero_deaths'), ('whos_ur_buddha'), ('uncommon_name'), ('sofa_king_cool'), ('name_not_important'), ('behind_you'), ('ben_aflek_is_an_ok_actor'), ('dangerous_with_rocks');

INSERT INTO genres (genre_name)
VALUES ('INDIE'), ('AVANTE-GARDE'), ('HIP-HOP'), ('R&B'), ('DISCO'), ('ROCK'), ('POP');

INSERT INTO songs (artist, title, song_url, user_id, genre_id)
VALUES('Blood Orange', 'Dinner', 'https://m.media-amazon.com/images/I/A1JZGs13wHL._AC_UL872_FMwebp_QL65_.jpg', 1, 1),
('Björk', 'I Miss You - Remix LP', 'https://m.media-amazon.com/images/I/71PII0Xs8+L._AC_UL872_FMwebp_QL65_.jpg', 2, 2),
('The Pharcyde', 'Passin Me By', 'https://m.media-amazon.com/images/I/71CMICDoTSL._AC_UL872_FMwebp_QL65_.jpg', 3, 3),
('Mary J. Blige', 'Mary Jane (All Night Long)', 'https://m.media-amazon.com/images/I/61Q3gNJaWlL._AC_UL872_FMwebp_QL65_.jpg', 4, 4),
('79.5', 'Terrorize My Heart', 'https://m.media-amazon.com/images/I/71yqLuIB-WL._AC_UL872_FMwebp_QL65_.jpg', 5, 5),
('Mars Volta', 'Cygnus....Vismund Cygnus', 'https://m.media-amazon.com/images/I/51yLhNkRb8L._AC_UL872_FMwebp_QL65_.jpg', 6, 6),
('Fiona Apple', 'Fast As You Can', 'https://m.media-amazon.com/images/I/61IGDaz6M5L._AC_UL872_FMwebp_QL65_.jpg', 7, 7),
('King Tuff', 'Bad Thing', 'https://m.media-amazon.com/images/I/51oJVYdVYQL._AC_UL872_FMwebp_QL65_.jpg', 8, 1),
('Frank Zappa', 'Apostrophe', 'https://m.media-amazon.com/images/I/71WEbPZoWpL._AC_UL872_FMwebp_QL65_.jpg', 9, 2),
('Nas', 'If I Ruled the World', 'https://m.media-amazon.com/images/I/71FHpC13d6L._AC_UL872_FMwebp_QL65_.jpg', 10, 3),
('Ms. Lauryn Hill', 'Ex-Factor', 'https://m.media-amazon.com/images/I/61tYzZ1tigL._AC_UL872_FMwebp_QL65_.jpg', 1, 4),
('Teena Marie', 'I Need Your Lovin', 'https://m.media-amazon.com/images/I/71UJp1hxXoL._AC_UL872_FMwebp_QL65_.jpg', 2, 5),
('Modest Mouse', 'Dramamine', 'https://m.media-amazon.com/images/I/71ad2bdI+hL._AC_UL872_FMwebp_QL65_.jpg', 3, 6),
('Rihanna', 'Cockiness (Love It)', 'https://m.media-amazon.com/images/I/71kXiaORK9L._AC_UL872_FMwebp_QL65_.jpg', 4, 7),
('Radiohead', 'Everything In Its Right Place', 'https://m.media-amazon.com/images/I/81ONdU00gTL._AC_UL872_FMwebp_QL65_.jpg', 5, 1),
('The Velvet Underground', 'Im Waiting For The Man', 'https://m.media-amazon.com/images/I/81O+mhfV4+L._AC_UL872_FMwebp_QL65_.jpg', 6, 2),
('MF Doom', 'Lavender Buds', 'https://m.media-amazon.com/images/I/81Cbew6UU2L._AC_UL872_FMwebp_QL65_.jpg', 7, 3),
('Alicia Keys', 'Stolen Moments', 'https://m.media-amazon.com/images/I/712Z46-qN2L._AC_UL872_FMwebp_QL65_.jpg', 8, 4),
('The Trammps', 'Disco Inferno', 'https://m.media-amazon.com/images/I/A1vJoTTkK6L._AC_UL872_FMwebp_QL65_.jpg', 9, 5),
('Smashing Pumpkins', 'Disarm', 'https://m.media-amazon.com/images/I/71od0Ktt2HL._AC_UL872_FMwebp_QL65_.jpg', 10, 6),
('Solange', 'Bad Girls - Verdine Version', 'https://m.media-amazon.com/images/I/81sNPBZrmfL._AC_UL872_FMwebp_QL65_.jpg', 1, 7);

INSERT INTO favorites (user_id, song_id)
VALUES (1, 21), (2, 20), (3, 19), (4, 18), (5, 17), (6, 16), (7, 15), (8, 14), (9, 13), (10, 12), (1, 11), (2, 10), (3, 9), (4, 8), (5, 7), (6, 5), (7, 6), (8, 4), (9, 3), (10, 2), (1, 2), (2, 3), (3, 4), (5, 5), (6, 7), (7, 6), (8, 9), (9, 10), (10, 11), (1, 12), (2, 13), (3, 14), (4, 15), (5, 16), (6, 17), (7, 18), (8, 19), (9, 20), (10, 21), (6, 1), (3, 10), (9, 18), (1, 17), (2, 17), (10, 17), (1, 8), (7, 8), (4, 8), (5, 5), (1, 5);

INSERT INTO comments (comment_body, user_id, song_id)
VALUES ('One of my favorite songs', 4, 18), ('Stuck in my head', 5, 17), ('They are amazing live', 6, 16), ('Cant stop listening to this song', 7, 15), ('Had to favorite this as soon as I heard it', 8, 14), ('<3', 9, 13), ('OMG', 10, 12), ('Best album of all time', 1, 11), ('Love him', 2, 10), ('Great song to drive to', 3, 9), ('Such a unique voice', 4, 8), ('Psychedelic!!!', 5, 7), ('New disco!', 6, 5), ('Psychedelic goodness', 7, 6), ('QUEEN', 8, 4), ('Obsessed', 9, 3), ('Just saw them do an amazing set in Central Park this past summer', 10, 19), ('I cant keep up with her brilliance', 1, 2), ('Amazing', 2, 3), ('Brilliant', 3, 4), ('Everything Devonte Hynes does is magic', 1, 1), ('She does Devantes song justice', 1, 21), ('Billy Corgan steals my heart everytime', 10, 20);
