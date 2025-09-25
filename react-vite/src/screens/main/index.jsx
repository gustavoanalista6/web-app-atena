import React, { useEffect } from "react";
import '../../MainScreen.css';

const MainScreen = () => {
  useEffect(() => {
    const container = document.querySelector(".particles");
    if (container) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = Math.random() * 100 + "vh";
        particle.style.animationDuration = 3 + Math.random() * 3 + "s";
        container.appendChild(particle);
      }
    }
  }, []);

  return (
    <>
      <div className="loader">
        <div className="loader-text">ATENA</div>
      </div>

      <div className="particles"></div>

      <header>
        <img src="../../assets/logo.png" alt="Logo Uniatenas"/>
      </header>

      <main>
        <h1>Conheça Atena</h1>
        <h2 className="typing-effect">
          Sua Nova Tutora 24 Horas! Educação do futuro, hoje.
        </h2>

        <div className="author-container">
          <img src="../../assets/atena.jpg" alt="Tutora Atena" id="author" />
        </div>

        <button className="cta-button">Conversar Agora</button>
      </main>

      <footer>
        <div className="footer-content">
          <span>
            © 2025 Faculdade Atenas. Transformando a educação com tecnologia.
          </span>
          <div className="social-icons">
            <a
              href="https://wa.me/5536723737"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon whatsapp-icon"
              title="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.287" />
              </svg>
            </a>

            <a
              href="https://uniatenas.apprbs.com.br/iniciar-inscricao"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon vestibular-icon"
              title="Vestibular 2025"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,3L1,9L12,15L21,9V10H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/colegioatenasoficial?utm_source=ig_web_button_share_sheet&igsh=bHUxdmRlOWtrcTBn"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram-icon"
              title="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

    
    </>
  );
};

export default MainScreen;
