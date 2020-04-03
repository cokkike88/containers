FROM ubuntu:latest
RUN apt update
RUN apt install python3-pip -y
RUN pip3 --version
RUN pip3 install awscli
RUN apt install nano -y
RUN adduser kike
CMD [ "/bin/bash" ]
# RUN mkdir /home/kike/.ssh
