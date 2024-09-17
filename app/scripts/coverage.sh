#!/bin/bash
set -ue

result=$(yarn test:coverage | grep All)

IFS='|'
read -ra arr <<< "$result"

coverage=${arr[1]}
curl -o coverage/coverage.svg https://img.shields.io/badge/coverage-${percent}%25-green
