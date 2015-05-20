FROM nodesource/jessie:0.10.36
MAINTAINER Dustin Clark <dustyc@me.com>

# ..

ENV NODE_ENV development

# ..

WORKDIR /frontier

# ..

COPY . /frontier

# ..

RUN npm install

# ..

RUN npm run build

# ..

EXPOSE 8080
ENTRYPOINT ["node", "index.js"]
