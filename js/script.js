function obterEntrada(mensagem) {
    const inputElement = document.createElement("input");
    inputElement.type = "number";
    inputElement.min = 0;
    inputElement.max = 10;
    inputElement.step = 0.1;
  
    const labelElement = document.createElement("label");
    labelElement.textContent = mensagem;
  
    document.body.appendChild(labelElement);
    document.body.appendChild(inputElement);
  
    return new Promise((resolve) => {
      inputElement.addEventListener("change", () => {
        resolve(inputElement.value);
      });
    });
  }
  
  async function solicitarNota() {
    let nota;
  
    do {
      nota = await obterEntrada("Digite uma nota entre 0 e 10:");
      
    // Verifica se a nota não é um número ou está fora do intervalo permitido
      if(isNaN(nota) || nota < 0 || nota > 10) { 
      alert("Por favor, digite uma nota válida entre 0 e 10.");
      }
    // Repete a solicitação da nota enquanto a nota não for válida
    } while(isNaN(nota) || nota < 0 || nota > 10); 
  
    // Exibe a nota final para o usuário
    alert(`Sua nota é ${nota}.`); 
  }
  
  solicitarNota();
  