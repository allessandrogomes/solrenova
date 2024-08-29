import Title from "../shared/Title"
import CardOurMissions from "./CardOurMissions"
import styles from './styles.module.scss'

export default function AboutUsSection() {
    return (
        <section className={styles.container} id="sobre">
            <div className={styles.text}>
                <Title title="Sobre nós" />
                <h4 className={styles.paragraph}>Com 15 anos de experiência, nossa empresa tem o orgulho de ser uma referência no Vale do São Francisco. Desde nossa fundação em Juazeiro até nossa expansão para Petrolina, temos oferecido soluções inovadoras e de alta qualidade. Nossa jornada é marcada pelo compromisso com a excelência e pela adaptação às necessidades da nossa comunidade, refletindo nosso papel como líderes e pioneiros na região.</h4>
                <h3>Nossas missões:</h3>
                <CardOurMissions text="Fornecer soluções de energia renovável limpas, eficientes e acessíveis aos nossos clientes."/>
                <CardOurMissions text="Promover a adoção generalizada de energias renováveis ​e aumentar a independência energética."/>
                <CardOurMissions text="Permanecer na vanguarda da tecnologia de energia renovável e oferecer soluções de ponta."/>
            </div>
            
            <div className={styles.images}>
                <div className={styles.enterprise}></div>
                <div className={styles.collaborators}></div>
            </div>
        </section>
    )
}