export default function Footer() {
    const footerLinks = [
        { name: 'Strona Główna', href: '/' },
        { name: 'Usługi', href: '/uslugi' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Kontakt', href: '/kontakt' },
    ]
    const contactLinks = [
        { name: '+48 123 456 789', href: 'tel:+48512345678' },
        { name: 'test@gmail.com', href: 'mailto:test@gmail.com' }
    ]
    const hoursLinks = [
        { name: 'Poniedziałek - Piątek', hours: '9:00 - 17:00' },
        { name: 'Sobota', hours: '9:00 - 13:00' },
        { name: 'Niedziela', hours: 'Zamknięte' },
    ]

    const addresses = ["ul. Zielona 214", "95-200", "Pabianice"];

    return (
        <footer id="footerMain" className="flex flex-col max-w-content mx-auto px-4 gap-8 w-full " >
            <div className="flex flex-col gap-2">
                <h3 className="text-2xl text-white" >LO<span className="text-secondary">GO</span></h3>
                <h3 className="text-base text-white max-w-prose">Profesjonalne usługi detailingu samochodowego. Renowacja lakieru, powłoki ceramiczne i kompleksowa pielęgnacja wnętrz.</h3>
            </div>
            <div id="footerContent" className="flex flex-col md:flex-row justify-between  gap-8">
                <div className="flex flex-col gap-2">
                    <span className="text-lg text-secondary font-bold">Nawigacja</span>
                    <nav className="flex flex-col gap-2"    >
                        {footerLinks.map((link, index) => (
                            <a key={index} className="text-base text-white hover:text-secondary transition-colors" href={link.href}>{link.name}</a>
                        ))}
                    </nav>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-lg text-secondary font-bold">Kontakt</span>
                    <div className="flex flex-col gap-2"    >
                        {contactLinks.map((link, index) => (
                            <a key={index} className="text-base text-white hover:text-secondary transition-colors" href={link.href}>{link.name}</a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-lg text-secondary font-bold">Godziny Otwarcia</span>
                    <div className="flex flex-col gap-2"    >
                        {hoursLinks.map((link, index) => (
                            <span key={index} className="text-base cursor-pointer text-white hover:text-secondary transition-colors"> {link.name} {link.hours} </span>
                        ))}
                    </div>

                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-lg text-secondary font-bold">Adres</span>
                    <div className="flex flex-col gap-2"    >
                        {addresses.map((link, index) => (
                            <span key={index} className="text-base cursor-pointer text-white hover:text-secondary transition-colors"> {link} </span>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    )
}