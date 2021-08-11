FROM node:13

WORKDIR /app

COPY package*.json .

RUN npm i -g gatsby-cli

RUN npm install

COPY . .

EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]