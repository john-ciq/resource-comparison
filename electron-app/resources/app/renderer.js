/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

// The "name" input element
const nameInput = document.getElementById('greet-input');

// Focus on the name input at load time
nameInput.focus();

// Invoke the main process "greet" function
const getGreetMsg = async (name) => await window.electronAPI.greet(name);

// Set the message in the UI
const setGreetMsg = (greetMsg) => document.getElementById('greetMsg').innerText = greetMsg;

// Invoke the "greet" function and then set the message in the UI
const doGreet = async(name) => setGreetMsg(await getGreetMsg(name || nameInput.value));

// Seed the initial greeting
doGreet('world');

// Intercept the form submit behavior
document.getElementById('form').onsubmit = (event) => {
    event.preventDefault();
    doGreet();
}
