FROM node:21-alpine

WORKDIR /usr/src

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3001
USER node
CMD ["yarn", "start"]
