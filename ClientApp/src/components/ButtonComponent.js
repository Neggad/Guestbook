import React from 'react'
import styles from './Button.module.css'
//import '../App.css'
export const Types = {
  PRIMARY: styles.primary,
  BLUE: styles.blueBtn,
  TRANSP: styles.transparent,
  DISABLED: styles.disabledBtn
}

export const Sizes = {
  LARGE: styles.large,
  MEDIUM: styles.medium,
  SMALL: styles.small,
  EXTRA_SMALL: styles.extraSmall,
  THIN: styles.thin
}

export function ButtonComponent({ onclickFunc, Type, Size, children }) {

  const handleClick = () => {
    onclickFunc();

  }
  return (
    <div className={styles.buttonContainer}>
      <div
        onClick={handleClick}
        className={`${styles.button} ${Type || Types.PRIMARY} ${Size || Sizes.MEDIUM} `}
      >{children}</div>
    </div>
  )
}