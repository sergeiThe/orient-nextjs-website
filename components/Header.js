import React from 'react'
import Link from 'next/link'
import styles from './../styles/Header.module.scss'
import MobileMenu from './MobileMenu';
import { useMenuContext } from '../store/menu-context';


function Header() {

    const menuCtx = useMenuContext();


    return (
        <React.Fragment>
            {menuCtx.isOpen && <MobileMenu />}
            <header className={styles.header}>
                <h1>Oriental Thai Massasje</h1>
                <nav className={styles['big-nav']}>
                    <ul>
                        <li><Link href={'#services'}>Tjenester</Link></li>
                        <li><Link href={'#contact'}>Kontakt</Link></li>
                        <li><Link href={'https://oriental.onlinebooq.net/'}>Book</Link></li>
                    </ul>
                </nav>

                <div className="hamburger" onClick={menuCtx.toggle}>
                    <div className={menuCtx.isOpen ? 'burgerLine menuOpened' : 'burgerLine'}></div>
                </div>
            </header>
        </React.Fragment >
    )
}

export default Header