import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.scss";

const getData = async () => {
    const resp = await fetch("http://localhost:3000/api/posts",
        { cache: "no-store", });
    if (!resp.ok) {
        throw new Error("Failed to fetch data")
    }
    return resp.json()
}

const Blog = async () => {
    const data = await getData();

    return (
        <div className={styles.mainContainer}>
            {data.map(({ _id, title, desc, img, ...args }) => {
                return(
                <Link href={`/blog/${_id}`} className={styles.container} key={_id}>
                    <div className={styles.items}>
                        <div className={styles.imgContainer}>
                            <Image className={styles.img} src={img} alt="Image" width={400} height={200} />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.title}>{title}</h2>
                            <p className={styles.description}>{desc}</p>
                        </div>
                    </div>
                </Link>
            )})}
        </div>
    )
}

export default Blog;