# electron-app

## Configuring
The `electron.exe` within the `electron-app` is too big to add to GitHub; you must download the EXE; the file resides in this archive:
[electron-v36.2.0-win32-x64.zip](https://github.com/electron/electron/releases/download/v36.2.0/electron-v36.2.0-win32-x64.zip). The
executable should be moved into the `electron-app` folder as `electron.exe`.

## Developing
Open `electron-app/resources/app` within Electron Fiddle.

### Changing the app URLs
Changing the app url (https://www.google.com, by default) can be accomplished by modifying the url
in `electron-app/resources/app/main.js` [here](https://github.com/john-ciq/resource-comparison/blob/master/electron-app/resources/app/main.js#L32).

## Running/Dist
Run `electron-app/electron.exe`

# tauri-app

## Configuring
* Install [rust](https://www.rust-lang.org/tools/install) (1.86.0 is the current version at the time of publish)
* Install [Tauri](https://tauri.app/) (2.5.0 is the current version at the time of publish)

## Developing
Run `yarn tauri dev` within `tauri-app`; edit `tauri-app/src` files in any IDE. Live reload for front-end changes. Backend changes (rust) will reload, but can take a few moments.

## Running/Dist
Run `yarn tauri build` within `tauri-app` and the single executable will be `tauri-app/src-tauri/target/release/tauri-app.exe`.

### Changing the app URLs
Changing the app url (https://www.google.com, by default) can be accomplished by modifying the urls
in `tauri-app/src-tauri/tauri.conf.json` in these places:
* [line 22](https://github.com/john-ciq/resource-comparison/blob/master/tauri-app/src-tauri/tauri.conf.json#L22).
* [line 29](https://github.com/john-ciq/resource-comparison/blob/master/tauri-app/src-tauri/tauri.conf.json#L29).
* [line 36](https://github.com/john-ciq/resource-comparison/blob/master/tauri-app/src-tauri/tauri.conf.json#L36).
* [line 43](https://github.com/john-ciq/resource-comparison/blob/master/tauri-app/src-tauri/tauri.conf.json#L43).
* [line 50](https://github.com/john-ciq/resource-comparison/blob/master/tauri-app/src-tauri/tauri.conf.json#L50).
