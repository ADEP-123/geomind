import { Card, CardBody } from "../../common/Card/Card";
import styles from "./Organization.module.css";
import {
  organizationStructure,
  segments,
} from "../../../data/organizationData";

export function Organization() {
  return (
    <section id="organization" className={styles.organization}>
      <div className={styles.container}>
        <h2>Estructura Organizacional</h2>
        <p className={styles.sectionSubtitle}>
          Modelo funcional jerárquico con 4 niveles de autoridad
        </p>

        <div className={styles.structureChart}>
          {organizationStructure.map((section, idx) => (
            <div key={idx} className={styles.levelSection}>
              <h3 className={styles.levelTitle}>{section.level}</h3>

              <div className={styles.rolesGrid}>
                {section.roles.map((role, i) => (
                  <Card key={i} className={styles.roleCard}>
                    <CardBody>
                      <h4 className={styles.roleTitle}>{role.title}</h4>
                      <ul className={styles.responsibilitiesList}>
                        {role.responsibilities.map((resp, j) => (
                          <li key={j}>{resp}</li>
                        ))}
                      </ul>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.segmentSection}>
          <h3>Segmentos de Cliente y Módulos Técnicos</h3>

          <div className={styles.segmentGrid}>
            {segments.map((segment, idx) => (
              <Card key={idx}>
                <div className={styles.segmentImage}>
                  <img src={segment.image} alt={segment.title} />
                </div>
                <CardBody>
                  <h4>{segment.title}</h4>
                  <ul className={styles.list}>
                    {segment.items.map((item, i) => (
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
  );
}
