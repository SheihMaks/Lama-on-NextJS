"use client"
import Button from "@/components/Button/Button";
import React from "react";
import styles from "./page.module.scss";
import { items } from "./data"; 
import { notFound } from "next/navigation";
import Image from "next/image";

const getData = (cat) => {
    const data = items[cat]
    if (data) {
        return data
    }
    return notFound()
}

const Category = ({ params }) => {
    const data = getData(params.category)
    return (
        <div>
            <h2 className={styles.titleCategory}>{params.category}</h2>
            {data.map(({ id, title, desc, image }) => {
                return (
                    <div className={styles.items} key={id}>
                        <div className={styles.content}>
                            <h2 className={styles.title}>{title}</h2>
                            <p className={styles.description}>{desc}</p>
                            <Button url="#" text="See More"/>
                        </div>
                        <div className={styles.imgContainer}>
                            <Image className={styles.img} src={image} alt="Image" fill={true}/>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Category;