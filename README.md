# zudo-tauri-wisdom

Takazudo's personal Tauri v2 dev notes. Not official Tauri documentation.

Written for personal reference and AI-assisted coding.

## Topics

- Project setup, dev vs production mode
- Sidecar pattern, loading screen, process lifecycle
- Rust backend: Mutex safety, settings cache, file watchers, menus, windows
- Frontend: IPC commands, useEffect pitfalls, capabilities
- Dev server: SSE live-reload, watcher loops, Vite integration
- Deployment: build bundle, macOS pitfalls, cargo cache, node download
- Recipes: doc viewer app, text editor app, multi-config

## Development

```bash
pnpm install
pnpm dev        # http://localhost:4819/pj/zudo-tauri/
pnpm build
pnpm b4push     # pre-push validation
```

## License

Content is personal notes. Use at your own risk.
