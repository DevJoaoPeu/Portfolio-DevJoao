import { Container, Div1, Div2 } from "./style"
import joia from "../../assets/joia.png"
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"
import ScrollReveal from "scrollreveal"
import {  useEffect } from "react"


export const Footer = () => {

    useEffect(() => {
        ScrollReveal().reveal(".scrollLeft",{
            origin: "left",
            distance: "5rem",
            duration: 1500,
            reset: true
        })
        ScrollReveal().reveal(".scrollRight", {
            origin: "right",
            distance: "5rem",
            duration: 1500,
            reset: true
          })
    }, [])

    return (
        <Container>
            <Div1>
                <img className="scrollLeft" src={joia} alt="" />
                <a className="scrollRight" href="https://api.whatsapp.com/send?phone=5511961717327">Contato <FaWhatsapp /></a>
            </Div1>
            <Div2>
                <h3 className="scrollLeft">E-mail para contato: joaopedroprog.contato@gmail.com <br />
                    © Desenvolvido por João Pedro, 2023.</h3>
                <div className="scrollRight">
                  <a href="https://github.com/Guestghostpp"><FaGithub /></a>  
                   <a href="https://www.instagram.com/ribeiiro.joaoo/"><FaInstagram /></a> 
                </div>
            </Div2>
        </Container>

    )
}

