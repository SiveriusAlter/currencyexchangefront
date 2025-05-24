FROM node:current-alpine as build

WORKDIR /app

COPY ./package*.json /app/
RUN npm install -g @angular/cli@19.2.7
RUN npm ci

COPY . .
RUN ng build

FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/currencyexchange/browser /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx","-g","daemon off;"]