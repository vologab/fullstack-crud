FROM node:12.13.1-alpine3.10 AS build-env

ARG REACT_APP_API_URL=/api

WORKDIR /dist

COPY . ./

ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm ci && npm run build


# Build runtime image
FROM nginx:stable-alpine

COPY --from=build-env /dist/build /usr/share/nginx/html
COPY --from=build-env /dist/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]