import React, { useState, useEffect } from 'react';
import { Home as HomeIcon, Briefcase, FolderOpen, Beaker } from 'lucide-react';

export default function Header({ activeSection, setActiveSection, setIsCardOpen }) {
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
                                <button
                                    onClick={() => setActiveSection(tab)}
                                    className={`hover:text-stone-900 transition-colors capitalize ${activeSection === tab ? 'text-stone-900 border-b-2 border-stone-800' : ''}`}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <ul className="flex md:hidden space-x-6 text-stone-600">
                        <li><button onClick={() => setActiveSection('home')} className={`p-2 rounded-full transition-colors ${activeSection === 'home' ? 'bg-stone-200 text-stone-900' : ''}`}><HomeIcon size={20} /></button></li>
                        <li><button onClick={() => setActiveSection('resume')} className={`p-2 rounded-full transition-colors ${activeSection === 'resume' ? 'bg-stone-200 text-stone-900' : ''}`}><Briefcase size={20} /></button></li>
                        <li><button onClick={() => setActiveSection('projects')} className={`p-2 rounded-full transition-colors ${activeSection === 'projects' ? 'bg-stone-200 text-stone-900' : ''}`}><FolderOpen size={20} /></button></li>
                        <li><button onClick={() => setActiveSection('lab')} className={`p-2 rounded-full transition-colors ${activeSection === 'lab' ? 'bg-stone-200 text-stone-900' : ''}`}><Beaker size={20} /></button></li>
                    </ul>

                    <button
                        className="w-10 h-10 bg-stone-200 rounded-full border border-stone-300 hover:shadow-md hover:border-stone-400 transition-all flex items-center justify-center overflow-hidden flex-shrink-0"
                        title="명함 보기"
                        onClick={() => setIsCardOpen(true)}
                    >
                        <span className="font-serif font-bold text-stone-600 text-sm">JH</span>
                    </button>
                </nav>
            </div>
        </header>
    );
}