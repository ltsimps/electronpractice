'use scrict';
//const {app, BrowswerWindow} = require('electron');
const { app, BrowserWindow } = require('electron');
//const electron  = require('electron');

//const app = electron.app;
//const BrowswerWindow = electron.BrowswerWindow;

let mainWindow = null;



app.on('ready', () => {
    mainWindow = new  BrowserWindow({
        
    });
    mainWindow.loadURL(` file://${ app.getAppPath()}/index.html`);
    mainWindow.on('closed', () => { mainWindow = null;});
});