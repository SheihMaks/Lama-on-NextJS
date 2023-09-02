"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./page.module.scss"; 

const Register = () => {
    const [err, setErr] = useState(false);

    const router = useRouter()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "aplication/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                })
            })
            res.status===201 && router.push("/dashboard/login?succes=Account has been created")
        } catch {
            setErr(true)    
        }
    }
    return (
        <div className={styles.container}>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    className={styles.input}
                    required
                />
                <input
                    type="email"
                    placeholder="Your email"
                    className={styles.input}
                    required
                />
                <input
                    type="password"
                    placeholder="Your password" className={styles.input}
                    required
                />
                <button className={styles.button} type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;