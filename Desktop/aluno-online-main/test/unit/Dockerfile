FROM node:16.5.0
RUN yarn global add jest
WORKDIR /app
COPY src/models/nota.js ./src/models/nota.js
COPY test/unit .
CMD [ "yarn", "run", "test" ]