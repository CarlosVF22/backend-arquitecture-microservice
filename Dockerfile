FROM node:16

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "./api/index.js" ]