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
          <img
            src="/images/Seccion_delgada.png"
            alt="Análisis Geológico - Sección Delgada"
            className={styles.graphic}
          />
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={styles.scrollIndicator}>
        <span>Desplázate para más</span>
      </div>
    </section>
  );
}
