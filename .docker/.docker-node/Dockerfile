FROM node:18.14.2-alpine AS base

WORKDIR /usr/src/app

COPY package*.json .

FROM base AS development

#RUN --mount=type=cache,target=/usr/src/app/.npm \
#    npm set cache /usr/src/app/.npm && \
#    npm install

RUN apk update && apk add tzdata && apk add --no-cache bash

COPY . .

CMD ["npm", "run", "dev"]

