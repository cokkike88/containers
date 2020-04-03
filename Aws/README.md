# How create the image
docker image build -t ubuntu-aws .
# How to create the container
docker container run --name ubuntu-aws --restart always -d -it ubuntu-aws /bin/bash