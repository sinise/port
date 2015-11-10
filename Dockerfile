FROM ubuntu:14.04
MAINTAINER Matt Koski <maccam912@gmail.com>

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
RUN echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.0.list

RUN apt-get update 
#RUN apt-get install -y mongodb-org
RUN apt-get install -y mongodb-org git python build-essential curl nano wget
RUN service mongod start

RUN mkdir -p /data/db

#RUN mkdir /Development
#RUN cd /Development && git clone git://github.com/joyent/node

RUN wget https://nodejs.org/dist/v4.2.1/node-v4.2.1-linux-x64.tar.gz
RUN sudo sudo tar -C /usr/local --strip-components 1 -xzf node*

RUN npm install express -g
RUN npm install express-generator -g

RUN npm install -g nodemon

#RUN cd /Development/node && ./configure && make && make install
#RUN rm -rf /Development/node
#RUN chmod 777 -R /Development

#RUN npm install -g yo bower grunt-cli generator-meanjs express

# RUN curl https://j.mp/spf13-vim3 -L > spf13-vim.sh && sh spf13-vim.sh

RUN mkdir -p /www/port
COPY port/bin /www/port/bin/
COPY port/model /www/port/model/
COPY port/public /www/port/public/
COPY port/routes /www/port/routes/
COPY port/views /www/port/views/
COPY port/app.js /www/port/
COPY port/package.json /www/port/

EXPOSE 80:80
EXPOSE 443:443
EXPOSE 3000:3000

RUN echo "\n##############################\n1. Create a new user with adduser, 'su' into that user.\n2. 'yo meanjs' to scaffold your app in the current directory.\n3. Start mongo in the background (e.g. 'mongod &')\n##############################\n"

