FROM node:12.13.1-alpine3.10

WORKDIR /app

COPY package.json package-lock.json src ./

RUN npm ci

CMD ["node", "./index.js"]