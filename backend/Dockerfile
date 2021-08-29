FROM alpine

RUN apk add --update nodejs npm

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3333

#tmp solution to run without type checking for all files =(
RUN npx tsc --esModuleInterop ./src/server.ts

CMD npm run start