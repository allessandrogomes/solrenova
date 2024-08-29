import Image from 'next/image'
import Title from '../shared/Title'
import styles from './styles.module.scss'

export default function RecentProjectsSection() {
    return (
        <section className={styles.container} id="projetos">
            <Title title="Projetos Recentes" />

            <div className={styles.images}>
                <div className={styles.top}><Image style={{ width: "100%", height: "100%", objectFit: "cover" }} width={3891} height={2918} src="/images/project1.webp" alt="Projeto 1" /></div>
                <div className={styles.top}><Image style={{ width: "100%", height: "100%", objectFit: "cover" }} width={5127} height={3845} src="/images/project2.webp" alt="Projeto 2" /></div>
            </div>

            <div className={styles.images}>
                <div className={styles.bottom}><Image style={{ width: "100%", height: "100%", objectFit: "cover" }} width={4000} height={3000} src="/images/project3.webp" alt="Projeto 3" /></div>
                <div className={styles.bottom}><Image style={{ width: "100%", height: "100%", objectFit: "cover" }} width={3901} height={2926} src="/images/project4.webp" alt="Projeto 4" /></div>
                <div className={styles.bottom}><Image style={{ width: "100%", height: "100%", objectFit: "cover" }} width={4000} height={3000} src="/images/project5.webp" alt="Projeto 5" /></div>
            </div>
        </section>
    )
}