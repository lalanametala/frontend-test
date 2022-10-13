FROM node:16.17-alpine3.15
COPY package*.json /app/
WORKDIR /app
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
