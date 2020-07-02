# test network alias 

## build an image 
docker build -t app .

## create custom network
docker network create dns_test

## create two containers from the image and specify different return messages via environment variable MESSAGE
docker container run --network test_dns --network-alias server -e MESSAGE=server1 app

docker container run --network test_dns --network-alias server -e MESSAGE=server2 app

## test whether domain name lookup returns ip address of both containers (using alpine image)
docker container run --network dns_test alpine nslookup server

## try to ping the alias name to see whether the response changes (using centos image)
docker container run --network dns_test centos ping -s server:5000
