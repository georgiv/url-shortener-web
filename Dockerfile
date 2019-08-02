FROM node:12.7.0-alpine as react-build

WORKDIR /url-shortener-web

COPY . .

RUN yarn
RUN yarn build

FROM nginx:1.17.2

COPY --from=react-build /url-shortener-web/build /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d

COPY conf /etc/nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
