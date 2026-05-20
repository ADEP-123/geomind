import { Card, CardBody, CardHeader } from '../../common/Card/Card'
import { Button } from '../../common/Button/Button'
import styles from './Products.module.css'
import { modules, plans } from '../../../data/productsData'

export function Products() {
  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        {/* Módulos de Análisis */}
        <div className={styles.modulesSection}>
          <h2>Módulos de Análisis</h2>
          <p className={styles.sectionSubtitle}>
            Plataforma integrada con 4 módulos especializados para geociencias
          </p>

          <div className={styles.modulesGrid}>
            {modules.map((module, idx) => (
              <Card key={idx}>
                <CardBody>
                  <div className={styles.moduleIcon}>{module.icon}</div>
                  <h3>{module.name}</h3>
                  <p>{module.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        {/* Planes de Suscripción */}
        <div className={styles.plansSection}>
          <h2>Planes de Suscripción</h2>
          <p className={styles.sectionSubtitle}>
            Elige el plan perfecto para tus necesidades
          </p>

          <div className={styles.plansGrid}>
            {plans.map((plan, idx) => (
              <Card
                key={idx}
                className={plan.highlight ? styles.highlightCard : ''}
              >
                <CardHeader>
                  <h3>{plan.name}</h3>
                  <p className={styles.description}>{plan.description}</p>
                  <div className={styles.pricing}>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>{plan.period}</span>
                  </div>
                </CardHeader>

                <CardBody>
                  <ul className={styles.featuresList}>
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <span className={styles.checkmark}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardBody>

                <div className={styles.cardFooter}>
                  <Button
                    variant={plan.highlight ? 'primary' : 'secondary'}
                    fullWidth
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
