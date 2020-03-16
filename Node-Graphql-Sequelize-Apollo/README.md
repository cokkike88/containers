# 1. Run container first time
docker run --name tt-backend -v $PWD:/api -e "NODE_ENV=development" -w "/api" -u node -d -it node bash
# Enter to container
docker exec -it tt-backend bash
npm install
exit

# 2. Run docker-compose
docker-compose build
docker-compose up -d



# squelize-generate-db

# install sequelize-cli
npm install --save sequelize
npm install --save-dev sequelize-cli

# initial
npx sequelize init

# create model
npx sequelize model:create --name Course --attributes name:string,status:string

npx sequelize model:create --name Teacher --attributes name:string,lastname:string,biography:string,birthdate:date,email:string,username:string,password:string,status:string

# generate db

npx sequelize db:migrate

# delete a migrate
npx sequelize db:migrate:undo --name 20200114221431-create-transportation-company
