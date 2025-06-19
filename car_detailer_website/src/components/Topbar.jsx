'use client';
import { useState, useEffect, useRef } from 'react';
import { Map, Clock } from 'lucide-react';

export default function Topbar() {
    const [show, setShow] = useState(true);
    const lastScrollY = useRef(0);  // uzywamy useRef!

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                if (show !== false) setShow(false);
            } else {
                if (show !== true) setShow(true);
            }

            lastScrollY.current = currentScrollY; // update bez re-renderu
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [show]);  // tylko show jako dependency

    const topBarItems = [
        {
            icon: <Map className="w-4 h-4" />,
            text: 'ZIELONA 214 Pabianice',
        },
        {
            icon: <Clock className="w-4 h-4" />,
            text: 'Pn-Pt 9:00-17:00, Sb 9:00-13:00',
        },
    ];

    return (
        <div
            className={`hidden md:block fixed top-0 left-0 w-full  bg-secondary text-[#222222] z-50 transition-transform duration-300 ${
                show ? 'translate-y-0' : '-translate-y-full '
            }`}
        >
            <div className="flex items-center justify-between px-4 py-2 text-xs max-w-content mx-auto">
                {topBarItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
