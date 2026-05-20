import { Button } from '../../common/Button/Button'
import { useState } from 'react'
import styles from './Contact.module.css'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>Contacto</h2>
        <p className={styles.subtitle}>
          ¿Tienes preguntas? Nos encantaría saber de ti.
        </p>

        <div className={styles.content}>
          <div className={styles.form}>
            {submitted && (
              <div className={styles.successMessage}>
                ✅ ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos tu consulta..."
                  rows="5"
                />
              </div>

              <Button variant="primary" size="lg" fullWidth>
                Enviar Mensaje
              </Button>
            </form>
          </div>

          <div className={styles.info}>
            <h3>Información de Contacto</h3>

            <div className={styles.infoItem}>
              <span className={styles.icon}>📧</span>
              <div>
                <h4>Email</h4>
                <a href="mailto:contact@geomindanalytics.com">
                  contact@geomindanalytics.com
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>📱</span>
              <div>
                <h4>Redes Sociales</h4>
                <div className={styles.socialLinks}>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>📍</span>
              <div>
                <h4>Ubicación</h4>
                <p>Bucaramanga, Colombia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
