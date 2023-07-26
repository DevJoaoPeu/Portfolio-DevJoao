import { useEffect } from "react"
import LogoImg from "../../assets/joia.png"
import { Button, Container, Logo } from "./style"
import ScrollReveal from "scrollreveal"

export const Header = () => {

    useEffect(() => {
        ScrollReveal().reveal('.animationLeft', {
            origin: "left",
            distance: "5rem",
            duration: 1500,
            reset: true
        })
        ScrollReveal().reveal('.animationRight', {
            origin: "right",
            distance: "5rem",
            duration: 1500,
            reset: true
        })
    }, [])

    return (
        <Container>
            <Logo>
                <img className="animationLeft" src={LogoImg} alt="" />
            </Logo>
            <Button>
                <p className="animationRight">
                    &lt;/&gt;
                </p>
            </Button>
        </Container>
    )
}