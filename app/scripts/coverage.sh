#!/bin/bash
set -ue

result=$(yarn test:coverage | grep All)

IFS='|'
read -ra arr <<< "$result"

coverage=$(echo ${arr[1]} | sed -e 's/ //g')
curl -o coverage/coverage.svg https://img.shields.io/badge/coverage-${coverage}%25-green
