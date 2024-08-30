import Card from './Card'
import styles from './styles.module.scss'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import MemoryIcon from '@mui/icons-material/Memory'
import TuneIcon from '@mui/icons-material/Tune'
import Title from '../shared/Title'
import YoutubeVideo from './YoutubeVideo'

export default function WhyChooseUsSection() {
    return (
        <section className={styles.container} id="diferenciais">
            <Title title="Por que escolher a <span>Sol</span>Renova?"/>

            <div className={styles.cards}>
                <Card icon={<AttachMoneyIcon />} title="Soluções Econômicas" subtitle="Nossas soluções de energia renovável não são apenas ecologicamente corretas, mas também econômicas." />
                <Card icon={<MemoryIcon />} title="Tecnologia Avançada" subtitle="Utilizamos a mais recente tecnologia em energia renovável para fornecer as soluções mais eficientes e eficazes." />
                <Card icon={<TuneIcon />} title="Soluções Customizáveis" subtitle="Cada cliente tem necessidades e requisitos energéticos únicos. É por isso que oferecemos soluções personalizáveis ​​de energia renovável." />
            </div>

            <YoutubeVideo />
        </section>
    )
}