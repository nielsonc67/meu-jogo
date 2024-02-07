let minNumber = 1;
let maxNumber = 100;
let attempts = 0;
let randomNumber;
let gameOver = false;

function startGame() {
    randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    attempts = 0;
    gameOver = false;
    document.getElementById("minNumber").textContent = minNumber;
    document.getElementById("maxNumber").textContent = maxNumber;
    document.getElementById("attempts").textContent = "";
    document.getElementById("guessField").disabled = false;
    document.getElementById("message").textContent = "";
}

function checkGuess() {
    if (!gameOver) {
        let userGuess = parseInt(document.getElementById('guessField').value);
        if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
            alert('Por favor, insira um número válido dentro do intervalo.');
            return;
        }

        attempts++;
        document.getElementById("attempts").textContent = "Tentativas: " + attempts;

        if (userGuess === randomNumber) {
            document.getElementById("message").textContent = 'Parabéns! Você acertou o número correto!';
            document.getElementById("message").style.color = 'green';
            gameOver = true;
            document.getElementById("guessField").disabled = true;
        } else if (userGuess < randomNumber) {
            document.getElementById("message").textContent = 'Muito baixo! Tente adivinhar um número maior.';
            document.getElementById("message").style.color = 'blue';
        } else {
            document.getElementById("message").textContent = 'Muito alto! Tente adivinhar um número menor.';
            document.getElementById("message").style.color = 'red';
        }
    }
}

function restartGame() {
    startGame();
}

startGame();

// Função para verificar o tipo de dispositivo e preencher automaticamente o jogo
function preencherAutomaticamente() {
    // Verificar o tamanho da tela
    var larguraTela = window.innerWidth;

    // Comparar com um limite (por exemplo, 768 pixels)
    var limite = 768;

    // Verificar se é um dispositivo móvel (telefone)
    if (larguraTela < limite) {
        // Preencher automaticamente para telefones
        // Por exemplo, você pode definir o intervalo de números para 1-50
        minNumber = 1;
        maxNumber = 50;
        startGame(); // Iniciar o jogo automaticamente
    } else {
        // Preencher automaticamente para desktops
        // Por exemplo, você pode definir o intervalo de números para 1-100
        minNumber = 1;
        maxNumber = 100;
        startGame(); // Iniciar o jogo automaticamente
    }
}

// Chamar a função para preencher automaticamente quando a página carregar
window.onload = preencherAutomaticamente;