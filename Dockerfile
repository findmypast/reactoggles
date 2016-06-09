FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/

RUN npm set progress=false && npm install

COPY . /usr/src/app
RUN npm run transpile
