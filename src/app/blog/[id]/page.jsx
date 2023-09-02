import Image from "next/image";
import React from "react";
import styles from "./page.module.scss";

const getData = async (id) => {
    const resp = await fetch(`http://localhost:3000/api/posts/${id}`,
        { cache: "no-store" });
    if (!resp.ok) {
        throw new Error("Failed to fetch data")
    }
    return resp.json()
}

export async function generateMetadata({ params }) {
    const post = await getData(params.id)
    
    return {
        title: post.title,
        description:post.desc
    }
}

const BlogPost =async ({params}) => {
    const data= await getData(params.id)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <h1 className={styles.title}>
                        {data.title}
                    </h1>
                    <p className={styles.description}>{data.desc}</p>
                    <div className={styles.author}>
                        <Image className={styles.avatar} src={data.img} width={15} height={15} alt="imgUser" />
                        <span className={styles.userName}>{data.username}</span>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg" fill={true} alt="img"/>
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>{data.content}</p>
            </div>
        </div>
    )
}

export default BlogPost;