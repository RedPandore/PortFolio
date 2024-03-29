#
# Prep App's PHP Dependencies
#
FROM composer:2.1 as vendor

WORKDIR /app

COPY composer.json composer.json
COPY composer.lock composer.lock

RUN composer install \
    --ignore-platform-reqs \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist \
    --quiet
#
# Prep App's Node Dependencies
#
FROM node:16-alpine as nodejs

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install
COPY . .
RUN npm run build

#
# Prep App's PHP Server
#
FROM php:8.1-fpm-alpine as phpserver

# add cli tools
RUN apk update \
    && apk upgrade \
    && apk add nginx

RUN apk add --no-cache \
      libzip-dev \
      zip \
      libpng-dev \
      icu-dev \
      oniguruma-dev \
    && docker-php-ext-install zip

# silently install 'docker-php-ext-install' extensions
RUN set -x
RUN docker-php-ext-install gd exif intl mbstring
RUN docker-php-ext-install pdo_mysql bcmath > /dev/null



COPY docker/nginx/default.conf /etc/nginx/nginx.conf

COPY docker/php/php.ini /usr/local/etc/php/conf.d/local.ini
RUN cat /usr/local/etc/php/conf.d/local.ini

WORKDIR /var/www

COPY . /var/www/
COPY --from=vendor /app/vendor /var/www/vendor
COPY --from=nodejs /app/public/build /var/www/public/build

# expose port 80
EXPOSE 80

COPY docker/entrypoint/docker-entry.sh /etc/entrypoint.sh
ENTRYPOINT ["sh", "/etc/entrypoint.sh"]