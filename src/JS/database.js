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

document.getElementById("import-sku-button").addEventListener("click", function () {
    window.database_api.ImportSku();
});

const LoadTable = async () => {
    table = $('#table').DataTable( {
        dom: 'Bflrtip',
        select: {
            style: 'multi+shift'
        },
        // deferRender: true,
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
                text: 'Select all',
                action: function () {
                    table.rows().select();
                }
            },
            {
                text: 'Select none',
                action: function () {
                    table.rows().deselect();
                }
            },
            {
                extend: 'searchPanes',
                config: {
                    cascadePanes: true
                }
            }
        ],
        // searchPanes: {
        //     initCollapsed: true
        // },
        // columnDefs: [
        //     {
        //         searchPanes: {
        //             show: true
        //         },
        //         targets: [0, 1, 2, 3, 4],
        //         cascadePanes: true
        //     }
        // ]

    } )



    $('.next').on( 'click', function () {
        table.page(1).draw(false);
        console.log("clicked");
    } );
     
    $('.previous').on( 'click', function () {
        table.page( 'previous' ).draw( 'page' );
        console.log("clicked");
    } );


}

const LoadSku = async () => {
    dataSet = await window.database_api.LoadSku();
    LoadTable();
}

const DeleteSku = async (sku) => {
    success = await window.database_api.DeleteSku(sku);
    if(success){
        LoadSku();
    }
}

$('#delete-button').click( function () {
    selected_sku = table.rows('.selected').data()

    for (let i = 0; i < selected_sku.length; i++) {
        DeleteSku(Object.values(selected_sku[i])[0])
    }
} );




LoadSku();



