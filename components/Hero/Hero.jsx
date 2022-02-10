import { useEffect, useState } from 'react'

import { classList } from '../../utils/utils'
import styles from './Hero.module.scss'

export default function Hero () {
  return (
    <div
      className={styles.hero_container}
    >
      <div className="container">
        <h1 className={classList(styles.h1)}>SuperTokens Blog</h1>
      </div>
    </div>
  )
}