import React from 'react';
import { Beaker } from 'lucide-react';
import AccordionItem from '../components/AccordionItem';
import ImageCarousel from '../components/ImageCarousel';
import { portfolioData } from '../data/data';

export default function Lab() {
    return (
        <section id="lab" className="py-20">
            <h2 className="text-3xl font-serif font-bold text-stone-800 border-b border-stone-400 pb-2 mb-8 flex items-center gap-2">
                <Beaker size={28} />
                LAB (Toy Projects)
            </h2>

            {portfolioData.lab.map((item, idx) => (
                <AccordionItem key={item.id} title={item.title} date={item.period} summary={item.summary} links={item.links} defaultOpen={idx === 0}>
                    <div className="space-y-4">
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