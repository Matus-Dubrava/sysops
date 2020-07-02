FROM node:14-stretch-slim

WORKDIR /node/app

ENV PATH ./node_modules/.bin:$PATH

COPY ./package*.json ./

RUN npm install && npm cache clean --force

COPY . .

CMD ["node", "app.js"]