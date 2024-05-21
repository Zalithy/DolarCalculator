const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 500,
    maxHeight: 800,
    maxWidth: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
}

app.whenReady().then(() => {
  createWindow();
});

const {getDolarAPI} = require('./dolar.js')

ipcMain.handle('getDolar', async (event) => {
  const tasa = await getDolarAPI();
  return tasa
})