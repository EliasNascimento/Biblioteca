$(document).ready(function () {

    getLivros();

});

function getLivros() {
    $.ajax({
        type: "GET",
        url: "http://localhost:55898/api/livros",
        data: {},
        success: function (data) {
            console.log(data);
           
            $(data).each(function (idx, obj) {

                var params = jQuery.param(obj);

                var btnEditar = "<a class='btn btn-primary btn-sm' id='Editar' href='Home/Edit/?" + params + ")' style='cursor:pointer;'>"
                    + "  <i class='fa fa-pencil-alt'></i>"
                    + "</a> ";


                var btnExcluir = "<a class='btn btn-danger btn-sm' id='Excluir' href='#' onclick='Excluir(" + obj.id + ")' style='cursor:pointer;'>"
                    + "  <i class='fas fa-trash - alt'></i>"
                    + "</a> ";

                $("#table_livros > tbody").append(
                    "<tr><td>" + obj.codigo + "</td>" +
                    "<td>" + obj.nome + "</td>" +
                    "<td>" + obj.autor + "</td>" +
                    "<td>" + obj.isbn + "</td>" +
                    "<td style='text-align: center'>" + obj.anoLancamento + "</td>" +
                    "<td style='text-align: center'>" + btnEditar + " " + btnExcluir + "</td></tr>");

            });
        },
        error: function (err) {
            console.log(err);
        }
    });
}


function Excluir(id) {

    $.ajax({
        type: "DELETE",
        url: "http://localhost:55898/api/livros/" + id,
        data: {},
        success: function (data) {
            if (data) {

                getLivros();
            } else {

            }

        },
        error: function () {

        }
    });
}
