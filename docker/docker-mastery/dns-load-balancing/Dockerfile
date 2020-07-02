FROM node:14-stretch-slim

ENV MESSAGE 'node server (docker default)'

COPY ./package*.json ./

RUN npm install && npm cache clean --force

COPY . . 

CMD ["node", "index.js"]
