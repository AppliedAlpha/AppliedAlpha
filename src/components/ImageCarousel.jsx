import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="relative w-full h-64 sm:h-72 bg-[#f5f2eb] rounded-md border border-stone-200 mt-4 overflow-hidden group select-none">
            <div
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, idx) => (
                    <div key={idx} className="min-w-full h-full flex flex-col items-center justify-center text-stone-500 italic bg-stone-300">
                        {img.src ? <img src={img.src} alt={img.alt} className="w-full h-full object-contain" /> : <span>{img.alt}</span>}
                    </div>
                ))}
            </div>

            {images.length > 1 && (
                <>
                    <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/70 hover:bg-white text-stone-700 rounded-full shadow-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"><ChevronLeft size={20} /></button>
                    <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/70 hover:bg-white text-stone-700 rounded-full shadow-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"><ChevronRight size={20} /></button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                        {images.map((_, idx) => (
                            <div key={idx} className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-4 bg-stone-700' : 'w-2 bg-stone-300'}`} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}