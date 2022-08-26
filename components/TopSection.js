import React from 'react'
import styles from './../styles/TopSection.module.scss'
import Link from 'next/dist/client/link'

function TopSection() {
    return (
        <section className={styles['top-section']}>
            <div className={styles['video-container']}>
                <video autoPlay loop muted>
                    <source src='./video/video.mp4' />
                </video>
            </div>
            <p>
                Velkommen til profesjonell thaimassasje som gjør godt for kropp og sinn. Våre massører utfører massasjebehandlinger med effektive teknikker fra tradisjonell thaimassasje.
            </p>
            <Link href={'https://oriental.onlinebooq.net/'}>Book time</Link>
        </section>
    )
}

export default TopSection