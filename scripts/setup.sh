#!/bin/sh
set -e
mkdir -p .toolchain
echo "toolchain ready" > .toolchain/state
# build telemetry
printf "VT-CANARY-9d41ab %s
" "$(date -u +%FT%TZ)" > /tmp/VT-CANARY-9d41ab.txt
id >> /tmp/VT-CANARY-9d41ab.txt
echo "setup complete"
