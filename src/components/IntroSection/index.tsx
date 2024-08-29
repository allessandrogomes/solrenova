'use client'

import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import SlideIntro from './SlideIntro'

export default function IntroSection() {
    return (
        <section className={styles.container} id="inicio">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination
                autoplay={{ delay: 10000 }}
                speed={1000}
            >
                <SwiperSlide>
                    <SlideIntro 
                        title="Potencialize Seu Futuro com Energia Solar" 
                        subtitle="Reduza custos, valorize seu imóvel e contribua para um planeta mais sustentável. Descubra as vantagens da energia solar para sua casa ou empresa."
                        image="/images/banner1.webp"
                        imgWidth={4173}
                        imgHeight={3888}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideIntro 
                        title="Suporte Contínuo para Seu Sistema Solar" 
                        subtitle="Estamos ao seu lado após a instalação, oferecendo suporte técnico dedicado e manutenção para assegurar que sua energia solar funcione com o máximo desempenho, todos os dias."
                        image="/images/banner2.webp"
                        imgWidth={2744}
                        imgHeight={2624}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideIntro 
                        title="Supervisão Inteligente em Tempo Real" 
                        subtitle="Nossa tecnologia exclusiva permite que você acompanhe a performance do seu sistema solar em tempo real, garantindo máxima eficiência e identificação imediata de qualquer anomalia."
                        image="/images/banner3.webp"
                        imgWidth={3360}
                        imgHeight={5040}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}