FROM node:18.14.2-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN apk update && apk add tzdata && apk add --no-cache bash && \
    npm install -g @nestjs/cli && npm install -g npm@latest

ENTRYPOINT echo "A data do servidor é: $(date +'%d/%m/%Y %H:%m:%S')"

USER node


