FROM node:22.17.1-slim
WORKDIR /code
COPY package-lock.json package.json /code
RUN npm install -g netlify-cli@22.3.0 deno@1.46.0 && npm ci
COPY netlify.toml /code
COPY netlify /code/netlify
CMD netlify dev --debug
EXPOSE 8888