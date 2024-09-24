FROM node:22-slim

WORKDIR /api/calculate/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]



