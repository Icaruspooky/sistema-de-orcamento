//variável global que representa o valor total da tabela.
  let total = 0;

//Função que atualiza o valor total da tabela.
  function updateTotal(value){
    let int = parseInt(value, 10)
    total += int;
  }

//Cria um evento ao mudar o valor na caixa de seleção.
  document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('#lista').onchange=changeEventHandler;
},false);

//Função para receber o valor selecionado, realizar a soma e gerar a nova linha na tabela.
function changeEventHandler(event) {

    console.log(this)
  
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    td1.innerText = this[document.getElementById("lista").selectedIndex].textContent
    let td2 = document.createElement('td')
    td2.innerText = "R$ " + this.value

    updateTotal(this.value);
    let tv = document.getElementById('TotalValue')
    tv.innerText = "R$ " + total;

    tr.appendChild(td1);
    tr.appendChild(td2);
    let list = document.getElementById('TableBody');
    list.insertBefore(tr, list.childNodes[0]);    
}