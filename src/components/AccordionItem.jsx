import React, { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function AccordionItem({ title, date, role, children, defaultOpen = false }) {
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

            <Collapsible.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div className="text-stone-700 font-sans leading-relaxed mt-4">
                    {children}
                </div>
            </Collapsible.Content>
        </Collapsible.Root>
    );
}
