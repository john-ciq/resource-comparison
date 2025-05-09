# electron-app

## Developing
Open `electron-app/resources/app` within Electron Fiddle.

## Running/Dist
Run `electron-app/electron.exe`

# tauri-app

## Developing
Run `yarn tauri dev` within `tauri-app`; edit `tauri-app/src` files in any IDE. Live reload for front-end changes. Backend changes (rust) will reload, but can take a few moments.

## Running/Dist
Run `yarn tauri build` within `tauri-app` and the single executable will be `tauri-app/src-tauri/target/release/tauri-app.exe`.
