import { url } from 'inspector'
import styles from './styles.module.scss'

interface ICardOurServices {
    image: string,
    title: string,
    subtitle: string
}

export default function CardOurServices({ image, title, subtitle }: ICardOurServices) {
    return (
        <div className={styles.box}>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
        </div>
    )
}