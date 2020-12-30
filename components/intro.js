import styles from './intro.module.css'

const text = `text-3xl ${styles.border} uppercase`

export default function Intro() {
    return (
        <section className={styles.topCover}>
            <div className="container mx-auto flex items-center text-center h-full px-6 py-20">
                <div className="mx-auto">
                    <span className={text}>A programer playground</span>
                    <nav className="pt-8">
                        
                    </nav>
                </div>
            </div>
        </section>
    )
}