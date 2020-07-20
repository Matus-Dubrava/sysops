FROM ubuntu:latest

RUN apt-get update && apt-get install fortune -y
COPY fortune-loop.sh /bin/fortune-loop.sh
RUN chmod +x /bin/fortune-loop.sh

ENTRYPOINT [ "/bin/fortune-loop.sh" ]
CMD ["10"]