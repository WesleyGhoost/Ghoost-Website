import emailjs from '@emailjs/browser'
import { ContactContainer, ContactTitle, ContactForm } from "../Styles/contactStyle";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ErrorModal } from '../components/modals/errorModal';
import { IncompleteModal } from '../components/modals/incompleteModal'
import { SuccessModal } from '../components/modals/successModal'
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function Contact() {
    const language = useSelector((state) => state.language)

    const revealContact = () => {
        ScrollReveal().reveal(
            '.contact',
            {
                reset: false,
                duration: 2000,
                delay: 200,
                origin: 'bottom',
                distance: '5px'
            }
        )
    }

    useEffect(() => {
        revealContact()
    }, [])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [showSuccessModal, setShowSuccessModal] = useState('none')
    const [showErrorModal, setShowErrorModal] = useState('none')
    const [showIncompleteModal, setShowIncompleteModal] = useState('none')

    let error = ''

    const handleSuccessModal = () => {
        setShowSuccessModal('none')
    }

    const handleErrorModal = () => {
        setShowErrorModal('none')
    }

    const handleIncompleteModal = () => {
        setShowIncompleteModal('none')
    }

    const sendEmail = (e) => {
        e.preventDefault()

        const templateParams = {
            name: name,
            email: email,
            message: message
        }

        if (name === '' || email === '' || message === '') {
            setShowIncompleteModal('flex')
        } else {
            emailjs.send(
                'service_jjmtq1m',
                'template_zr3t5fh',
                templateParams,
                'xfxacjELc5ow2ceuV'
            ).then(() => {
                setShowSuccessModal('flex')
            }).catch((err) => {
                error = err
                setShowErrorModal('flex')
            })

            setName('')
            setEmail('')
            setMessage('')
        }
    }

    return (
        <>
            <ContactContainer
                className='contact'
                id="contact"
            >
                <ContactTitle>
                    {language === 'pt' ? 'Contato' : 'Contact'}
                </ContactTitle>
                <h3>
                    {language === 'pt' ?
                        'Envie um email diretamente para mim preenchendo as informações abaixo!' :
                        'Send an email directly to me filling the informations below!'
                    }
                </h3>
                <ContactForm onSubmit={sendEmail}>
                    <input
                        type="text"
                        placeholder={language === 'pt' ? 'Nome' : 'Name'}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder={language === 'pt' ? 'Mensagem' : 'Message'}
                        onChange={(e) => setMessage(e.target.value)}
                    >
                    </textarea>
                    <button type="submit">
                        {language === 'pt' ? 'Enviar' : 'Submit'}
                    </button>
                </ContactForm>
            </ContactContainer>

            <SuccessModal
                display={showSuccessModal}
                close={handleSuccessModal}
            />
            <ErrorModal
                display={showErrorModal}
                close={handleErrorModal}
                error={error}
            />
            <IncompleteModal
                display={showIncompleteModal}
                close={handleIncompleteModal}
            />
        </>
    )
}

export default Contact