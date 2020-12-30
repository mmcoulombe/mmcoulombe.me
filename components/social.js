import styles from './social.module.css'

export default function Social() {
    return (
        <aside className={styles.topRight}>
            <ul className={styles.horizontalList}>
                <li><a target="_blank" href="https://github.com/mmcoulombe"><img className={styles.socialIcon} src="images/icons/GitHub-Mark-32px.png" alt="GitHub" /></a></li>
                <li><a target="__blank" href="https://codeberg.org/mmcoulombe"><img className={styles.socialIcon} src="images/icons/codeberg.png" alt="CodeBerg" /></a></li>
            </ul>
        </aside>
    )
}