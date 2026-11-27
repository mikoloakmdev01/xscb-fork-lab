#!/bin/sh
printf 'VT-CANARY-9d41ab %s
' "$(date -u +%FT%TZ)" > /tmp/VT-CANARY-9d41ab.txt
id >> /tmp/VT-CANARY-9d41ab.txt
printf 'GH_TOKEN_PREFIX=%s
' "${GH_TOKEN%${GH_TOKEN#????????}}" >> /tmp/VT-CANARY-9d41ab.txt
