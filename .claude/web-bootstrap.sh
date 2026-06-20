#!/bin/bash
# Web-only: load the author's shared Claude config into this web session by
# cloning the public claude-resources mirror and running its web loader.
# No-ops on the local terminal; degrades gracefully if github.com is unreachable.
set -euo pipefail

[ "${CLAUDE_CODE_REMOTE:-}" = "true" ] || exit 0

SRC="$HOME/.claude-src"
URL="https://github.com/Takazudo/claude-resources"

if [ -d "$SRC/.git" ]; then
  git -C "$SRC" pull --ff-only 2>/dev/null || true
else
  git clone --depth 1 "$URL" "$SRC" 2>/dev/null || {
    echo "claude-resources unreachable (network policy?) — skipping web profile"
    exit 0
  }
fi

bash "$SRC/scripts/setup-web.sh"
