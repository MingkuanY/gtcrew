import styles from './RadioGroup.module.scss'

interface RadioGroupProps {
  label: string
  name: string
  options: string[]
}

export default function RadioGroup({ label, name, options }: RadioGroupProps) {
  return (
    <fieldset className={styles.radioGroup}>
      <legend className={styles.radioGroupLabel}>{label}</legend>
      <div className={styles.radioOptions}>
        {options.map((opt) => (
          <label key={opt} className={styles.radioOption}>
            <input
              type="radio"
              name={name}
              value={opt}
              className={styles.radio}
            />
            {opt}
          </label>
        ))}
      </div>
    </fieldset>
  )
}
