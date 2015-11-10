#!/bin/bash
docker rm $(sudo docker ps -a -q)
docker build -t seeeb/port .
docker pull mongo
docker run --name thisMongo -v /home/sebastian/web/mongoPort:/data/db -it -d mongo:latest
docker run --name nodejs --link thisMongo:db -p 3000:3000 -it -v /home/sebastian/web/port:/www/port seeeb/port
