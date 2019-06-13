#!/bin/bash

concurrently "cd src/backend/ && now dev" "cd src/frontend && now dev"