import styles from './styles.module.scss'

export default function Title({ title }: { title: string }) {
    return (
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></h2>
    )
}