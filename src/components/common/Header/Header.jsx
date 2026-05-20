import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="/src/assets/images/Logo.png"
            alt="GEOMIND Logo"
            className={styles.logoImg}
          />
          <div className={styles.logoText}>
            <h1>GEOMIND</h1>
            <p className={styles.subtitle}>Analytics</p>
          </div>
        </div>

        <nav className={styles.nav}>
          <a href="#home">Inicio</a>
          <a href="#about">Nosotros</a>
          <a href="#analysis">Análisis</a>
          <a href="#products">Productos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
