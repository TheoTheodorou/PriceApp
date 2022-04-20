const { contextBridge, ipcRenderer } = require("electron");

const homeAPI = {


}



const databaseAPI = {
    LoadSku: () => ipcRenderer.invoke("load-sku"),
    ImportSku: () => ipcRenderer.send("import-sku"),
    DeleteSku: (sku) => ipcRenderer.invoke("delete-sku", sku),
    AddSkuToHome: (sku) => ipcRenderer.send("add-home-sku", sku)
}

const browserAPI = {
    CloseWindow: () => ipcRenderer.send("close-window"),
    MinimizeWindow: () => ipcRenderer.send("minimize-window"),
    ViewHome: () => ipcRenderer.send("view-home"),
    ViewSku: () => ipcRenderer.send("view-sku"),
    ViewPrice: () => ipcRenderer.send("view-price"),
    ViewTier: () => ipcRenderer.send("view-tier"),
    ViewConversion: () => ipcRenderer.send("view-conversion"),
}


contextBridge.exposeInMainWorld("home_api", homeAPI);
contextBridge.exposeInMainWorld("database_api", databaseAPI);
contextBridge.exposeInMainWorld("browser_api", browserAPI);

