FROM node:14-stretch-slim

EXPOSE 5000

WORKDIR /node/app

COPY ./package*.json ./

RUN npm install && npm cache clean --force

COPY . .

CMD ["node", "app.js"]