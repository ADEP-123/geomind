import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* SVG del logo CORE DS */}
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.logoIcon}
          >
            {/* Anillo 1: Cola de procesos (ocre) */}
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.3"
            />
            {/* Anillo 2: Estratos geológicos */}
            <circle
              cx="24"
              cy="24"
              r="16"
              fill="none"
              stroke="#7BACC7"
              strokeWidth="1.5"
            />
            {/* Anillo 3: Granularidad */}
            <circle
              cx="24"
              cy="24"
              r="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.5"
            />
            {/* Núcleo: Crosshair */}
            <circle cx="24" cy="24" r="3" fill="currentColor" />
            <line x1="24" y1="20" x2="24" y2="28" stroke="currentColor" strokeWidth="1" />
            <line x1="20" y1="24" x2="28" y2="24" stroke="currentColor" strokeWidth="1" />
          </svg>
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
  )
}
