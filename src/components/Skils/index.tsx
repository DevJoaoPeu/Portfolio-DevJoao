import { useEffect } from "react"
import { Container, ContainerMain, Divsion, Section } from "./style"
import { FaCheck } from "react-icons/fa"
import ScrollReveal from "scrollreveal"


export const Skil = () => {

    useEffect(() => {
        ScrollReveal()
            .reveal(".scrollTop", {
                origin: "top",
                distance: "60px",
                duration: 1000,
                delay: 200,
                opacity: 0,
                scale: 1,
                easing: "ease-in-out",
                reset: true,
            });
        ScrollReveal()
            .reveal(".scrollLeft", {
                origin: "left",
                distance: "5rem",
                duration: 1000,
                reset: true
            });
    }, [])

    return (
        <Container>
            <h1 className="scrollTop">Habilidades</h1>
            <ContainerMain>
                <Section>
                    <h3>Frontend</h3>
                    <Divsion>
                        <FaCheck />
                        <div className="scrollLeft">
                            <h5>HTML</h5>
                            <p>Avançado</p>
                        </div>
                    </Divsion>
                    <Divsion>
                        <FaCheck />
                        <div className="scrollLeft">
                            <h5>CSS</h5>
                            <p>Avançado</p>
                        </div>
                    </Divsion>
                    <Divsion>
                        <FaCheck />
                        <div className="scrollLeft">
                            <h5>TypeScript</h5>
                            <p>Avançado</p>
                        </div>
                    </Divsion>
                    <Divsion>
                        <FaCheck />
                        <div className="scrollLeft">
                            <h5>Styled-Components</h5>
                            <p>Avançado</p>
                        </div>
                    </Divsion>
                    <Divsion>
                        <FaCheck />
                        <div className="scrollLeft">
                            <h5>React</h5>
                            <p>Avançado</p>
                        </div>
                    </Divsion>
                    <Divsion>
                        <FaCheck />
                        <div className="scrollLeft">
                            <h5>Git</h5>
                            <p>Avançado</p>
                        </div>
                    </Divsion>
                </Section>
                <Section>
                    <h3>Backend</h3>
                    <Divsion>
                        <FaCheck />
                        <div className="scrollLeft">
                            <h5>JavaScript</h5>
                            <p>Avançado</p>
                        </div>
                    </Divsion>
                    <Divsion>
                        <FaCheck />
                        <div className="scrollLeft">
                            <h5>NodeJs</h5>
                            <p>Avançado</p>
                        </div>
                    </Divsion>
                    <Divsion>
                        <FaCheck />
                        <div className="scrollLeft">
                            <h5>Express</h5>
                            <p>Avançado</p>
                        </div>
                    </Divsion>
                    <Divsion>
                        <FaCheck />
                        <div className="scrollLeft">
                            <h5>Prisma</h5>
                            <p>Avançado</p>
                        </div>
                    </Divsion>
                    <Divsion>
                        <FaCheck />
                        <div className="scrollLeft">
                            <h5>MongoDB</h5>
                            <p>Avançado</p>
                        </div>
                    </Divsion>
                </Section>
            </ContainerMain>
        </Container>
    )
}