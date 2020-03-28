# PWA
PWA using Nodejs and Docker

#To create new docker image
docker build -t<imagename>:<version> imagefilepath

#To create container
docker run -it <imagename>:<version>

 #To bind container port to host
 docker run -it -p <hostport>:<dockerport> <imagename>
