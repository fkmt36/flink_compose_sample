FROM node:16-alpine

WORKDIR /app

ADD ./package.json /app
ADD ./src /app/src

RUN npm i

CMD npm run start