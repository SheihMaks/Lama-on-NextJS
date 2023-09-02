"use client"
import React from "react";
import { signOut, useSession } from "next-auth/react";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle.module";


const links = [
    {
        id: 1,
        title: 'Home',
        url:'/'
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio',
    },
    {
        id: 3,
        title: 'Blog',
        url:'/blog'
    },
    {
        id: 4,
        title: 'About',
        url:'/about'
    },
    {
        id: 5,
        title: 'Contact',
        url:'/contact'
    },
    {
        id: 6,
        title: 'Dashboard',
        url:'/dashboard'
    }
]

const NavBar = () => {
    const session = useSession()
    
    return (
        <div className={styles.container}>
            <Link className={styles.logo} href="/">Lamamia</Link>
            <div className={styles.links}>
                <DarkModeToggle/>
            {links.map(({ id, title, url }) =>{
                return (<Link className={styles.link} href={url} key={id}>{title}</Link>)
            })}
            {session.status==="authenticated" && <button className={styles.logOut} onClick={signOut}>LogOut</button>}
        </div>
        </div>
    )
}

export default NavBar;