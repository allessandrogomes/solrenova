import Image from "next/image"
import styles from "./styles.module.scss"

interface ISlideIntro {
    image: string,
    title: string,
    subtitle: string,
    imgWidth: number,
    imgHeight: number
}

export default function SlideIntro({ image, title, subtitle, imgWidth, imgHeight }: ISlideIntro) {
    return (
        <div className={styles.slide}>
            <div className={styles.text}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <div className={styles.image}>
                <Image 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    priority 
                    src={image} 
                    alt="Imagem do Slide" 
                    width={imgWidth} height={imgHeight}/>
            </div>
        </div>
    )
}