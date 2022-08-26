import React from 'react'
import Link from 'next/dist/client/link'
import styles from './../styles/Contact.module.scss'
import openHours from '../data/openhours'
import contact from '../data/contact'

function Contact() {
    return (
        <section className={styles.contact} id="contact">
            <div className={styles.title}>
                <h2>Åpningstider & kontaktinfo</h2>
            </div>

            <div className={styles['open-hours']}>
                <ul>
                    <li><span>Hverdager</span> <span>{openHours.hverdagerFra} - {openHours.hverdagerTil} </span></li>
                    <li><span>Lørdag</span> <span>{openHours.lørdagFra} - {openHours.lørdagTil}</span></li>

                </ul>
            </div>
            <Link href={'https://oriental.onlinebooq.net/'}>Book time</Link>
            <div className={styles['contact-info']}>
                <ul>
                    <li>Tel: {contact.telefonNummber}</li>
                    <li>E-post: {contact.email}</li>
                    <li> Adresse: {contact.adresse}</li>
                </ul>
            </div>
        </section>
    )
}

export default Contact