import { classList } from "../../utils/utils"

import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      All rights reserved &copy; {new Date().getFullYear()}
    </div>
  )
}