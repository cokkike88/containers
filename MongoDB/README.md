### Up the container with docker run
docker run --name mongodb -p 32732:27017 --restart=always -d mongo

### Up the container with docker compose
docker-compose up -d 