#!/usr/bin/env bash

clear

network_name=${1:sanitas-bot-network}
subnetwork_address=${2:10.5.0.0/16}
result=$( docker network ls -q -f 'name='$network_name )

# Network creation
echo $result
if [[ -n "$result" ]]; then
    echo "Skipping network creation: Network $network_name already exists"
else
    echo "Creating network with name $network_name"
    docker network create $network_name --subnet=$subnetwork_address
fi

# Composing and executing image
echo "Composing and executing image"
docker-compose down
docker-compose up -d
