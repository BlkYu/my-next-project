import { notFound } from "next/navigation";
import Article from "@/app/_components/Article"
import ButtonLink from "@/app/_components/ButtonLink";
import { getNewsDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css"
import { Metadata } from "next";

type Props ={
    params:{
        slug: string;
    };
    searchParams: {
        dk?: string;
    }
};

export async function generateMetadata({params, searchParams}: Props): Promise<Metadata>{
    const data = await getNewsDetail(params.slug,{draftKey: searchParams.dk,});

    return {
        title: data.title,
        description: data.description,
        openGraph: {
            title: data.title,
            description: data.description,
            images: [data?.thumbnail?.url ?? ""]
        }
    };
}

export default async function Page({params, searchParams}: Props) {
    const data = await getNewsDetail(params.slug, {
        draftKey: searchParams.dk,
    }).catch(notFound);

    return (
        <div>
            <Article data={data}/>
            <div className={styles.footer}>
                <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
            </div>
        </div>
    )
}