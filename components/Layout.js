import React from 'react'
import Footer from './Footer'
import Header from './Header'
import styles from './../styles/Layout.module.scss'

function Layout(props) {
    return (
        <div className={styles.layout}>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout