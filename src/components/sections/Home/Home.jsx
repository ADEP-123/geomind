import { Button } from "../../common/Button/Button";
import styles from "./Home.module.css";

export function Home() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Inteligencia Artificial para Geociencias
          </h1>
          <p className={styles.subtitle}>
            Optimiza procesos de análisis geológico con tecnología de IA
            moderna. Soluciones confiables para minería, energía y geotecnia.
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
          {/* SVG de sección delgada geológica */}
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.graphic}
          >
            <defs>
              <linearGradient id="rockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4860A" />
                <stop offset="50%" stopColor="#7BACC7" />
                <stop offset="100%" stopColor="#4A7C9E" />
              </linearGradient>
              <pattern
                id="mineralPattern"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="5" cy="5" r="2" fill="#E0A93C" opacity="0.6" />
              </pattern>
            </defs>

            {/* Fondo circular */}
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="url(#rockGrad)"
              opacity="0.15"
            />
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="url(#rockGrad)"
              strokeWidth="2"
            />

            {/* Cristales de mineral */}
            <g opacity="0.8">
              <polygon points="200,80 230,140 170,140" fill="#C4860A" />
              <polygon points="280,150 310,200 250,200" fill="#E0A93C" />
              <polygon points="120,220 160,270 80,270" fill="#7BACC7" />
              <polygon points="300,280 340,320 260,320" fill="#4A7C9E" />
              <polygon points="100,120 140,170 60,170" fill="#E0A93C" />
            </g>

            {/* Líneas de fractura */}
            <g
              stroke="#E0A93C"
              strokeWidth="1.5"
              opacity="0.6"
              strokeDasharray="5,5"
            >
              <line x1="200" y1="50" x2="200" y2="350" />
              <line x1="50" y1="200" x2="350" y2="200" />
              <path d="M 80 80 Q 200 200 320 320" fill="none" />
            </g>

            {/* Puntos de análisis */}
            <circle cx="200" cy="200" r="8" fill="#C4860A" />
            <circle cx="150" cy="150" r="5" fill="#E0A93C" />
            <circle cx="250" cy="150" r="5" fill="#E0A93C" />
            <circle cx="150" cy="250" r="5" fill="#7BACC7" />
            <circle cx="250" cy="250" r="5" fill="#7BACC7" />

            {/* Texto */}
            <text
              x="200"
              y="360"
              textAnchor="middle"
              fill="#E0A93C"
              fontSize="16"
              fontWeight="bold"
            >
              Sección Delgada
            </text>
          </svg>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={styles.scrollIndicator}>
        <span>Desplázate para más</span>
      </div>
    </section>
  );
}
