import React, { useState } from 'react';
import { useHashNav } from './hooks/useHashNav';

import Header from './components/Header';
import BusinessCard from './components/BusinessCard';

import Home from './views/Home';
import Resume from './views/Resume';
import Projects from './views/Projects';
import Lab from './views/Lab';
import Links from './views/Links';

export default function App() {
    const activeSection = useHashNav();
    const [isCardOpen, setIsCardOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#fafaf8] text-stone-800 font-sans selection:bg-stone-300 selection:text-stone-900">

            <Header setIsCardOpen={setIsCardOpen} />

            <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-[#fdfcf8] shadow-[0_0_15px_rgba(0,0,0,0.03)] border border-stone-200 rounded-sm p-8 sm:p-12 lg:p-16 min-h-[80vh]">
                    {activeSection === 'home' && <Home />}
                    {activeSection === 'resume' && <Resume />}
                    {activeSection === 'projects' && <Projects />}
                    {activeSection === 'lab' && <Lab />}
                    {activeSection === 'links' && <Links />}
                </div>
            </main>

            <BusinessCard
                isOpen={isCardOpen}
                onClose={() => setIsCardOpen(false)}
            />
        </div>
    );
}
