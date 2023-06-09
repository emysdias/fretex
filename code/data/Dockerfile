FROM node:lts-alpine

COPY data/data.json .

RUN npm install -g json-server

COPY . .

CMD json-server --watch data.json --port 3000 --host 0.0.0.0