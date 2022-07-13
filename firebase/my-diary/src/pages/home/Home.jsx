import React from "react";
import DiaryForm from "./DiaryForm";
import DiaryList from "./DiaryList";
import { useAuthContext } from "../../hooks/useAuthContext";
import styles from "./home.module.css";
import { useCollection } from "../../hooks/useCollection";

export default function Home() {
    const { user } = useAuthContext();
    const { documents, error } = useCollection("diary", [
        "uid",
        "==",
        user.uid,
    ]);
    return (
        <main className={styles.cont}>
            <aside className={styles.side_menu}>
                <DiaryForm uid={user.uid} />
            </aside>
            <ul className={styles.content_list}>
                {error && <strong>{error}</strong>}
                {documents && <DiaryList diaries={documents} />}
            </ul>
        </main>
    );
}
