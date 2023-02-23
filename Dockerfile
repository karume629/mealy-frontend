FROM node:16-alpine
WORKDIR /app

COPY package.json /app

RUN npm install

ARG REACT_APP_BACKEND_URL

ENV REACT_APP_BACKEND_URL="http://localhost:3000"

COPY . /app

# RUN npm run build

EXPOSE 8080

CMD ["npm", "start", "--host", "0.0.0.0"]
