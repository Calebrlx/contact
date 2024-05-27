import React from 'react'
import logo from './logo.svg'
import separator from './separator.svg'
import style from './Landing.module.css'

export const Landing = () => (
  <section>
    <header id={style.header}>
      <img
        src={logo}
        alt="RelixAI"
      />
    </header>
    <main id={style.main}>
      <h1 className={style.line}>Caleb Forestal</h1>
      <h2 className={style.line}>Founder & CEO</h2>

      <h2 id={style.tel} className={style.line}>
        <a href="tel:907-406-1776">(907)406-1776</a>
      </h2>

      <img className={style.separator} src={separator}/>
      <h2 id={style.site} className={style.line}>
        <a href="mailto:caleb@relix.ai">
          caleb@relix.ai
        </a>
      </h2>

      <img className={style.separator} src={separator}/>
      <section id={style.download}>
        <a href="/caleb.vcf">Caleb's Contact Card</a>
      </section>
    </main>
  </section>
)

export default Landing
