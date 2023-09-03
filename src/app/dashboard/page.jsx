"use client"
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.scss";
const Dashboard = () => {

    const session= useSession()

    const router = useRouter()
    
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    
    const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher) 

    if (session.status === "loading") {
        return(<p>Loading....</p>)
    }

    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login")
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const title = e.target[0].value
        const desc = e.target[1].value
        const img = e.target[2].value
        const content=e.target[3].value
        try {
            await fetch('/api/posts', {
                method: "Post",
                headers: {
                    "Content-type": "aplication/json"
                },
                body: JSON.stringify({
                    title,
                    desc,
                    img,
                    content,
                    username:session.data.user.name
                })
            })
            mutate();
            e.target.reset()
        } catch (error) {
            console.log(error)
        }
    }
    
    const onHandleClick = async (id) => {
        try {
            await fetch(`/api/posts/${id}`, {
                method:"DELETE",
            })
            mutate()
        } catch (error) {
            console.log(error)
        }    
    }
    // console.log(data)
    // const [data, setData] = useState([])
    // const [err, setErr] = useState(false)
    // const [isLoading,setIsLoading]=useState(false)
    // useEffect(() => {
    //     const getData = async (id) => {
    //         setIsLoading(true)
    //         const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
    //         { cache: "no-store" });
    //         if (!resp.ok) {
    //             setErr(true)
    //         }
    //         const data=await res.json()
    //     setData(data)
    //     setIsLoading(false)
    //     }
    //     getData()
    // },[])
    if (session.status === "authenticated") {
        return (
            <div className={styles.container}>
                <div className={styles.posts}>
                    {isLoading ? "loading" : data?.map((post) => {
                        return(<div className={styles.post} key={post._id}>
                            <div className={styles.imgContainer}>
                                <Image src={post.img} alt="Image" width={200} height={100} />
                            </div>
                            <h1 className={styles.title}>{post.title}</h1>
                            <span className={styles.delete} onClick={()=>onHandleClick(post._id)}>X</span>
                        </div>)
                    })}
                </div>
                <form onSubmit={handleSubmit} className={styles.newPost}>
                    <h1 className={styles.formTitle}>Add new post</h1>
                    <input
                        type="text"
                        placeholder="Title"
                        className={styles.input} />
                    <input
                        type="text"
                        placeholder="Enter description"
                        className={styles.input} />
                    <input
                        type="text"
                        placeholder="Enter adress of image"
                        className={styles.input} />
                    <textarea
                        placeholder="Content"
                        className={styles.textarea} 
                        cols="30"
                        rows="10"
                    />
                    <button type="submit" className={styles.button}>Send</button>
                </form>
            </div>
        )
    }
    
}

export default Dashboard;