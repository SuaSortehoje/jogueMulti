
    <script>
      function recarregarSaldoManual() {
    var valorRecarga = parseInt(document.getElementById('recarregarInput').value);
    
    if (!isNaN(valorRecarga) && valorRecarga > 0) {
        saldo += valorRecarga; // Adiciona o valor da recarga ao saldo atual
        document.getElementById('saldo').textContent = 'Saldo: ' + saldo; // Atualiza o saldo exibido na página
        
        // Atualiza o saldo no localStorage
        localStorage.setItem('saldo', saldo);
        
        // Limpa o campo de input
        document.getElementById('recarregarInput').value = '';
    } else {
        alert('Insira um valor válido para recarregar o saldo.');
    }
}

</script>