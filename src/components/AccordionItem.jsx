import React, { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown, ChevronUp, BookOpen, Globe } from 'lucide-react';
import { GithubIcon, YoutubeIcon, SteamIcon } from './Icons';

const LINK_TYPES = {
    github:  { Icon: GithubIcon,  label: 'GitHub',  className: 'bg-stone-700 hover:bg-stone-600 text-white' },
    blog:    { Icon: BookOpen,    label: 'Blog',    className: 'bg-orange-200 hover:bg-orange-300 text-stone-800' },
    site:    { Icon: Globe,       label: 'Site',    className: 'bg-green-200 hover:bg-green-300 text-green-900' },
    youtube: { Icon: YoutubeIcon, label: 'YouTube', className: 'bg-red-600 hover:bg-red-700 text-white' },
    steam:   { Icon: SteamIcon,   label: 'Steam',   className: 'bg-[#1b2838] hover:bg-[#2a475e] text-white' },
};

export default function AccordionItem({ title, date, role, links, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <Collapsible.Root
            open={isOpen}
            onOpenChange={setIsOpen}
            className="mb-6 border-b border-stone-300 pb-4 last:border-b-0"
        >
            <Collapsible.Trigger className="w-full flex justify-between items-start text-left focus:outline-none group">
                <div className="flex-1 pr-4">
                    <h3 className="text-xl font-serif font-bold text-stone-800 group-hover:text-stone-600 transition-colors">{title}</h3>
                    {role && <p className="text-md text-stone-600 font-serif italic mt-1">{role}</p>}
                </div>
                <div className="flex items-center space-x-4">
                    {date && <span className="text-sm text-stone-500 font-sans hidden sm:block whitespace-nowrap">{date}</span>}
                    <div className="text-stone-400 group-hover:text-stone-600 transition-colors mt-1">
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                </div>
            </Collapsible.Trigger>

            {date && <span className="text-sm text-stone-500 font-sans block sm:hidden mt-2">{date}</span>}

            {links && links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                    {links.map(({ type, url }) => {
                        const meta = LINK_TYPES[type];
                        if (!meta) return null;
                        const { Icon, label, className } = meta;
                        return (
                            <a
                                key={type}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-sans rounded-md transition-colors ${className}`}
                                title={label}
                            >
                                <Icon size={14} />
                                <span>{label}</span>
                            </a>
                        );
                    })}
                </div>
            )}

            <Collapsible.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div className="text-stone-700 font-sans leading-relaxed mt-4">
                    {children}
                </div>
            </Collapsible.Content>
        </Collapsible.Root>
    );
}
