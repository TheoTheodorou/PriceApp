const { contextBridge, ipcRenderer } = require("electron");

const homeAPI = {

}

const databaseAPI = {
    LoadSku: () => ipcRenderer.invoke("load-sku"),
    ImportSku: () => ipcRenderer.send("import-sku"),
    DeleteSku: (sku) => ipcRenderer.invoke("delete-sku", sku)
}

const browserAPI = {
    CloseWindow: () => ipcRenderer.send("close-window"),
    MinimizeWindow: () => ipcRenderer.send("minimize-window"),
    ViewDatabase: () => ipcRenderer.send("view-database"),
    ViewHome: () => ipcRenderer.send("view-home")
}


contextBridge.exposeInMainWorld("home_api", homeAPI);
contextBridge.exposeInMainWorld("database_api", databaseAPI);
contextBridge.exposeInMainWorld("browser_api", browserAPI);
