import Link from 'next/link'

import { classList } from '../../utils/utils'

import styles from './Header.module.scss'

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={classList('container', styles.nav_container)}>
        <Link href="/">
          <a className={styles.logo_container}>
            <span className={styles.logo_text}>SuperTokens</span>
          </a>
        </Link>

        <ul className={styles.nav_list}>
          <li className={styles.nav_list_item}>
            <Link href="#"><a>Documentation</a></Link>
          </li>
          <li className={styles.nav_list_item}>
            <Link href="#"><a>Pricing</a></Link>
          </li>
          <li className={styles.nav_list_item}>
            <Link href="#"><a>Roadmap</a></Link>
          </li>
          <li className={styles.nav_list_item}>
            <Link href="3"><a>Discord</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}