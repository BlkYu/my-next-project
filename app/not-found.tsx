import styles from "./not-found.module.css"

export default function NotFound(){
    return (
        <div className={styles.container}>
            <dl className={styles.title}>ページが見つかりませんでした</dl>
            <dd className={styles.text}>
                あなたがアクセスしようとしたページは存在しません。
                <br />
                URL を再度ご確認ください
            </dd>
        </div>
    )
}