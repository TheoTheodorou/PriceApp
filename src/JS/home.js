
// Hide items by default
$('.enter-discount-percentage').hide();
$('.bundle-value').hide();

//   Add switches to drop down
$('#modeSwitch').on('change', function () {
    var currentVal = $(this).find(":selected").val();

    if (currentVal === 'registerPrices') {
        $('.enter-discount-percentage').hide();
        $('.bundle-value').hide();
    } else if (currentVal === 'discountPrices') {
        $('.enter-discount-percentage').show();
        $('.bundle-value').hide();
    } else if (currentVal === 'bundleValue') {
        $('.enter-discount-percentage').hide();
        $('.bundle-value').show();
    } else {
        $('.enter-discount-percentage').show();
        $('.bundle-value').show();
    }
});

// Load Js Button Clicks
document.getElementById("view-database-button").addEventListener("click", function () {
    window.browser_api.ViewDatabase();
});

document.getElementById("exit-button").addEventListener("click", function () {
    window.browser_api.CloseWindow();
});

document.getElementById("minimize-button").addEventListener("click", function () {
    window.browser_api.MinimizeWindow();
});
