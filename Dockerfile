FROM ubuntu:14.04
MAINTAINER Matt Koski <maccam912@gmail.com>

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
RUN echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.0.list

RUN apt-get update 
RUN apt-get install -y mongodb-org git python build-essential curl nano wget
RUN service mongod start

RUN mkdir -p /data/db

RUN wget https://nodejs.org/dist/v4.2.1/node-v4.2.1-linux-x64.tar.gz
RUN sudo tar -C /usr/local --strip-components 1 -xzf node*

RUN npm install express -g
RUN npm install express-generator -g
RUN npm install -g nodemon

WORKDIR /
RUN git clone https://github.com/sinise/port.git
WORKDIR /port/port

RUN npm install


RUN mkdir -p /www/port
COPY port /www/port/


EXPOSE 80:80
EXPOSE 443:443
EXPOSE 3000:3000

RUN mongod
