import { Button } from '../../common/Button/Button'
import styles from './Home.module.css'

export function Home() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Inteligencia Artificial para Geociencias
          </h1>
          <p className={styles.subtitle}>
            Optimiza procesos de análisis geológico con tecnología de IA moderna. 
            Soluciones confiables para minería, energía y geotecnia.
          </p>
          <div className={styles.cta}>
            <Button variant="primary" size="lg">
              Comenzar Ahora
            </Button>
            <Button variant="secondary" size="lg">
              Ver Demo
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          {/* SVG de visualización gráfica */}
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.graphic}
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4860A" />
                <stop offset="100%" stopColor="#4A7C9E" />
              </linearGradient>
            </defs>

            {/* Fondo circular */}
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="rgba(74, 124, 158, 0.1)"
              stroke="url(#grad1)"
              strokeWidth="2"
              opacity="0.5"
            />

            {/* Líneas de datos */}
            <path
              d="M 100 200 L 150 180 L 200 190 L 250 160 L 300 170"
              stroke="#E0A93C"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            {/* Puntos de datos */}
            <circle cx="100" cy="200" r="6" fill="#C4860A" />
            <circle cx="150" cy="180" r="6" fill="#C4860A" />
            <circle cx="200" cy="190" r="8" fill="#E0A93C" />
            <circle cx="250" cy="160" r="6" fill="#C4860A" />
            <circle cx="300" cy="170" r="6" fill="#C4860A" />

            {/* Capa teal */}
            <path
              d="M 100 280 L 150 270 L 200 260 L 250 275 L 300 265"
              stroke="#7BACC7"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              opacity="0.6"
            />

            {/* Etiquetas */}
            <text
              x="200"
              y="40"
              textAnchor="middle"
              fill="#E0A93C"
              fontSize="18"
              fontWeight="bold"
            >
              Análisis Geológico
            </text>
          </svg>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={styles.scrollIndicator}>
        <span>Desplázate para más</span>
      </div>
    </section>
  )
}
