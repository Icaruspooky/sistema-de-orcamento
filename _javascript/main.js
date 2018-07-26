const servicos = [
    {servico: "Limpeza interna", preco: 45},
    {servico: "Formatação", preco: 40},
    {servico: "Formatação + Limpeza interna", preco: 65},
    {servico: "Troca de Tela", preco: 85},
    {servico: "Troca de Placa Mãe", preco: 100},
    {servico: "Troca de HD/Memória", preco: 50},        
  ];
  let total = 0;
  /*let servicos[

  ];*/

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

  /*function buildBody(servicos){
    let tBody = document.createElement('tbody')
    let total = 0;
    
    for (servico of servicos){
      let tr = document.createElement('tr')
      let td1 = document.createElement('td')
      td1.innerText = servico.servico
      let td2 = document.createElement('td')
      td2.innerText = ("R$ ") + servico.preco

      total += servico.preco;

      tr.appendChild(td1);
      tr.appendChild(td2);
      tBody.appendChild(tr);
    }

    return tBody;
  }*/

  function updateTotal(value){
    total += value;


  }

  function valorTotal(servicos){
    let vTotal = document.createElement('vTotal')
    let tr = document.createElement('tr')


    return tValue;
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

    tr.appendChild(td1);
    tr.appendChild(td2);
    let list = document.getElementById('TableBody');
    list.insertBefore(tr, list.childNodes[0]);
}