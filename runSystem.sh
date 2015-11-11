#!/bin/bash
docker stop $(sudo docker ps -a -q)
docker rm $(sudo docker ps -a -q)
rm -rf port/node_modules
docker build -t seeeb/port .
docker pull mongo
docker run --name thisMongo -v /home/ubuntu/port/mongoVol:/data/db -it -d mongo:latest
docker run --name nodejs --link thisMongo:db -p 80:80 -it -v /home/ubuntu/port/port:/www seeeb/port

