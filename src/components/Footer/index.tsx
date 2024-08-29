import styles from "./styles.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h3>SolRenova &copy; 2024 - Todos os Direitos Reservados </h3>
            <h4>Desenvolvido por <a href="https://www.valebytes.com.br" target="_blank">ValeBytes</a></h4>
        </footer>
    )
}