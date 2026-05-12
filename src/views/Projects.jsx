import React from 'react';
import { FolderOpen } from 'lucide-react';
import AccordionItem from '../components/AccordionItem';
import ImageCarousel from '../components/ImageCarousel';
import { portfolioData } from '../data/data';

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-3xl font-serif font-bold text-stone-800 border-b border-stone-400 pb-2 mb-8 flex items-center gap-2">
                <FolderOpen size={28} />
                Projects
            </h2>

            {portfolioData.projects.map((item, idx) => (
                <AccordionItem key={item.id} title={item.title} date={item.period} defaultOpen={idx === 0}>
                    <div className="space-y-4">
                        <p className="font-semibold text-stone-800">{item.summary}</p>
                        <p>{item.description}</p>
                        <ImageCarousel images={item.images} />
                        <div className="flex flex-wrap gap-2 pt-2">
                            {item.stack.map(tech => (
                                <span key={tech} className="px-3 py-1 bg-stone-200 text-stone-700 text-xs rounded-full font-mono">{tech}</span>
                            ))}
                        </div>
                    </div>
                </AccordionItem>
            ))}
        </section>
    );
}