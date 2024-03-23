#!/bin/bash

# Check if PRANA_RUNTIME_SECRETS is not empty
if [ -z "$PRANA_RUNTIME_SECRETS" ]; then
  echo "PRANA_RUNTIME_SECRETS is not set"
  exit 1
fi

# Iterate over each line in PRANA_RUNTIME_SECRETS
while IFS= read -r line; do
  # Export each line as an environment variable
  if [ ! -z "$line" ]; then
    export "$line"
  fi
done <<< "$PRANA_RUNTIME_SECRETS"