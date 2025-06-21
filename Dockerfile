#### this will create the almost 1GB size of image
# FROM node:22-alpine
# WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
# RUN npm install react-scripts@5.0.1 -g --silent
# COPY . ./
# CMD ["npm", "start"]

### multi stage docker will reduce the size of image
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



