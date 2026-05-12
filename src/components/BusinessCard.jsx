import React, { useState } from 'react';
import { X, Mail, Check } from 'lucide-react';

export default function BusinessCard({ isOpen, onClose }) {
    const [copiedField, setCopiedField] = useState(null);
    const userName = import.meta.env.VITE_USER_NAME;
    const userRole = import.meta.env.VITE_USER_ROLE;
    const userEmail = import.meta.env.VITE_USER_EMAIL;
    const userPhone = import.meta.env.VITE_USER_PHONE;

    if (!isOpen) return null;

    const handleCopy = (text, field) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            setCopiedField(field);
            setTimeout(() => setCopiedField(null), 2000);
        } catch (err) {
            console.error('Copy Failure:', err);
        }
        document.body.removeChild(textArea);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/30 backdrop-blur-sm" onClick={onClose}>
            <div className="relative w-full max-w-md aspect-[1.8/1] bg-[#fdfcf8] shadow-2xl rounded-sm border border-stone-300 p-8 flex flex-col justify-between">
                <button onClick={onClose} className="absolute top-4 right-4"><X size={20} /></button>

                <div className="border-l-4 border-stone-800 pl-4 mt-2">
                    <h3 className="text-2xl font-serif font-bold text-stone-900 tracking-wider">{userName}</h3>
                    <p className="text-stone-500 font-serif italic mt-1 text-sm">{userRole}</p>
                </div>

                <div className="space-y-1 font-sans">
                    <button onClick={() => handleCopy(userEmail, 'email')} className="w-full flex items-center justify-between text-left p-2 -ml-2 rounded-md hover:bg-stone-200/50 transition-colors group">
                        <div className="flex items-center gap-3 text-sm text-stone-600 group-hover:text-stone-900 font-medium">
                            <Mail size={16} />
                            <span>{userEmail}</span>
                        </div>
                        {copiedField === 'email' ? <span className="...">Copied</span> : <span className="...">클릭하여 복사</span>}
                    </button>

                    <button onClick={() => handleCopy(userPhone, 'phone')} className="w-full flex items-center justify-between text-left p-2 -ml-2 rounded-md hover:bg-stone-200/50 transition-colors group">
                        <div className="flex items-center gap-3 text-sm text-stone-600 group-hover:text-stone-900 font-medium">
                            <span className="font-bold text-stone-500 w-[16px] text-center shrink-0">P.</span>
                            <span>{userPhone}</span>
                        </div>
                        {copiedField === 'phone' ? <span className="...">Copied</span> : <span className="...">클릭하여 복사</span>}
                    </button>
                </div>
            </div>
        </div>
    );
}