import { News } from "@/app/_libs/microcms";
import Image from "next/image";
import styles from "./index.module.css"
import Category from "../Category"
import Date from "../Date"

type Props = {
    data: News;
}

export default function Article({data}: Props){
    return (
        <main>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.discription}>{data.description}</p>
            <div className={styles.meta}>
                <Category category={data.category}/>
                <Date date={data.publishedAt ?? data.createdAt}/>
            </div>
            {data.thumbnail &&(
                <Image
                src={data.thumbnail.url}
                alt=""
                className={styles.thumbnail}
                width={data.thumbnail.width}
                height={data.thumbnail.height}
                />
            )}
            <div 
            className={styles.contents}
            dangerouslySetInnerHTML={{__html: data.content ?? ""}}
            />
        </main>
    );
}