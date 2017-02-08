--Run with admin user privileges (possibly postges)

CREATE USER "kanbanJavaServerUser" WITH
	LOGIN
	SUPERUSER
	CREATEDB
	CREATEROLE
	INHERIT
	NOREPLICATION
	CONNECTION LIMIT -1
	PASSWORD 'kanbanJavaServerUser';