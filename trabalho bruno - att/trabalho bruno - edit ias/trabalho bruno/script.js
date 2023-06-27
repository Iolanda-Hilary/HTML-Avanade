// M// Manipulação de eventos ao clicar nos botões
document.getElementById('btn1').addEventListener('click', function() {
    scrollToSection('secao1');
  });
  
  document.getElementById('btn2').addEventListener('click', function() {
    scrollToSection('secao2');
  });
  
  document.getElementById('btn3').addEventListener('click', function() {
    scrollToSection('secao3');
  });
  
  // Função para rolar até uma seção específica
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Manipulação de eventos ao enviar o formulário
  document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário (apenas para fins de exemplo)
    const emailInput = document.querySelector('#newsletterForm input[type="email"]');
    const email = emailInput.value;
    alert('E-mail cadastrado: ' + email);
    emailInput.value = ''; // Limpa o campo de e-mail
  });
  // manipulação de eventos ao clicar nos botões
document.getElementById('btn1').addEventListener('click', function() {
    scrollToSection('secao1');
  });
  
  document.getElementById('btn2').addEventListener('click', function() {
    scrollToSection('secao2');
  });
  
  document.getElementById('btn3').addEventListener('click', function() {
    scrollToSection('secao3');
  });
  
  // Função para rolar até uma seção específica
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Manipulação de eventos ao enviar o formulário
  document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário (apenas para fins de exemplo)
    const emailInput = document.querySelector('#newsletterForm input[type="email"]');
    const email = emailInput.value;
    alert('E-mail cadastrado: ' + email);
    emailInput.value = ''; // Limpa o campo de e-mail
  });
  