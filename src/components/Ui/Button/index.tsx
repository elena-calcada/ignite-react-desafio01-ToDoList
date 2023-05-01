import styles from "./Button.module.css"
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className={styles.button}
      {...rest}
    >
      {children}
    </button>
  )
}