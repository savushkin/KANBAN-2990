DROP TABLE IF EXISTS kanban_user CASCADE;
DROP TABLE IF EXISTS system_user CASCADE;
DROP TABLE IF EXISTS system_permission CASCADE;
DROP TABLE IF EXISTS system_user_permission CASCADE;
DROP TABLE IF EXISTS board CASCADE;
DROP TABLE IF EXISTS board_permission CASCADE;
DROP TABLE IF EXISTS board_user_permission CASCADE;
DROP TABLE IF EXISTS board_column CASCADE;
DROP TABLE IF EXISTS task CASCADE;
DROP TABLE IF EXISTS task_user CASCADE;

CREATE TABLE kanban_user (
  id          SERIAL PRIMARY KEY,
  username    TEXT NOT NULL,
  first_name  TEXT,
  second_name TEXT,
  last_name   TEXT
);

CREATE TABLE system_user (
  kanban_user   INT PRIMARY KEY,
  email         TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  FOREIGN KEY (kanban_user) REFERENCES kanban_user (id)
);

CREATE TABLE system_permission (
  id          SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  permission  TEXT NOT NULL
);

CREATE TABLE system_user_permission (
  system_user_id       INT NOT NULL,
  system_permission_id INT NOT NULL,
  PRIMARY KEY (system_user_id, system_permission_id),
  FOREIGN KEY (system_user_id) REFERENCES system_user (kanban_user),
  FOREIGN KEY (system_permission_id) REFERENCES system_permission (id)
);

CREATE TABLE board (
  id            SERIAL PRIMARY KEY,
  name          TEXT NOT NULL,
  description   TEXT NOT NULL,
  creation_date DATE NOT NULL,
  owner         INT  NOT NULL,
  FOREIGN KEY (owner) REFERENCES kanban_user (id)
);

CREATE TABLE board_permission (
  id          SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  permission  TEXT NOT NULL
);

CREATE TABLE board_user_permission (
  board_id            INT NOT NULL,
  user_id             INT NOT NULL,
  board_permission_id INT NOT NULL,
  PRIMARY KEY (board_id, user_id),
  FOREIGN KEY (board_id) REFERENCES board (id),
  FOREIGN KEY (user_id) REFERENCES kanban_user (id),
  FOREIGN KEY (board_permission_id) REFERENCES board_permission (id)
);

CREATE TABLE board_column (
  id          BIGSERIAL PRIMARY KEY,
  name        TEXT    NOT NULL,
  description TEXT,
  board_id    INTEGER NOT NULL,
  FOREIGN KEY (board_id) REFERENCES board (id)
);

CREATE TABLE task (
  id              BIGSERIAL PRIMARY KEY,
  title           TEXT   NOT NULL,
  decription      TEXT,
  creation_date   DATE   NOT NULL,
  estimated_time  DATE,
  spent_time      DATE,
  owner           INT    NOT NULL,
  board_column_id BIGINT NOT NULL,
  FOREIGN KEY (owner) REFERENCES kanban_user (id),
  FOREIGN KEY (board_column_id) REFERENCES board_column (id)
);

CREATE TABLE task_user (
  task_id BIGINT    NOT NULL,
  user_id BIGSERIAL NOT NULL,
  comment TEXT,
  PRIMARY KEY (task_id, user_id),
  FOREIGN KEY (task_id) REFERENCES task (id),
  FOREIGN KEY (user_id) REFERENCES kanban_user (id)
);
