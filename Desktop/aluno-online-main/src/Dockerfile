FROM node:16.5.0
WORKDIR /app
COPY src/package.json ./
RUN yarn install
COPY src .
CMD [ "yarn", "run", "start" ]