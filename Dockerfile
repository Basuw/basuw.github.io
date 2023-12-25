# Utilise l'image de base officielle PostgreSQL
FROM postgres:latest

# Définit les variables d'environnement
ENV POSTGRES_DB=Activities
ENV POSTGRES_USER=api
ENV POSTGRES_PASSWORD=ActivitiesDataBase63@

# Copie les fichiers d'initialisation SQL dans le conteneur
COPY ./data/init.sql /docker-entrypoint-initdb.d/

# Expose le port par défaut de PostgreSQL
EXPOSE 5432