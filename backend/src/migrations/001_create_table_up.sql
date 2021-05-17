CREATE TABLE users(
  id VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  username VARCHAR NOT NULL,
  bio VARCHAR NOT NULL,
  techs character varying(2000)[] NOT NULL,
  avatarUrl VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  admin VARCHAR NOT NULL,
  CONSTRAINT pk_id PRIMARY KEY (id)
)