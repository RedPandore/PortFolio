FROM php:8.1-fpm

ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions pdo_mysql intl zip 

RUN curl -sSk https://getcomposer.org/installer | php -- --disable-tls && \
    mv composer.phar /usr/local/bin/composer

RUN apt update && apt install -yqq nodejs npm

COPY . /var/www/

COPY ./docker/serveur.conf /etc/nginx/conf.d/

RUN cd /var/www && \
    composer install && \
    npm install --force && \
    npm run build

WORKDIR /var/www

EXPOSE 80