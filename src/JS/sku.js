var dataSet = [];
var table;

document.getElementById("exit-button").addEventListener("click", function () {
    window.browser_api.CloseWindow();
});

document.getElementById("minimize-button").addEventListener("click", function () {
    window.browser_api.MinimizeWindow();
});

document.getElementById("view-home-button").addEventListener("click", function () {
    window.browser_api.ViewHome();
});

document.getElementById("view-price-button").addEventListener("click", function () {
    window.browser_api.ViewPrice();
});

document.getElementById("view-tier-button").addEventListener("click", function () {
    window.browser_api.ViewTier();
});

document.getElementById("view-conversion-button").addEventListener("click", function () {
    window.browser_api.ViewConversion();
});

document.getElementById("import-sku-button").addEventListener("click", function () {
    window.database_api.ImportSku();
});



const LoadSku = async () => {
    dataSet = await window.database_api.LoadSku();
    LoadTable();
}

const LoadTable = async () => {
    table = $('#table').DataTable( {
        dom: 'Bflrtip',
        select: {
            style: 'multi+shift'
        },
        deferRender: true,
        data: dataSet,
        paging:true,
        columns: [
            { title: "SKU" },
            { title: "Product Type" },
            { title: "Style" },
            { title: "Type" },
            { title: "Category" }
        ],
        buttons: [
            {
                text: 'Select All',
                action: function () {
                    table.rows( { search: 'applied' } ).select()
                }
            },
            'selectNone',
            'searchPanes',
            {
                text: 'Add to Home',
                action: function ( e, dt, node, config ) {
                    selected_sku = table.rows({selected:true, page: 'all' }).data()

                    for (let i = 0; i < selected_sku.length; i++) {
                        //console.log(Object.values(selected_sku[i]))
                        AddSkuToHome(Object.values(selected_sku[i])[0])
                    }
                }
            }
        ],
        columnDefs: [
            {
                searchPanes: {
                    show: true
                },
                targets: [0, 1, 2, 3, 4],
                cascadePanes: true
            }
        ]
    } )


}



const DeleteSku = async (sku) => {
    success = await window.database_api.DeleteSku(sku);
    if(success){
        LoadSku();
    }
}

const AddSkuToHome = (sku) => {
    window.database_api.AddSkuToHome(sku);
}

$('#delete-button').click( function () {
    selected_sku = table.rows({selected:true, page: 'all' }).data()

    for (let i = 0; i < selected_sku.length; i++) {
        DeleteSku(Object.values(selected_sku[i])[0])
    }
} );


LoadSku();



