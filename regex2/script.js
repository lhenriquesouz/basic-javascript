var tabela = document.getElementById('dados');
let regexCPF = /\D(\d{3})\D?(\d{3})\D?(\d{3})\D?(\d{2})\D/g
let regexCNPJ = /\D(\d{2})\D?(\d{3})\D?(\d{3})\D?(\d{4})\D?(\d{2})\D/g
let regexCEP = /\D(\d{5})\D?(\d{3})\D/g
let regexTEL = /\D?(\d{2})\D?\D?(\d{4,5})\D?(\d{4})/g

let resultado = false;

for (var i = 1, row; row = tabela.rows[i]; i++) {
    var dado = "";
    dado = row.cells[1].innerHTML;
    resultado = regexCPF.test(dado);

    if (resultado) {
        row.cells[2].innerHTML = dado.replace(regexCPF, "$1.$2.$3-$4");
        row.cells[3].innerHTML = 'CPF';
    } else {
        resultado = regexCNPJ.test(dado);
        if (resultado) {
            row.cells[2].innerHTML = dado.replace(regexCNPJ, "$1.$2.$3/$4-$5");
            row.cells[3].innerHTML = 'CNPJ';
        } else {
            resultado = regexCEP.test(dado);
            if (resultado) {
                row.cells[2].innerHTML = dado.replace(regexCEP, "$1-$2");
                row.cells[3].innerHTML = 'CEP';
            } else {
                resultado = regexTEL.test(dado);
                row.cells[2].innerHTML = dado.replace(regexTEL, "($1)$2-$3");
                row.cells[3].innerHTML = 'TELEFONE';
            }
        }
    }
}