#!/bin/bash
ZONE=us-central1-c

gcloud compute disks create --size=10GiB --zone=$ZONE pv-a
gcloud compute disks create --size=10GiB --zone=$ZONE pv-b
gcloud compute disks create --size=10GiB --zone=$ZONE pv-c