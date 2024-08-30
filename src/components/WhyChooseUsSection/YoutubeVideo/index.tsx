'use client'

import { useState } from "react"
import styles from "./styles.module.scss"
import PlayCircleIcon from '@mui/icons-material/PlayCircle'

export default function YoutubeVideo() {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className={styles.video}>
            {!isLoaded ? (
                <div onClick={() => setIsLoaded(true)} className={styles.thumbnail}>
                    <PlayCircleIcon sx={{ fontSize: "100px", color: "white", ":hover": { color: "#FF9843"} }} />
                    <p>Assista ao vídeo da SolRenova</p>
                </div>
            ) : (
                <iframe src="https://www.youtube.com/embed/sYIGiuycD-k?autoplay=1" title="SolRenova Energia Solar" width="500" height="300" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={false}></iframe>
            )}
        </div>
    )
}