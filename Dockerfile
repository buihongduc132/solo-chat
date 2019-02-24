FROM node:8.11.3-alpine
LABEL maintainer = "Duc Bui buihongduc132@yahoo.com"
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
