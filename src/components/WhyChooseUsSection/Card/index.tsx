import { ReactElement } from 'react'
import styles from './styles.module.scss'

interface ICards {
    icon: ReactElement,
    title: string,
    subtitle: string
}

export default function Card({ icon, title, subtitle }: ICards) {
    return (
        <div className={styles.container}>
            <div>{icon}</div>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
        </div>
    )
}