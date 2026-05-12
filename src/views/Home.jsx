import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export default function Home() {
    const userName = import.meta.env.VITE_USER_NAME;
    const userRole = import.meta.env.VITE_USER_ROLE;
    const userEmail = import.meta.env.VITE_USER_EMAIL;
    const userPhone = import.meta.env.VITE_USER_PHONE;

    const githubUrl = import.meta.env.VITE_GITHUB_URL;

    return (
        <section id="home" className="py-20">
            <div className="text-center mb-16 border-b-2 border-stone-800 pb-12">
                <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-stone-900 tracking-tight mb-4 uppercase">
                    {userName}
                </h1>
                <p className="text-xl md:text-2xl text-stone-600 font-serif italic">
                    {userRole}
                </p>
                <div className="mt-8 flex justify-center space-x-6 text-stone-600">
                    <a href={`mailto:${userEmail}`} className="hover:text-stone-900 transition-colors flex items-center gap-2">
                        <Mail size={18} /> <span className="hidden sm:inline">{userEmail}</span>
                    </a>
                    <a href={`https://${githubUrl}`} target="_blank" rel="noreferrer" className="hover:text-stone-900 transition-colors flex items-center gap-2">
                        <GithubIcon size={18} /> <span className="hidden sm:inline">{githubUrl}</span>
                    </a>
                </div>
            </div>

            <div className="prose prose-stone max-w-none font-serif text-lg text-stone-700 leading-loose">
                <p>
                    Lorem ipsum. 개발자입니다. 학석사연계과정입니다. 포트폴리오를 만들어보고 있습니다. 
                    줄 넘김을 확인하고 있습니다. 
                    이래저래 보완이 필요합니다. 
                    잘 부탁드립니다. 
                </p>
            </div>
        </section>
    );
}