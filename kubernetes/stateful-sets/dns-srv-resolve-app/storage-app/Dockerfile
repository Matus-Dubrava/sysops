FROM node:14-stretch-slim

WORKDIR /node/app
COPY ./package*.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]