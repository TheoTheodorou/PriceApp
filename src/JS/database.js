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

const LoadSKU = async () => {
    dataSet = await window.database_api.LoadSku();
    LoadTable();
}

const LoadTable = () => {
    table = $('#table').DataTable( {
        data: dataSet,
        columns: [
            { title: "SKU" },
            { title: "Product Type" },
            { title: "Style" },
            { title: "Type" },
            { title: "Category" }
        ],
        buttons: [
            'delete'
        ]
    } )

    $('#table tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );

    $('#delete-button').click( function () {
        console.log(table.row('.selected'))
        table.row('.selected').remove().draw( false );
    } );



}



LoadSKU();




