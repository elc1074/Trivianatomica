import { useEffect, useRef, useState } from 'react'
import styles from './Reveal.module.css'

function Reveal({ children }) {
  const elementRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={elementRef} className={`${styles.reveal} ${visible ? styles.visible : ''}`}>
      {children}
    </div>
  )
}

export default Reveal
