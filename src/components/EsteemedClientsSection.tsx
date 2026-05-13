import type { FC, ElementType } from 'react';
import { 
  Building2, 
  Hotel,
  Home,
  MapPin,
  Castle,
  Tent,
  Trees,
  Warehouse,
  Landmark,
  Palmtree
} from 'lucide-react';

const topRowLogos = [
  { id: 1, Icon: Building2, name: 'Marriott' },
  { id: 2, Icon: Hotel, name: 'Hilton' },
  { id: 3, Icon: Landmark, name: 'Taj Hotels' },
  { id: 4, Icon: Home, name: 'Ritz-Carlton' },
  { id: 5, Icon: Castle, name: 'Oberoi' },
];

const bottomRowLogos = [
  { id: 6, Icon: Tent, name: 'Club Mahindra' },
  { id: 7, Icon: Trees, name: 'Four Seasons' },
  { id: 8, Icon: Warehouse, name: 'Hyatt' },
  { id: 9, Icon: MapPin, name: 'ITC Hotels' },
  { id: 10, Icon: Landmark, name: 'Leela Palaces' },
];

const LogoCard: FC<{ Icon: ElementType, name: string }> = ({ Icon, name }) => {
  return (
    <div className="flex items-center space-x-3 px-12 py-6 cursor-pointer group transition-all duration-300">
      <div className="flex items-center space-x-3 opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
        <Icon className="w-8 h-8 text-[#0a5c86] dark:text-white" />
        <span className="text-xl font-display font-bold text-slate-800 dark:text-slate-300 tracking-tight whitespace-nowrap">
          {name}
        </span>
      </div>
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
              <LogoCard key={`top-${index}`} Icon={logo.Icon} name={logo.name} />
            ))}
          </div>
        </div>

        {/* Bottom Track - Scrolls Right */}
        <div className="flex overflow-hidden">
          <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
             {[...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos].map((logo, index) => (
              <LogoCard key={`bottom-${index}`} Icon={logo.Icon} name={logo.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
