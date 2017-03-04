--Run with admin user privileges (possibly postges)

-- Database: kanbandb

-- DROP DATABASE kanbandb;

CREATE DATABASE kanbandb
WITH
OWNER = postgres
ENCODING = 'UTF8'
LC_COLLATE = 'Russian_Russia.1251'
LC_CTYPE = 'Russian_Russia.1251'
TABLESPACE = pg_default
CONNECTION LIMIT = -1;

GRANT ALL ON DATABASE kanbandb TO postgres;

GRANT ALL ON DATABASE kanbandb TO "kanbanJavaServerUser";

GRANT TEMPORARY, CONNECT ON DATABASE kanbandb TO PUBLIC;


CREATE DATABASE kanbandb
WITH
OWNER = postgres
ENCODING = 'UTF8'
TABLESPACE = pg_default
CONNECTION LIMIT = -1;

GRANT ALL ON DATABASE kanbandb TO postgres;

GRANT ALL ON DATABASE kanbandb TO "kanbanJavaServerUser";

GRANT TEMPORARY, CONNECT ON DATABASE kanbandb TO PUBLIC;
