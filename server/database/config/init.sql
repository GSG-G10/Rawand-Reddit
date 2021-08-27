BEGIN;
DROP TABLE IF EXISTS users,post,comment;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    password VARCHAR(100),
       email VARCHAR(100) UNIQUE
);
CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    discription VARCHAR(500),
     user_id INTEGER  REFERENCES users(id)  
);
CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    content VARCHAR(100),
    post_id INTEGER REFERENCES post(id),
    user_id INTEGER  REFERENCES users(id)
);


COMMIT;