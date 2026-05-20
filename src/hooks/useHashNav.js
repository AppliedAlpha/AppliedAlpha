import { useState, useEffect } from 'react';

const SECTIONS = ['home', 'resume', 'projects', 'lab', 'links'];

function getCurrentSection() {
    const hash = window.location.hash.slice(1);
    return SECTIONS.includes(hash) ? hash : 'home';
}

export function useHashNav() {
    const [section, setSection] = useState(getCurrentSection);

    useEffect(() => {
        const onHashChange = () => setSection(getCurrentSection());
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    return section;
}
