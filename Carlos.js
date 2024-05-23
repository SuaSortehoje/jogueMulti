
    <script>
        // Função para atualizar o saldo
        function atualizarSaldo() {
            var valor = parseFloat(document.getElementById('atualizarSaldoInput').value);
            if (!isNaN(valor)) {
                saldo += valor; // Adiciona o valor ao saldo atual
                document.getElementById('saldo').textContent = 'Saldo: ' + saldo.toFixed(2); // Atualiza o saldo exibido na página
                // Atualiza o saldo no localStorage
                localStorage.setItem('saldo', saldo.toFixed(2));
            } else {
                alert('Por favor, insira um valor válido.');
            }
        }
        var saldo = 0;
      var milhares = [];
        function adicionarMilhar() {
            var milharesInputs = document.querySelectorAll('[id^="milharInput"]');
            milharesInputs.forEach(input => {
                if (input.value.length === 4) {
                    milhares.push(input.value);
                }
            });
            alert('Milhares adicionados com sucesso!');
        }

        function calcular() {
            var valor = parseInt(document.getElementById('valorInput').value);
            var nome = document.getElementById('nomeInput').value;
            var horarioInput = document.getElementById('horarioInput').value;

            if (nome && !isNaN(valor) && valor > 0) {
                // Verifica se o saldo é suficiente
                if (saldo >= valor) {
                    var premio = document.getElementById('premioInput').value;
                    var totalPagar = valor * milhares.length;
                    var totalReceber = premio === '1a5premio' ? valor * 2500 / 5 : valor * 2500;
                    saldo -= valor; // Deduzindo o valor do saldo
                    document.getElementById('saldo').textContent = 'Saldo: ' + saldo;
                    showModal(nome, horarioInput, totalPagar, totalReceber);
                } else {
                    alert('Saldo insuficiente!');
                }
            } else {
                alert('Preencha todos os campos corretamente.');
            }
        }

        function showModal(nome, horario, totalPagar, totalReceber) {
            var modal = document.getElementById('modal');
            var nomePix = document.getElementById('nomePix');
            var horarioPix = document.getElementById('horarioPix');
            var milharesPix = document.getElementById('milharesPix');
            var totalPagarElement = document.getElementById('totalPagar');
            var totalReceberElement = document.getElementById('totalReceber');

            nomePix.textContent = nome;
            horarioPix.textContent = horario;
            milharesPix.textContent = milhares.join(', ');
            totalPagarElement.textContent = totalPagar.toFixed(2);
            totalReceberElement.textContent = totalReceber.toFixed(2);

            modal.style.display = 'block';
        }

        function fecharModal() {
            document.getElementById('modal').style.display = 'none';
        }

// Salvando o saldo no localStorage
window.addEventListener('beforeunload', function() {
    localStorage.setItem('saldo', saldo);
});

// Recuperando o saldo do localStorage
window.addEventListener('load', function() {
    var saldoLocalStorage = localStorage.getItem('saldo');
    if (saldoLocalStorage) {
        saldo = parseInt(saldoLocalStorage);
        document.getElementById('saldo').textContent = 'Saldo: ' + saldo;
    }
});
</script>