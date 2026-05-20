import { Card, CardBody } from '../../common/Card/Card'
import styles from './Analysis.module.css'
import { pestelFactors, dofaMatrix } from '../../../data/analysisData'

export function Analysis() {
  return (
    <section id="analysis" className={styles.analysis}>
      <div className={styles.container}>
        {/* PESTEL */}
        <div className={styles.pestelSection}>
          <h2>Análisis PESTEL</h2>
          <p className={styles.sectionSubtitle}>
            Factores externos que impactan el desarrollo de Geomind Analytics
          </p>

          <div className={styles.pestelGrid}>
            {pestelFactors.map((factor, idx) => (
              <Card key={idx}>
                <CardBody>
                  <div className={styles.factorHeader}>
                    <span className={styles.factorIcon}>{factor.icon}</span>
                    <h3>{factor.title}</h3>
                  </div>
                  <ul className={styles.itemsList}>
                    {factor.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        {/* DOFA */}
        <div className={styles.dofaSection}>
          <h2>Matriz DOFA</h2>
          <p className={styles.sectionSubtitle}>
            Análisis interno de fortalezas, debilidades, oportunidades y amenazas
          </p>

          <div className={styles.dofaGrid}>
            {dofaMatrix.map((quad, idx) => (
              <Card key={idx} className={styles[`dofa-${quad.color}`]}>
                <CardBody>
                  <h3 className={styles.dofaTitle}>{quad.quadrant}</h3>
                  <ul className={styles.itemsList}>
                    {quad.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
