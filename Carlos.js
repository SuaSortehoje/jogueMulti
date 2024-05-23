
    <script>
      var milhares = [];
        var saldo = 00;

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

        function enviarWhatsApp() {
    var nome = document.getElementById('nomeInput').value;
    var valor = document.getElementById('valorInput').value;
    var premio = document.getElementById('premioInput').value;
    var horario = document.getElementById('horarioInput').value;
    var milharesString = milhares.join(', ');
    var totalPagar = document.getElementById('totalPagar').textContent;
    var totalReceber = document.getElementById('totalReceber').textContent;
    var codigoPix = document.getElementById('codigoPix').textContent;
    var numero = document.getElementById('numeroInput').value;

    var selecionado = document.getElementById('premioInput');
    var premioText = selecionado.options[selecionado.selectedIndex].text;

    var multijogo = "MULTIJOGO MILHAR e CENTENA";
  
    let linktitulo ="https://multijogo-38.webnode.page/milhar-e-centena/";
   
    // Gerar o código de 6 dígitos
    const codigo = Math.floor(100000 + Math.random() * 900000);
    
    const responsabilidade = "*E de Responsabilidade do Apostador Conferir sua pule antes da Extracao*\n\nBoa Sorte!!!";

    const obs = "Apostando R$ 1.00 no 1ºpremio vale\n(milhar = R$ 2.500) (Centena = R$ 350.00)";
    
    var mensagem = `${linktitulo}
       *${multijogo}*
            *Olá,* ${nome}!
         
  *chave Aleatoria pix* : ${codigoPix}
          
                   *VALOR A PAGAR* : R$ ${totalPagar}        
                    
                 *VALOR A RECEBER* : R$ ${totalReceber}
        
                 *PREMIO* : ${premioText}
         
                  *HORÁRIO* : ${horario}
         
*MILHAR e CENTENA* : ${milharesString}

   Nº Controle da Aposta : *${codigo}*
   
   ${obs}
   
     ${responsabilidade}`;

    var mensagemEncoded = encodeURIComponent(mensagem);
    var linkWhatsApp = `https://api.whatsapp.com/send?text=${mensagemEncoded}&phone=${numero}`;
    window.open(linkWhatsApp, '_blank');
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
        function recarregarSaldo() {
    saldo += 50; // Adiciona 500 ao saldo atual
    document.getElementById('saldo').textContent = 'Saldo: ' + saldo; // Atualiza o saldo exibido na página

    // Atualiza o saldo no localStorage
    localStorage.setItem('saldo', saldo);
}


</script>