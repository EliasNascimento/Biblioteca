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


//function visualizarEditarCliente(codCliente, mode) {

//    loadAguardeBlockUi();

//    new Promise(function (resolve, reject) {
//        resolve();
//    })
//        .then(async () => {
//            await $.ajax({
//                type: "POST",
//                url: "ModalVisualizarCliente",
//                data: { codCliente, mode },
//                dataType: 'json',
//                success: function (data) {
//                    openModalLarge(data.header, data.body);
//                    $('[data-toggle="tooltip"]').tooltip();
//                    $.unblockUI();
//                },
//                error: function (xhr, ajaxOptions, thrownError) {
//                    alertMenssageMin("error", "Error: Algo deu errado");
//                    $.unblockUI();
//                },
//                failure: function (response) {
//                    alertMensagemMin("error", "Failure: Algo deu errado");
//                    $.unblockUI();
//                }
//            });
//        });
//}

//function editClient(cliente) {
//    loadAguardeBlockUi();

//    var nome = document.getElementById("Nome").value;
//    var email = document.getElementById("Email").value;
//    var fone = document.getElementById("PhoneNumber").value;

//    cliente.Nome = nome != null ? nome : "";
//    cliente.Email = email != null ? email : "";
//    cliente.PhoneNumber = fone != null ? fone : "";

//    console.log(cliente);

//    $.ajax({
//        type: "POST",
//        url: "EditarCliente",
//        data: { cliente },
//        dataType: 'json',
//        success: function (data) {

//            if (data.Sucess) {
//                alertMensageWithButton("success", "Sucesso", data.Mensagem);

//            } else {
//                alertMensageWithButton("error", "Erro", data.Mensagem);
//            }


//            window.location.href = "/Home/GerenciarClientes";


//        },
//        error: function (xhr, ajaxOptions, thrownError) {

//            alertMensageWithButton("error", "Erro", "Algo deu errado!");
//            $.unblockUI();

//            hideAguarde();
//            window.location.href = "/Home/GerenciarClientes";

//        },
//        failure: function (response) {
//            alertMensagemMin("error", "Failure: Algo deu errado");
//            $.unblockUI();

//            hideAguarde();
//            window.location.href = "/Home/GerenciarClientes";
//        }
//    });
//}
