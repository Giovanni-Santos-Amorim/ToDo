// Dados da coleção
const dados = [
    { id: 1, nome: 'Item 1' },
    { id: 2, nome: 'Item 2' },
    { id: 3, nome: 'Item 3' },
    { id: 4, nome: 'Item 4' },
    { id: 5, nome: 'Item 5' }
  ];
  
  // Função para gerar a lista de itens
  function gerarLista() {
    const listaContainer = document.getElementById('lista-container');
  
    dados.forEach(item => {
      const elementoItem = document.createElement('div');
      elementoItem.className = 'item-lista';
      elementoItem.textContent = item.nome;
  
      // Adiciona um evento de clique para exibir o ID do item
      elementoItem.addEventListener('click', () => {
        alert(`Clicou no Item ${item.id}`);
      });
  
      listaContainer.appendChild(elementoItem);
    });
  }
  
  // Chama a função para gerar a lista ao carregar a página
  window.onload = gerarLista;
  