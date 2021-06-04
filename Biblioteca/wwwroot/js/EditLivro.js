
function Salvar() {

    var id = document.getElementById("hfIdLivro").value;
    var codigo = document.getElementById("Codigo").value;
    var nome = document.getElementById("Nome").value;
    var autor = document.getElementById("Autor").value;
    var isbn = document.getElementById("ISBN").value;
    var anoLancamento = document.getElementById("AnoLancamento").value;

    var livro = {};

    livro.id = parseInt(id > 0 ? id : 0);
    livro.codigo = parseInt(codigo != null ? codigo : null);
    livro.nome = nome != null ? nome : null;
    livro.autor = autor != null ? autor : "";
    livro.isbn = isbn != null ? isbn : "";
    livro.anoLancamento = parseInt(anoLancamento != null ? anoLancamento : 0);

    var params = jQuery.param(livro);

    $.ajax({
        type: "PUT",
        url: "http://localhost:55898/api/livros/" + livro.id,
        data: { params },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response) {
                alert("Livro Salvo com sucesso!");
                window.Location.href = "../Index";
            }
        },
        error: function (err) {
            alert(err.responseJSON.title);
        },
        failure: function (flx) {
            alert(flx);
        }
    });
}
