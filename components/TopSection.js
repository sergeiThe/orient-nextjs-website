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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <Link href={'https://oriental.onlinebooq.net/'}>Book time</Link>
        </section>
    )
}

export default TopSection