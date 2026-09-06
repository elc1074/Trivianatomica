import { useEffect, useRef, useState } from 'react'
import Icon from '../../../components/Icon.jsx'
import styles from './CustomSelect.module.css'

function CustomSelect({ value, options, placeholder, onChange, disabled, status }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleSelect(option) {
    onChange(option)
    setOpen(false)
  }

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={`${styles.trigger} ${status === 'correct' ? styles.triggerCorrect : ''} ${status === 'wrong' ? styles.triggerWrong : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? styles.value : styles.placeholder}>
          {value ?? placeholder}
        </span>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>
          <Icon name="expand_more" size={22} color="currentColor" />
        </span>
      </button>

      {open && (
        <ul className={styles.options} role="listbox">
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                className={`${styles.option} ${option === value ? styles.optionSelected : ''}`}
                role="option"
                aria-selected={option === value}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CustomSelect
