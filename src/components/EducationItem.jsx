import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function EducationItem({ school, url, degree, date }) {
    return (
        <div className="mb-6 border-b border-stone-300 pb-4 last:border-b-0">
            <div className="flex justify-between items-start gap-4">
                <div className="flex-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 text-xl font-serif font-bold text-stone-800 hover:text-stone-600 hover:underline underline-offset-4 decoration-stone-400 transition-colors"
                    >
                        {school}
                        <ExternalLink size={14} className="text-stone-400 group-hover:text-stone-600 transition-colors" />
                    </a>
                    {degree && <span className="text-md text-stone-600 font-serif italic">{degree}</span>}
                </div>
                {date && <span className="text-sm text-stone-500 font-sans hidden sm:block whitespace-nowrap pt-1">{date}</span>}
            </div>
            {date && <span className="text-sm text-stone-500 font-sans block sm:hidden mt-2">{date}</span>}
        </div>
    );
}
