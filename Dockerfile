FROM node:alpine

# workin directory
RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY . /usr/src

# install dependencies
RUN npm install

# run the app in production mode
RUN npm run build
EXPOSE 3000
CMD npm run start