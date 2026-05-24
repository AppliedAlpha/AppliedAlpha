import React from 'react';
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';
import AccordionItem from '../components/AccordionItem';
import EducationItem from '../components/EducationItem';
import AwardItem from '../components/AwardItem';
import { portfolioData } from '../data/data';

export default function Resume() {
    const { experience, education, awards } = portfolioData;
    const resumePDF = "/test.txt"

    return (
        <section id="resume" className="py-20">
            <div className="flex justify-between items-end border-b border-stone-400 pb-2 mb-8">
                <h2 className="text-3xl font-serif font-bold text-stone-800 flex items-center gap-2">
                    <Briefcase size={28} />
                    Experience
                </h2>
                <a href={resumePDF} download className="flex items-center gap-1.5 text-sm font-sans text-stone-600 hover:text-stone-900 bg-stone-200/50 hover:bg-stone-200 px-3 py-1.5 rounded-sm transition-colors" title="이력서 PDF">
                    <Download size={16} />
                    <span className="hidden sm:inline">이력서 PDF</span>
                </a>
            </div>
            <div className="mb-12">
                {experience.map((exp, idx) => (
                    <AccordionItem key={exp.id} title={exp.company} role={exp.role} date={exp.period} defaultOpen={idx === 0}>
                        <ul className="list-disc list-inside space-y-2 ml-2">
                            {exp.details.map((detail, i) => <li key={i}>{detail}</li>)}
                        </ul>
                    </AccordionItem>
                ))}
            </div>

            <h2 className="text-3xl font-serif font-bold text-stone-800 border-b border-stone-400 pb-2 mb-8 mt-12 flex items-center gap-2">
                <GraduationCap size={28} />
                Education
            </h2>
            <div className="mb-12">
                {education.map((edu) => (
                    <EducationItem
                        key={edu.id}
                        school={edu.school}
                        url={edu.url}
                        degree={edu.degree}
                        date={edu.period}
                    />
                ))}
            </div>

            <h2 className="text-3xl font-serif font-bold text-stone-800 border-b border-stone-400 pb-2 mb-8 mt-12 flex items-center gap-2">
                <Award size={28} />
                Awards
            </h2>
            <div className="mb-12">
                {awards.map((award) => (
                    <AwardItem
                        key={award.id}
                        competition={award.competition}
                        prize={award.prize}
                        date={award.date}
                    />
                ))}
            </div>
        </section>
    );
}