import styles from './Footer.module.css'
import { footerLinks, socialLinks } from '../../../data/footerData'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Sección superior del footer */}
        <div className={styles.topSection}>
          {/* Brand */}
          <div className={styles.brand}>
            <h3>GEOMIND Analytics</h3>
            <p className={styles.description}>Soluciones de IA para análisis geológico</p>
            <p className={styles.mission}>
              Transformando datos del subsuelo en decisiones precisas y sostenibles.
            </p>
          </div>

          {/* Links */}
          <div className={styles.linksGrid}>
            {/* Empresa */}
            <div className={styles.linkColumn}>
              <h4>Empresa</h4>
              <ul>
                {footerLinks.empresa.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recursos */}
            <div className={styles.linkColumn}>
              <h4>Recursos</h4>
              <ul>
                {footerLinks.recursos.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className={styles.linkColumn}>
              <h4>Legal</h4>
              <ul>
                {footerLinks.legal.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className={styles.social}>
            <h4>Síguenos</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  title={social.name}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Sección inferior del footer */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <p>© {currentYear} Geomind Analytics. Todos los derechos reservados.</p>
          </div>

          <div className={styles.credits}>
            <p>
              Desarrollado con <span className={styles.heart}>❤️</span> usando React, Vite y CORE Design System
            </p>
          </div>

          <div className={styles.location}>
            <p>📍 Bucaramanga, Colombia</p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className={styles.bgDecoration}></div>
    </footer>
  )
}
