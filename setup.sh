#!/usr/bin/env bash
set -euo pipefail

# Node 24
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
. "$NVM_DIR/nvm.sh"
nvm install 24

# pnpm
corepack enable
pnpm install
