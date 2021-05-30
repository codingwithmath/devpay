CREATE TABLE professions(
  id VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  salary NUMERIC(8,2) NOT NULL,
  description VARCHAR NOT NULL,
  CONSTRAINT pk_profession_id PRIMARY KEY (id)
)