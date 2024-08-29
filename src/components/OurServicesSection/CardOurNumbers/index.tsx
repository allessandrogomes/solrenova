import styles from "./styles.module.scss"

interface ICardOurNumbers {
    numberText: string,
    subtitle: string
}

export default function CardOurNumbers({ numberText, subtitle }: ICardOurNumbers) {
    return (
        <div className={styles.card}>
            <h3>{numberText}</h3>
            <h4>{subtitle}</h4>
        </div>
    )
}