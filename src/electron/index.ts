// Modules to control application life and create native browser window
import {app, BrowserWindow} from 'electron';
import path = require('path');
import { watch } from 'fs';

// import express = require('express');
// const expr = express();
// expr.use(express.static(path.join(__dirname, "/html")));
// expr.listen(8081, () => {
//   console.log("express server listening");
// });

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow : BrowserWindow = null;


function createWindow () {
  console.log("opening window");
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js')
    },
    fullscreen: true,
    titleBarStyle: 'hidden',
  });
  mainWindow.removeMenu ();

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'html/index.html'));
  // mainWindow.loadURL("localhost:8081");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
let i = 1;
app.on('ready', () => {
  // BrowserWindow.addDevToolsExtension('/home/joran/.config/google-chrome-unstable/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd/5.3.1_1');
  // BrowserWindow.addDevToolsExtension(path.join(__dirname, '../node_modules/@vue/devtools/'));
  // let installExtension = require('electron-devtools-installer')
  // installExtension.default(installExtension.VUEJS_DEVTOOLS)
  //   .then(() => {})
  //   .catch((err:Error) => {
  //     console.log('Unable to install `vue-devtools`: \n', err)
  //   })
  createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

var timer: NodeJS.Timeout = null;
watch(path.join(__dirname, '/html'), (ev) => {
  if (timer !== null) clearTimeout (timer);
  timer = setTimeout (() => {
    timer = null;
    mainWindow.reload();
  }, 500);
});
