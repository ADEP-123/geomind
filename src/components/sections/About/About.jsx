import { Card, CardBody } from '../../common/Card/Card'
import styles from './About.module.css'

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Nosotros</h2>
          <p className={styles.subtitle}>
            Misión, Visión y Valores de Geomind Analytics
          </p>
        </div>

        <div className={styles.grid}>
          <Card>
            <CardBody>
              <h3>Misión</h3>
              <p>
                Desarrollar soluciones tecnológicas basadas en inteligencia artificial 
                que optimicen y modernicen los procesos de análisis geológico, brindando 
                a empresas del sector minero, energético y geotécnico herramientas confiables, 
                integradas y escalables para la toma de decisiones técnicas más eficientes 
                y sostenibles.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3>Visión</h3>
              <p>
                Ser la plataforma líder en inteligencia artificial aplicada a las geociencias 
                en América Latina y posteriormente a nivel global, transformando la manera 
                en que se analizan y gestionan los datos del subsuelo mediante soluciones 
                innovadoras, precisas y ambientalmente responsables.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className={styles.values}>
          <h3>Valores Corporativos</h3>
          <div className={styles.valuesList}>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>🎯</div>
              <div>
                <h4>Precisión Científica</h4>
                <p>Garantizar la exactitud en análisis geológicos a través de metodología rigurosa</p>
              </div>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>♻️</div>
              <div>
                <h4>Sostenibilidad</h4>
                <p>Promover prácticas ambientales responsables en el sector extractivo</p>
              </div>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>🤝</div>
              <div>
                <h4>Colaboración</h4>
                <p>Trabajar conjuntamente con expertos para mejorar continuamente</p>
              </div>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>🚀</div>
              <div>
                <h4>Innovación</h4>
                <p>Desarrollar tecnologías de punta para resolver desafíos complejos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
