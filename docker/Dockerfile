FROM node:12-alpine

RUN apk update \
    && apk add --no-cache bash git

WORKDIR /app

COPY . /app

CMD ["sh", "-c", "echo 1"]