FROM nodesource/jessie:0.10.36
MAINTAINER Dustin Clark <dustyc@me.com>

# ..

ENV NODE_ENV development

# ..

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /frontier && cp -a /tmp/node_modules /frontier

# ..

WORKDIR /frontier

# ..

COPY . /frontier

# ..

RUN npm run build

# ..

EXPOSE 8080
ENTRYPOINT ["node", "index.js"]
