FROM node:22.17.1-slim
WORKDIR /code
COPY package-lock.json package.json /code
RUN npm ci && npm install -g netlify-cli@22.3.0
EXPOSE 8888
CMD netlify dev