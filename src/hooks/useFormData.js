import { useState } from 'react'

export function useFormData(initialData = {}) {
  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e, callback) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      if (callback) {
        callback(formData)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData(initialData)
    setErrors({})
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    resetForm,
    setFormData,
    errors,
    setErrors,
    isSubmitting
  }
}
