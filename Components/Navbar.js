import Link from 'next/link'
import React from 'react'
import styles from "../styles/Nvbar.module.css"


const Navbar = () => {
  return (
    <div className={styles.Nav}>
        <Link href="/">Home</Link>
        <Link href='/about'>about</Link>
        <Link href='/contact'>contact</Link>
        <Link href='/posts'>posts</Link>
    </div>
  )
}

export default Navbar