import React from 'react';

export default function AwardItem({ competition, prize, date }) {
    return (
        <div className="mb-6 border-b border-stone-300 pb-4 last:border-b-0">
            <div className="flex justify-between items-start gap-4">
                <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-serif font-bold text-stone-800">{competition}</h3>
                    {prize && <p className="text-md text-stone-600 font-serif italic mt-1">{prize}</p>}
                </div>
                {date && <span className="text-sm text-stone-500 font-sans hidden sm:block whitespace-nowrap pt-1">{date}</span>}
            </div>
            {date && <span className="text-sm text-stone-500 font-sans block sm:hidden mt-2">{date}</span>}
        </div>
    );
}
