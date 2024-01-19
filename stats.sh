#!/usr/bin/env bash

EASY=$(ls -l problems/easy/ | grep ^d | wc -l)
MEDIUM=$(ls -l problems/medium/ | grep ^d | wc -l)
HARD=$(ls -l problems/hard/ | grep ^d | wc -l)

echo "local.interloper solved:"
echo
printf "%-5d%s\n" "$EASY" "easy problems"
printf "%-5d%s\n" "$MEDIUM" "medium problems"
printf "%-5d%s\n" "$HARD" "hard problems"
echo
printf "Total: %d\n" "$((EASY + MEDIUM + HARD))"
