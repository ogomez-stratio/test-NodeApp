#!/usr/bin/env bash

host=${1}
port=${2}

until nc -z ${host} ${port}
do
    echo 'Waiting connection'
    sleep 1
done