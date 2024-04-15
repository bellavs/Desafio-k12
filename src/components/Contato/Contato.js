import React from 'react';
import './contato.css'; 

const Contato = () => {
  return (
    <section class="contato-section">
      <header class="contato-container">
        <div class="contactInfo">
          <div>
            <h2>Informações de Contato</h2>
            <ul class="info">
              <li>
                <span><img src="/location.png" alt="Ícone de localização" /></span>
                <span>Rua dos Girassóis, 456,<br />Vila Olímpia, São Paulo-SP<br />CEP: 04578-123</span>
              </li>
              <li>
                <span><img src="/mail.png" alt="Ícone de e-mail" /></span>
                <span><a href="mailto:KittyBlog@gmail.com">KittyBlog@gmail.com</a></span>
              </li>
              <li>
                <span><img src="/call.png" alt="Ícone de telefone" /></span>
                <span>+55 (11) 94830-0356</span>
              </li>
            </ul>
          </div>
          <ul class="sci">
            <li><a href="https:///www.facebook.com/BlogKitty"><img src="/1.png" alt="Ícone do Facebook" /></a></li>
            <li><a href="https://www.instagram.com/KittyBlog__"><img src="/3.png" alt="Ícone do Instagram" /></a></li>
            <li><a href="https://www.twitter.com/KittyBlog_"><img src="/2.png" alt="Ícone do Twitter" /></a></li>
          </ul>
        </div>
        <div class="contactForm">
          <h2>Envie-nos uma mensagem</h2>
          <div class="formBox">
            <div class="inputBox w50">
              <input type="text" name="firstName" required />
              <span>Primeiro Nome</span>
            </div>
            <div class="inputBox w50">
              <input type="text" name="lastName" required />
              <span>Último Nome</span>
            </div>
            <div class="inputBox w50">
              <input type="email" name="email" required />
              <span>Email</span>
            </div>
            <div class="inputBox w50">
              <input type="text" name="number" required />
              <span>Número</span>
            </div>
            <div class="inputBox w100">
              <textarea required></textarea>
              <span>Escreva sua mensagem aqui:</span>
            </div>
            <div class="inputBox w100">
              <input type="submit" value="Enviar" />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Contato;