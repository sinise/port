#!/bin/bash
# uncomment all lines below to make a fresh build of the system

#docker stop $(sudo docker ps -a -q)
cd ~/port
#docker rm $(sudo docker ps -a -q)
#rm -rf port/node_modules
#docker bui-d ld -t seeeb/port .
#docker pull mongo
docker run --name thisMongo -v ~/port/mongoVol:/data/db -it -d mongo:latest
docker run --name port --link thisMongo:db -e VIRTUAL_HOST=port.lapela.dk -e PAGESPEED=1 -it -v ~/port/port:/www seeeb/port

