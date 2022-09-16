FROM node:18.9.0-slim

WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run"]
