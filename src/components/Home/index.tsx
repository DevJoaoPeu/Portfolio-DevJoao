import MyPhoto from "../../assets/myphotoupdate.jpg"
import { Container, Content, Div1, Div2, Logo } from "./style"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { RxPaperPlane } from "react-icons/rx"
import { useEffect } from 'react'
import ScrollReveal from "scrollreveal"


export const Home = () => {

    useEffect(() => {
        ScrollReveal().reveal('.animationH1', {
            origin: "left",
            distance: "5rem",
            duration: 1500,
            reset: true
        })
        ScrollReveal().reveal('.animationP', {
            origin: "left",
            distance: "5rem",
            duration: 1300,
            reset: true
        })
        ScrollReveal().reveal('.animationButton', {
            origin: "left",
            distance: "3rem",
            duration: 1100,
            reset: true
        })
        ScrollReveal().reveal('.animationA', {
            origin: "left",
            distance: "2rem",
            duration: 900,
            reset: true
        })
        ScrollReveal().reveal('.animationImage', {
            origin: "right",
            distance: "4rem",
            duration: 1400,
            reset: true
        })
    }, [])

    return (
        <Container>
            <Content>
                <h1 className="animationH1">Bem vindo(a)! 😁</h1>
                <p className="animationP">
                    Meu nome é João Pedro, atualmente moro em São Paulo.
                    Tenho 19 anos e sou Desenvolvedor Full-Stack React/Node.
                    Aqui você vai conhecer um pouco das
                    minhas experiências e projetos desenvolvidos
                    ao longo de alguns anos de estudo!
                </p>
                <Div1>
                    <a className="animationButton" href="https://api.whatsapp.com/send?phone=5511961717327">Fale comigo! <RxPaperPlane /></a>
                </Div1>
                <Div2>
                    <a className="animationA" href="https://github.com/Guestghostpp">
                        <FaGithub />
                    </a>
                    <a className="animationA" href="https://www.linkedin.com/in/jo%C3%A3o-pedro-23136a247/">
                        <FaLinkedin />
                    </a>
                    <a className="animationA" href="https://www.instagram.com/ribeiiro.joaoo/">
                        <FaInstagram />
                    </a>
                </Div2>
            </Content>
            <Logo>
                <img className="animationImage" src={MyPhoto} alt="" />
            </Logo>
        </Container>
    )
}