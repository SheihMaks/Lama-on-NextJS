import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.scss";

export const metadata = {
    title: 'Next Dev Contacts',
    description: 'This is contact information',
}

const Contact = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Let's Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image src="/contact.png" fill={true} className={styles.img} alt="Image"/>
                </div>
                <form className={styles.form}>
                    <input className={styles.input} type="text" placeholder="Name" />
                    <input className={styles.input} type="text" placeholder="Email" />
                    <textarea
                        className={styles.textArea}
                        placeholder="Message"
                        cols="30"
                        rows="10"
                    />
                    <Button url="#" text="Send"/>
                </form>
            </div>
        </div>
    )
}

export default Contact;