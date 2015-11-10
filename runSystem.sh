#!/bin/bash
#docker run --name thisMongo -v /home/sebastian/web/mongoPort:/data/db -it mongo:latest
docker run --name nodejs --link thisMongo:db -p 3000:3000 -it -v /home/sebastian/web/port:/www/port seeeb/port

