import type { Category } from "@/app/_libs/microcms";
import styles from "./index.module.css"

type Props = {
    category: Category;
};

export default function Category({category} : Props){
    return <span className={styles.tatg}>{category.name}</span>
}