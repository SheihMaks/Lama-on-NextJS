import Link from "next/link";
import React from "react";
import styles from './page.module.scss';

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.selectTitle}>Choose a gallery</h2>
            <div className={styles.list}>
                    <Link href="/portfolio/illustrations" className={styles.item}>
                        <span className={styles.title}>Illustrations</span>
                    </Link>
                    <Link href="/portfolio/websites" className={styles.item}>
                        <span className={styles.title}>Websites</span>
                    </Link>
                    <Link href="/portfolio/applications" className={styles.item}>
                        <span className={styles.title}>Application</span>
                    </Link>
            </div>
        </div>
    )
}

export default Portfolio;