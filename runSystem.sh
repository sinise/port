#!/bin/bash
docker stop $(sudo docker ps -a -q)
docker rm $(sudo docker ps -a -q)
rm -rf port/node_modules
docker build -t seeeb/port .
docker pull mongo
docker run --name thisMongo -v /home/sebastian/web/mongoPort:/data/db -it -d mongo:latest
docker run --name nodejs --link thisMongo:db -p 3000:3000 -it -v /home/sebastian/port:/www seeeb/port

