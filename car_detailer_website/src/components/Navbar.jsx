'use client'
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const navbarItems = [
        {name : 'Strona Główna', href: '/'},
        {name: 'Usługi', href: '/uslugi'},
        {name: 'Portfolio', href: '/portfolio'},
        {name: 'Kontakt', href: '/kontakt'},
    ]
    
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    // Handle escape key press to close the menu
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };
        
        // Prevent scrolling when menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        window.addEventListener('keydown', handleEscKey);
        return () => {
            window.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = '';
        };
    }, [isOpen]);const pathName = usePathname();

    return (
        <nav className="text-white items-center justify-between md:mt-9 flex flex-row w-full z-50 max-w-content mx-auto py-4 md:py-2 px-4 relative">
           <span className="text-2xl text-white">LO<span className="text-secondary">GO</span></span>
            <button 
                className="md:hidden flex items-center justify-center" 
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? <X className="w-6 h-6 text-secondary" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="hidden md:flex flex-row items-center justify-between mx-4 gap-2">
                {navbarItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-2" >
                        <a className={"text-2xl " + (item.href==pathName ? "text-secondary":"text-white") } href={item.href}> {item.name} </a>
                        {index!=navbarItems.length-1 && <span className="text-secondary text-2xl">/</span>}
                    </div>
                ))}
            </div>

            {/* Mobile Menu - Full Screen Overlay Design */}
            {isOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-primary  overflow-hidden bg-opacity-95 z-50 flex flex-col items-center justify-center"
                    onClick={(e) => {
                        // Close menu when clicking the background (but not when clicking on menu items)
                        if (e.target === e.currentTarget) {
                            setIsOpen(false);
                        }
                    }}
                >
                    {/* Close button positioned in the top-right corner */}
                    <button 
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                    >
                        <X className="w-8 h-8 text-secondary" />
                    </button>
                    
                    <div className="flex flex-col items-center gap-8 py-8">
                        {navbarItems.map((item, index) => (
                            <a 
                                key={index} 
                                href={item.href}
                                className={`text-3xl font-bold relative transition-all duration-300 
                                    ${item.href==pathName 
                                        ? "text-secondary" 
                                        : "text-white hover:text-secondary"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                                {item.href==pathName && (
                                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-secondary"></span>
                                )}
                            </a>
                        ))}
                    </div>
                    <div className="absolute bottom-16 text-center">
                        <p className="text-gray-400 text-sm">Car detailing Pabianice</p>
                    </div>
                </div>
            )}
        </nav>
    );
}