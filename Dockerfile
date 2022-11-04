# pull official base image
FROM --platform=linux/arm64 node:16.4.2-alpine3.11 as builder

ENV USER=docker
ENV UID=1001
ENV GID=1001
ENV HOME=/home/$USER
ENV PATH /react-app/node_modules/.bin:$PATH
ENV PATH=$HOME/.local/bin:$PATH

# Create uid, gid and set home
RUN addgroup -g $GID -S $USER && \
    adduser -u $UID -S $USER -G $USER -h $HOME

RUN apk update && apk add --no-cache --virtual libc6-compat gcompat \
    && apk upgrade musl

USER ${USER}

# Copy all files
COPY --chown=${UID}:${GID} . react-app/
WORKDIR react-app/

RUN npm install 
RUN npm run build

# NGINX to serve the static files produced by the app
FROM --platform=linux/arm64 nginxinc/nginx-unprivileged:latest

WORKDIR /usr/share/nginx/html
COPY --from=builder /react-app/build/ .

EXPOSE 8080