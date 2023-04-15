import { FooterContainer, Contact, ContactForms, ContactFormsLink } from "../Styles/FooterStyle";

function Footer() {
    return (
        <>
            <FooterContainer>
                <Contact>Contatos:</Contact>
                <ContactForms>Email: 
                    <ContactFormsLink> wesley.felix12@hotmail.com</ContactFormsLink>
                </ContactForms>
                <ContactForms>Linkedin: 
                    <ContactFormsLink href='https://www.linkedin.com/in/wesley-felix-3b2168234/'> Wesley Felix</ContactFormsLink>
                </ContactForms>
                <ContactForms>Celular: 
                    <ContactFormsLink> 11 91347-6468</ContactFormsLink>
                </ContactForms>
            </FooterContainer>
        </>
    )
}

export default Footer