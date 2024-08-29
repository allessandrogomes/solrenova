import Title from "../shared/Title";
import CardOurNumbers from "./CardOurNumbers";
import CardOurServices from "./CardOurServices";
import styles from './styles.module.scss'

export default function OurServicesSection() {
    return (
        <section className={styles.container} id="servicos">
            <div className={styles.text}>
                <Title title="Soluções abrangentes de energia renovável" />
                <h3>Oferecemos uma gama de serviços para ajudá-lo a aproveitar as vantagens da energia renovável e reduzir sua pegada de carbono.</h3>
            </div>

            <div className={styles.cards}>
                <CardOurServices image="/images/installation.webp" title="Instalação de Painel Solar" subtitle="Nossa equipe de técnicos experientes instalará painéis solares de alta qualidade em sua propriedade para fornecer energia limpa e renovável."/>
                <CardOurServices image="/images/maintenance.webp" title="Manutenção de Painéis" subtitle="Para manter seus painéis solares funcionando com eficiência máxima, oferecemos serviços de limpeza e manutenção para mantê-los livres de sujeira e detritos."/>
                <CardOurServices image="/images/monitoring.webp" title="Monitoramento e Otimização" subtitle="Esse serviço inclui a instalação de sistemas de monitoramento que permitem acompanhar a eficiência dos painéis solares em tempo real, identificar problemas, e ajustar o sistema para maximizar a produção de energia."/>
            </div>

            <div className={styles.line}></div>

            <div className={styles.cardsOurNumbers}>
                <CardOurNumbers numberText="15+" subtitle="Anos de Experiência"/>
                <CardOurNumbers numberText="4.9/5" subtitle="Avaliação de Clientes"/>
                <CardOurNumbers numberText="1.3k+" subtitle="Projetos Realizados"/>
                <CardOurNumbers numberText="20+" subtitle="Municípios Atendidos"/>
            </div>
        </section>
    )
}