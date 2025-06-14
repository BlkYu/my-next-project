"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { useState } from "react";
import cx from "classnames"

export default function Menu(){
    const [isOpen, setOpen] = useState<boolean>(false);
    const open = () => setOpen(true);
    const close = () => setOpen(false);
    
    return (
        <div>
            <nav className={cx(styles.nav, isOpen && styles.open)}>
                <ul className={styles.items}>
                    {/* <li>
                        <Link href="/news">ニュース</Link>
                    </li>
                    <li>
                        <Link href="/members">メンバー</Link>
                    </li>
                    <li>
                        <Link href="/contact">お問合せ</Link>
                    </li> */}
                </ul>
            </nav>
            {isOpen ? (
                //メニューが開いている時はバツ印を表示
                <button className={cx(styles.button, styles.close)}
                        onClick={close}>
                    <Image
                    src="/close.svg"
                    alt="閉じる"
                    width={24}
                    height={24}
                    priority
                    />
                </button>
            ) : (
                //メニューが閉じている時はハンバーガメニューを表示
                <button className={styles.button}
                        onClick={open}>
                    <Image
                    src="/menu.svg"
                    alt="メニュー"
                    width={24}
                    height={24}
                    priority
                    />
                </button>
            )
            }
        </div>
    )
}