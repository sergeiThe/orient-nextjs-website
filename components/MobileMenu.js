import React from 'react'
import ReactDOM from 'react-dom'
import styles from "./../styles/MobileMenu.module.scss"
import Link from 'next/link'
import { useMenuContext } from '../store/menu-context'

function Menu() {

    const menuCtx = useMenuContext();

    return (
        <div
            className={styles['mobile-menu']}

        >
            <nav>
                <ul>
                    <li onClick={menuCtx.toggle}><Link href={'#services'} >Tjenester</Link></li>
                    <li onClick={menuCtx.toggle}><Link href={'#contact'} >Kontakt</Link></li>
                    <li onClick={menuCtx.toggle}><Link href={'#contact'} >Åpningstider</Link></li>
                    <li onClick={menuCtx.toggle}><Link href={'https://oriental.onlinebooq.net/'}>Book time</Link></li>

                </ul>
            </nav>
        </div>
    )
}

function MobileMenu() {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Menu />, document.getElementById('mobile-menu'))}
        </React.Fragment>
    )
}

export default MobileMenu