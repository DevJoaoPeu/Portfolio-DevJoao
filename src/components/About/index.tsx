import { AboutContainer, AboutContent, Container, Section1, Section2, Section3 } from "./style"
import { RiMedal2Line } from "react-icons/ri"
import { BsDownload } from "react-icons/bs"
import { BsFillRocketTakeoffFill } from "react-icons/bs"
import { HiOutlineDesktopComputer } from "react-icons/hi"
import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"

export const About = () => {

    const spanRef = useRef<HTMLDivElement>(null)
    const spanRef2 = useRef<HTMLDivElement>(null)
    const spanRef3 = useRef<HTMLDivElement>(null)

    useEffect(() => {
        ScrollReveal().reveal(".scrollTop", {
            origin: "top",
            distance: "60px",
            duration: 1000,
            delay: 200,
            opacity: 0,
            scale: 1,
            easing: "ease-in-out",
            reset: true,
        })
        if (spanRef.current) {
            ScrollReveal().reveal(spanRef.current, {
                origin: "left",
                distance: "5rem",
                duration: 1000,
                reset: true
            });
        }
        if (spanRef2.current) {
            ScrollReveal().reveal(spanRef2.current, {
                origin: "bottom",
                distance: "60px",
                duration: 1000,
                delay: 200,
                opacity: 0,
                scale: 1,
                easing: "ease-in-out",
                reset: true,
            });
        }
        if (spanRef3.current) {
            ScrollReveal().reveal(spanRef3.current, {
                origin: "right",
                distance: "5rem",
                duration: 1000,
                reset: true
            });
        }

    }, [])

    return (
        <Container>
            <Section1>
                <h1 className="scrollTop">Sobre mim</h1>
            </Section1>
            <Section2>
                <AboutContainer>
                    <Section3>
                        <AboutContent ref={spanRef}>
                            <RiMedal2Line />
                            <h4>Experiências</h4>
                            <p>2 anos de estudos</p>
                        </AboutContent>
                        <AboutContent ref={spanRef2}>
                            <BsFillRocketTakeoffFill />
                            <h4>Projetos</h4>
                            <p>+50 projetos</p>
                        </AboutContent>
                        <AboutContent ref={spanRef3}>
                            <HiOutlineDesktopComputer />
                            <h4>Stack</h4>
                            <p>React/Node</p>
                        </AboutContent>
                    </Section3>
                    <p ref={spanRef2}>Olá! Meu nome é João Pedro, tenho 19 anos e sou um desenvolvedor Full-Stack. Ao longo dos últimos 2 anos, tenho me dedicado ao desenvolvimento Full-Stack, com foco nas tecnologias React, Node.js e TypeScript. Tenho paixão por criar soluções inovadoras e estou sempre buscando aprender e aprimorar minhas habilidades. Estou disponível para projetos
                        desafiadores e estou animado para contribuir com meu conhecimento e experiência. Vamos trabalhar juntos e criar algo incrível!</p>
                    <a href="https://drive.google.com/file/d/1d8IsGSXMWZgck_56tbjWWdnJ7hUyOF5P/view?usp=sharing">Download do cv <BsDownload /></a>
                </AboutContainer>
            </Section2>
        </Container>
    )
}
