import { styled } from "styled-components"
import { useEffect, useRef, useState } from "react"
import { MdOutlineFolderCopy } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import ScrollReveal from "scrollreveal"
import { AiOutlineLink } from "react-icons/ai"
import imoveis from "../../assets/imoveis.png"
import financas from "../../assets/financas.png"
import plataform from "../../assets/plataform.png"
import { Buttons, Container, DivProject1, DivProject2, DivProject3, Project, Text } from "./style"


interface SpanProps {
    clicked?: boolean;
}

const SPAN = styled.span<SpanProps>`
background-color: ${({ clicked }) => (clicked ? "white" : "transparent")};
color: ${({ clicked }) => (clicked ? "black" : "white")};
`

export const Projects = () => {
    const [isClicked, setIsClicked] = useState<number>(1)

    const spanRef = useRef<HTMLDivElement>(null)
    const spanRef2 = useRef<HTMLDivElement>(null)
    const spanRef3 = useRef<HTMLDivElement>(null)

    useEffect(() => {

        if (spanRef.current) {
            ScrollReveal()
                .reveal(spanRef.current, {
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
        if (spanRef2.current) {
            ScrollReveal()
                .reveal(spanRef2.current, {
                    origin: "left",
                    distance: "5rem",
                    duration: 1000,
                    reset: true
                });
        }
        if (spanRef3.current) {
            ScrollReveal()
                .reveal(spanRef3.current, {
                    origin: "right",
                    distance: "5rem",
                    duration: 1000,
                    reset: true
                });
        }
        ScrollReveal()
            .reveal(".scrollLeft", {
                origin: "left",
                distance: "5rem",
                duration: 1000,
                reset: true
            })
        ScrollReveal()
            .reveal(".scrollBottom", {
                origin: "bottom",
                distance: "30px",
                duration: 1000,
                delay: 200,
                opacity: 0,
                scale: 1,
                easing: "ease-in-out",
                reset: true,
            })
    }, [])

    return (
        <Container>
            <Text>
                <h2 className="scrollLeft">Onde ganhei experiência</h2>
                <h1 className="scrollBottom"><MdOutlineFolderCopy /> Meus Projetos</h1>
            </Text>
            <Buttons>
                <SPAN clicked={isClicked === 1} onClick={() => setIsClicked(1)}>Todos</SPAN>
                <SPAN clicked={isClicked === 2} onClick={() => setIsClicked(2)}>React</SPAN>
                <SPAN clicked={isClicked === 3} onClick={() => setIsClicked(3)}>NodeJs</SPAN>
            </Buttons>
            <Project>

                {

                    isClicked === 1 || isClicked === 2 ? (
                        <>
                            <DivProject1 ref={spanRef2} style={{ backgroundImage: `url(${imoveis})` }}>
                                <h4>Projeto Imoveis</h4>
                                <div>
                                    <a href="https://github.com/Guestghostpp/api-imoveis"><FaGithub /></a>
                                    <a><AiOutlineLink /></a>
                                </div>
                            </DivProject1>
                            <DivProject2 ref={spanRef} style={{ backgroundImage: `url(${financas})` }}>
                                <h4>Projeto Finanças</h4>
                                <div>
                                    <a href="https://github.com/Guestghostpp/App-de-finan-as"><FaGithub /></a>
                                    <a href="https://app-finanasjp.netlify.app"><AiOutlineLink /></a>
                                </div>
                            </DivProject2>
                            <DivProject3 ref={spanRef3} style={{ backgroundImage: `url(${plataform})` }}>
                                <h4>Projeto Plataforma</h4>
                                <div>
                                    <a><FaGithub /></a>
                                    <a href="https://64b30c75c64854491f35981f--shimmering-dolphin-53d6e9.netlify.app/"><AiOutlineLink /></a>
                                </div>
                            </DivProject3>
                        </>
                    ) : (
                        <DivProject1 ref={spanRef} style={{ backgroundImage: `url(${imoveis})` }}>
                            <h4>Projeto Imoveis</h4>
                            <div>
                                <a href="https://github.com/Guestghostpp/api-imoveis"><FaGithub /></a>
                                <a><AiOutlineLink /></a>
                            </div>
                        </DivProject1>
                    )
                }


            </Project>
        </Container>
    )
}