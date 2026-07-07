import type { FC } from 'react';
import { IMAGES } from '../config/images';

const topRowLogos = [
  { id: 1, src: IMAGES.clients.gera, name: 'Gera' },
  { id: 2, src: IMAGES.clients.anantiEstate, name: 'Ananti Estate Developer & Builder' },
  { id: 3, src: IMAGES.clients.amanoraParkTown, name: 'Amanora Park Town' },
  { id: 4, src: IMAGES.clients.prajayEngineerSyndicate, name: 'Prajay Engineer Syndicate' },
  { id: 5, src: IMAGES.clients.leverageGreens, name: 'Leverage Greens' },
  { id: 6, src: IMAGES.clients.sanskritiSchoolPune, name: 'Sanskriti School Pune' },
  { id: 7, src: IMAGES.clients.csbSankalp, name: 'CSB Sankalp Builders & Developers' },
  { id: 8, src: IMAGES.clients.reliance, name: 'Reliance' },
  { id: 9, src: IMAGES.clients.prabhaveeGroup, name: 'Prabhavee Group' },
  { id: 10, src: IMAGES.clients.paranjapeSchemes, name: 'Paranjape Schemes' },
  { id: 11, src: IMAGES.clients.paramountBuilders, name: 'Paramount Builders & Developers' },
];

const bottomRowLogos = [
  { id: 12, src: IMAGES.clients.oceanParkResort, name: 'The Ocean Park Resort' },
  { id: 13, src: IMAGES.clients.namrataOmkar, name: 'Namrata Construction / Omkar Group' },
  { id: 14, src: IMAGES.clients.matrixConstruction, name: 'Matrix Construction' },
  { id: 15, src: IMAGES.clients.hornbillResort, name: 'Hornbill Deluxe Hill Resort' },
  { id: 16, src: IMAGES.clients.utsavHomes, name: 'Utsav Homes' },
  { id: 17, src: IMAGES.clients.kRahejaCorp, name: 'K Raheja Corp' },
  { id: 18, src: IMAGES.clients.renukaDevelopers, name: 'Renuka Developers' },
  { id: 19, src: IMAGES.clients.dorleGroup, name: 'Dorle Group' },
  { id: 20, src: IMAGES.clients.karandiValley, name: 'Karandi Valley' },
  { id: 21, src: IMAGES.clients.samudraSairCottage, name: 'Samudra Sair Cottage' },
  { id: 22, src: IMAGES.clients.sanjayGhodawatGroup, name: 'Sanjay Ghodawat Group' },
];

const LogoCard: FC<{ src: string, name: string }> = ({ src, name }) => {
  return (
    <div className="flex items-center px-10 py-6 cursor-pointer group transition-all duration-300">
      <img
        src={src}
        alt={name}
        title={name}
        className="h-20 w-auto max-w-[220px] object-contain transition-all duration-500 group-hover:scale-110"
      />
    </div>
  );
};

export default function EsteemedClientsSection() {
  return (
    <section className="py-24 bg-[#f8fafc] dark:bg-[#060F1A] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-sm font-bold text-[#f9c80e] uppercase tracking-[0.3em] mb-4">Trusted Worldwide</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-[#0a5c86] dark:text-white font-display">Our Esteemed Clients</h3>
      </div>

      <div 
        className="w-full relative flex flex-col space-y-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        {/* Top Track - Scrolls Left */}
        <div className="flex overflow-hidden">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...topRowLogos, ...topRowLogos, ...topRowLogos, ...topRowLogos].map((logo, index) => (
              <LogoCard key={`top-${index}`} src={logo.src} name={logo.name} />
            ))}
          </div>
        </div>

        {/* Bottom Track - Scrolls Right */}
        <div className="flex overflow-hidden">
          <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
             {[...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos].map((logo, index) => (
              <LogoCard key={`bottom-${index}`} src={logo.src} name={logo.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
