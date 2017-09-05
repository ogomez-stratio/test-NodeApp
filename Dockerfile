FROM node:8.0.0-alpine

# Create app directory
RUN mkdir -p /usr/src/clinicsService
WORKDIR /usr/src/clinicsService

# Install app dependencies
COPY package.json /usr/src/clinicsService/
RUN yarn install
RUN apk add --no-cache bash

# Copy sources
COPY . /usr/src/clinicsService
RUN yarn build

# Script for wait dependencies
ADD deployment/wait.sh /wait.sh
RUN chmod +x /wait.sh


EXPOSE 9002


CMD /wait.sh 10.5.0.10 27017 && yarn exec:prod
