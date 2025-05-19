document.addEventListener('DOMContentLoaded', () => {
// Obter referências para os elementos HTML
    const textArea = document.getElementById('text-area');
    const charCara = document.getElementById('char-count');
    const wordCara = document.getElementById('word-count');
    const nomeLine = document.getElementById('your-name');


    function addYourName(){  // add texto na variavel Line
       nomeLine.textContent = "Camilly";
    }
    addYourName();

    // Adicionar um event listener para o evento 'input' na área de texto
    textArea.addEventListener('input', () => {  
        // obter o texto atual da área de texto 
        const text = textArea.value; // pega o valor dentro do campo
        
        // --- Contagem de Caracteres ---
        // O número de caracteres é simplesmente o tamanho da string
        const numCara = text.length; //pega a largura
        // Atualizar o display de caracteres
        charCara.textContent = numCara;
        
        // --- Contagem de Palavras ---
        // Dividir o texto por um ou mais espaços em branco (espaço, tab, quebra de linha)
        // A regex \s+ corresponde a um ou mais caracteres de espaço em branco
        const words = text.split(" ");// imprime o texto no console
        
        // Filtrar o array para remover strings vazias que podem resultar do split
        // (ex: texto com múltiplos espaços seguidos ou começando/terminando com espaço)
        const filtereWords = words.filter(word => word.length > 0); // quant. no console

        // O número de palavras é o tamanho do array filtrado.
        // Se o texto estiver vazio, o split pode retornar [''] ou [],
        // o filter garante que o count seja 0 nesse caso.
        const wordsCount = filtereWords.length; // conta as palavras e remove os espaços em branco

        // Atualizar o display de palavras
        wordCara.textContent = wordsCount;
    });
});