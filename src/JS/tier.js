document.getElementById("exit-button").addEventListener("click", function () {
    window.browser_api.CloseWindow();
});

document.getElementById("minimize-button").addEventListener("click", function () {
    window.browser_api.MinimizeWindow();
});

document.getElementById("view-home-button").addEventListener("click", function () {
    window.browser_api.ViewHome();
});

document.getElementById("view-sku-button").addEventListener("click", function () {
    window.browser_api.ViewSku();
});

document.getElementById("view-price-button").addEventListener("click", function () {
    window.browser_api.ViewPrice();
});

document.getElementById("view-conversion-button").addEventListener("click", function () {
    window.browser_api.ViewConversion();
});