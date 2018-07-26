  function buildHeader(servicos){
    let tHead = document.createElement('thead')
    let anyServico = servicos [0]
    let nomesServicos = Object.keys(anyServico)

    for (nomeServico of nomesServicos){
      let th = document.createElement('th')
      th.innerText = nomeServico
      tHead.appendChild(th);
    }

    return tHead;
  }

  let total = 0;

  function updateTotal(value){
    let int = parseInt(value, 10)
    total += int;
  }

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('#lista').onchange=changeEventHandler;
},false);

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