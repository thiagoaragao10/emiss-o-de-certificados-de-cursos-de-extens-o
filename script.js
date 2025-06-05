// Lógica do Dashboard (Chart.js)
const ctx = document.getElementById('certChart') ? document.getElementById('certChart').getContext('2d') : null;

if (ctx) { // Garante que o canvas existe antes de criar o gráfico
  const certChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['7d', '6d', '5d', '4d', '3d', '2d', '1d'],
      datasets: [{
        label: 'Certificados',
        data: [10, 20, 30, 25, 40, 35, 50],
        borderColor: '#00bcd4',
        fill: false,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}


// Lógica de Login (Simulação Local)
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault(); // Impede o recarregamento da página

      const emailInput = document.getElementById('email');
      const senhaInput = document.getElementById('senha');

      const email = emailInput.value;
      const senha = senhaInput.value;

      // --- INÍCIO DA SIMULAÇÃO DE LOGIN LOCAL ---
      // Este bloco substitui a tentativa de conexão com a API para fins de teste.

      if (email === 'admin@teste.com' && senha === '123456') { // Credenciais de teste hardcoded
        const fakeToken = 'meu-token-simulado-para-frontend'; // Token que será salvo
        localStorage.setItem('authToken', fakeToken); // Armazena o token
        alert('Login realizado com sucesso! (Simulado)');
        window.location.href = '/dashboard.html'; // Redireciona para o dashboard (CAMINHO ABSOLUTO!)
      } else {
        alert('Falha no login: Credenciais inválidas.');
      }
      // --- FIM DA SIMULAÇÃO DE LOGIN LOCAL ---

    });
  }
});