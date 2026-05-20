import React from 'react';
import { Link as LinkIcon, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { userConfig } from '../config';

export default function Links() {
    const { email: userEmail, githubUrl } = userConfig;

    return (
        <section id="links" className="py-20">
            <h2 className="text-3xl font-serif font-bold text-stone-800 border-b border-stone-400 pb-2 mb-8 flex items-center gap-2">
                <LinkIcon size={28} />
                Links & Contact
            </h2>
            
            <div className="space-y-6 font-sans text-lg mt-8 ml-2">
                <a href={`mailto:${userEmail}`} className="flex items-center gap-4 text-stone-700 hover:text-stone-900 group transition-all w-fit">
                    <span className="p-3 bg-stone-200 rounded-full group-hover:bg-stone-300 transition-colors"><Mail size={24} /></span>
                    <span className="border-b border-transparent group-hover:border-stone-900 transition-colors">{userEmail}</span>
                </a>
                <a href={`https://${githubUrl}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-stone-700 hover:text-stone-900 group transition-all w-fit">
                    <span className="p-3 bg-stone-200 rounded-full group-hover:bg-stone-300 transition-colors"><GithubIcon size={24} /></span>
                    <span className="border-b border-transparent group-hover:border-stone-900 transition-colors">{githubUrl}</span>
                </a>
                {/* 아직 안 씀.. 차후 수정
                <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-stone-700 hover:text-stone-900 group transition-all w-fit">
                    <span className="p-3 bg-stone-200 rounded-full group-hover:bg-stone-300 transition-colors"><LinkedinIcon size={24} /></span>
                    <span className="border-b border-transparent group-hover:border-stone-900 transition-colors">linkedin.com/in/username</span>
                </a>
                */}
            </div>
        </section>
    );
}