import React from 'react'
import styles from './HeadersLogo.module.scss'

export default function index() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <p className={styles.firstText}>T-shirt / Tops</p>
        <h1 className={styles.secondText}>Summer Value Pack</h1>
        <p className={styles.thirdText}>cool / colorful / comfy</p>
        <button className={styles.btn}>Shop Now</button>
      </div>
    </div>
  )
}
