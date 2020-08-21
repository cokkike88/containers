# 1. Run container first time
docker run --name node-express -v $PWD:/api -e "NODE_ENV=development" -w "/api" -p 8002:8002 -u node -d -it node bash
# Enter to container
docker exec -it node-express bash
npm install
exit

# 2. Run docker-compose
docker-compose up -d



# update dependencies
npm update

# upgrade dependencies to major version
npm install -g npm-check-updates
ncu -u
npm install