import React, { useState, useEffect } from 'react';
import { Home as HomeIcon, Briefcase, FolderOpen, Beaker, Link as LinkIcon } from 'lucide-react';
import { useHashNav } from '../hooks/useHashNav';

const MOBILE_ICONS = [
    { path: 'home',     icon: <HomeIcon size={20} /> },
    { path: 'resume',   icon: <Briefcase size={20} /> },
    { path: 'projects', icon: <FolderOpen size={20} /> },
    { path: 'lab',      icon: <Beaker size={20} /> },
    { path: 'links',    icon: <LinkIcon size={20} /> },
];

export default function Header({ setIsCardOpen }) {
    const activeSection = useHashNav();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#fafaf8]/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <nav className="flex justify-between items-center relative">

                    <ul className="hidden md:flex space-x-8 font-serif font-semibold tracking-wide text-stone-600">
                        {['home', 'resume', 'projects', 'lab', 'links'].map((tab) => (
                            <li key={tab}>
                                <a
                                    href={`#${tab}`}
                                    className={`hover:text-stone-900 transition-colors capitalize ${activeSection === tab ? 'text-stone-900 border-b-2 border-stone-800' : ''}`}
                                >
                                    {tab}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <ul className="flex md:hidden space-x-6 text-stone-600">
                        {MOBILE_ICONS.map(({ path, icon }) => (
                            <li key={path}>
                                <a
                                    href={`#${path}`}
                                    className={`p-2 rounded-full transition-colors flex items-center justify-center ${activeSection === path ? 'bg-stone-200 text-stone-900' : ''}`}
                                >
                                    {icon}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="w-10 h-10 bg-stone-200 rounded-full border border-stone-300 hover:shadow-md hover:border-stone-400 transition-all flex items-center justify-center overflow-hidden flex-shrink-0"
                        title="명함"
                        onClick={() => setIsCardOpen(true)}
                    >
                        <img src="/hoon.jpg" alt="명함" className="w-full h-full object-cover" />
                    </button>

                </nav>
            </div>
        </header>
    );
}
