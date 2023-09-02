"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
    return (
        <div className={styles.container}>
            <div>2023 Lamamia. All rights reserved.</div>
            <div className={styles.social}>
                <Image src="/1.png" className={styles.icon} alt="Facebook" width={15} height={15} />
                <Image src="/2.png" className={styles.icon} alt="Instagram" width={15} height={15} />
                <Image src="/3.png" className={styles.icon} alt="Twitter" width={15} height={15} />
                <Image src="/4.png" className={styles.icon} alt="Youtube" width={15} height={15} />
            </div>
        </div>
    )
}

export default Footer;
