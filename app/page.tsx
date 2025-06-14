import ButtonLink from "./_components/ButtonLink";
import styles from "./page.module.css";
import Image from "next/image"
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT, WEB_DISCRIBE, WEB_TITLE } from "./_constants";
import {News} from "@/app/_libs/microcms"
import NewsList from "@/app/_components/NewsList"

export const revalidate = 60;

export default async function Home() {

  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>{WEB_TITLE}</h1>
        <p className={styles.description}>{WEB_DISCRIBE}</p>
      </div>
      <Image 
        className={styles.bgimg} 
        src="/img-mv.jpg" 
        alt=""
        width={4000}
        height={1200}
        />
    </section>
    <section className={styles.news}>
      <h2 className={styles.newsTitle}>最新の記事</h2>
      <NewsList news = {data.contents}/>
      <div className={styles.newsLink}>
        <ButtonLink href="/news">もっとみる</ButtonLink>
      </div>
    </section>
    </>
  );
}