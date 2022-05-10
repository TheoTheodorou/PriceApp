
//Radio Button Menu
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  selected.checked = true
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

function handleClick(){

    var currentVal = document.querySelector("input[name=select_mode]:checked").value
    console.log(currentVal);

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
}

// Hide items by default
$('.enter-discount-percentage').hide();
$('.bundle-value').hide();

// //   Add switches to drop down
// $('.option').on('change', function () {
//     console.log("switched");
//     var currentVal = $(this).find(":selected").val();

//     if (currentVal === 'registerPrices') {
//         $('.enter-discount-percentage').hide();
//         $('.bundle-value').hide();
//     } else if (currentVal === 'discountPrices') {
//         $('.enter-discount-percentage').show();
//         $('.bundle-value').hide();
//     } else if (currentVal === 'bundleValue') {
//         $('.enter-discount-percentage').hide();
//         $('.bundle-value').show();
//     } else {
//         $('.enter-discount-percentage').show();
//         $('.bundle-value').show();
//     }
// });

// Load Js Button Clicks
document.getElementById("view-database-button").addEventListener("click", function () {
    window.browser_api.ViewSku();
});

document.getElementById("exit-button").addEventListener("click", function () {
    window.browser_api.CloseWindow();
});

document.getElementById("minimize-button").addEventListener("click", function () {
    window.browser_api.MinimizeWindow();
});
