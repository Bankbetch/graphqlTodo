FROM node:14.8-alpine3.12
#current-alpine3.11
#12.18.3-alpine3.9
WORKDIR /

COPY . .

RUN yarn

RUN yarn run build

EXPOSE 3000

CMD [ "yarn", "start" ]
