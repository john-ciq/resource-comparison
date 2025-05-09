# NOTES
The `electron.exe` within the `electron-app` is too big to add to GitHub; you must download the EXE; the file resides in this archive:
[electron-v36.2.0-win32-x64.zip](https://github.com/electron/electron/releases/download/v36.2.0/electron-v36.2.0-win32-x64.zip)

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
