"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import styles from "./page.module.scss";

const Login = () => {
    const [err, setErr] = useState(false);
    const session = useSession();
    const router=useRouter()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        signIn("credentials",{email,password})
    }

    if (session.status === "loading") {
        return(<p>Loading...</p>)
    }

    if (session.status === "authenticated") {
        router?.push("/dashboard")
    }

    return (
        <div className={styles.container}>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
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
                <button className={styles.button} type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;