const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getDolar: async () => {
    return await ipcRenderer.invoke('getDolar');
  },
});
