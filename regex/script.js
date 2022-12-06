let table = document.getElementById("cadastros");
let linhas = 0;

for (let i = 0, row; row = table.rows[i]; i++) {
    linhas++;

    let nome = "";
    nome = row.cells[2].innerHTML;
    nome = nome.replace(/@[\d\w\.]+/, '');
    nome = nome.replace(/([A-Z])/g, ' $1').trim();

    let dia = "";
    dia = nome = row.cells[4].innerHTML;
    dia = dia.replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/, "$2/$1/$3");
    dia = dia.replace(/(^(?=\d\D)|\D(?=\d(?:\/|$)))/g, '$10');

    row.cells[1].innerHTML = nome;
    row.cells[4].innerHTML = dia;
}

alert(linhas);