
document.getElementById("exit-button").addEventListener("click", function () {
    window.browser_api.CloseWindow();
});

document.getElementById("minimize-button").addEventListener("click", function () {
    window.browser_api.MinimizeWindow();
});

document.getElementById("view-home-button").addEventListener("click", function () {
    window.browser_api.ViewHome();
});

document.getElementById("import-sku-button").addEventListener("click", function () {
    window.database_api.ImportSku();
});
