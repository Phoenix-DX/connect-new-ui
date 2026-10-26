#!/bin/sh
# `node` with CSS rule-usage tracking for refactor_parity.py --node (see css-coverage-preload.cjs). Needs CSS_COVERAGE_DIR.
exec "$HOME/.nvm/versions/node/v24.21.0/bin/node" -r "$(dirname "$0")/css-coverage-preload.cjs" "$@"
