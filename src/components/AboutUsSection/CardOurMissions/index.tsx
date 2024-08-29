import styles from './styles.module.scss'

export default function CardOurMissions({ text }: { text: string }) {
    return (
        <div className={styles.container}>
            <h4>{text}</h4>
        </div>
    )
}