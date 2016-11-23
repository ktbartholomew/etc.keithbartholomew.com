FROM ubuntu:trusty

RUN apt-get update && \
  apt-get install -y \
  php5 \
  php5-curl \
  php5-gd \
  php5-imagick \
  php5-mysql \
  php5-redis


RUN rm /var/www/html/index.html
RUN a2enmod rewrite
COPY ./config/php/* /etc/php5/apache2/conf.d/
COPY ./config/apache2/* /etc/apache2/conf-enabled/

COPY src /var/www/html/
RUN chown -R www-data:www-data /var/www

EXPOSE 80
CMD apache2ctl -D FOREGROUND
