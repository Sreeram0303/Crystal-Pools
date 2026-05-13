import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, User, MapPin as MapPinIcon, Building2 } from 'lucide-react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix leaflet icon paths
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom Icon for active marker
const activeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Custom Icon for default marker
const defaultIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const locationsData = [
  { id: "pune", city: "Pune (Head Office)", contactName: "Mr. Nilesh Shukla (Managing Director)", phone: "+(91) 9850997486 / (020) 24690602", address: "Sr. No. 10/1/1, Shed No. 3&4, Nr. Kailash Jeevan Factory, Dhayari, Pune 411041", lat: 18.4372, lng: 73.8052, image: "/images/locations/pune.jpg" },
  { id: "nashik", city: "Nashik", contactName: "Mr. Sarang Sukenkar", phone: "+91 98502 37502", address: "Block no 2, Ambarai Apartment, Vise mala, Canada corner, Nashik 422005", lat: 20.0075, lng: 73.7663, image: "/images/locations/nashik.jpg" },
  { id: "kolhapur", city: "Kolhapur", contactName: "Mr. Prasad Vaidya", phone: "+91 98221 16662", address: "B305, Anant Pride, Kolhapur, Maharashtra 416002", lat: 16.7050, lng: 74.2433, image: "/images/locations/kolhapur.jpg" },
  { id: "sindhudurg", city: "Sindhudurg", contactName: "Sales & Support", phone: "+91 95525 26371", address: "Sindhudurg, Maharashtra 416812", lat: 16.0543, lng: 73.5274, image: "/images/locations/sindhudurg.jpg" },
  { id: "goa", city: "Goa", contactName: "Mr. Ashis Patel", phone: "+91 93242 29688", address: "101/A4 Saldhana Kyle Gardens, near Church of Piety, Khobra Waddo, Calangute, Goa 403516", lat: 15.5447, lng: 73.7554, image: "/images/locations/goa.jpg" },
  { id: "udaipur", city: "Rajasthan (Udaipur)", contactName: "Shri Siddhi Vinayak Associates", phone: "+91 96940 99801", address: "20 Nakoda complex, Hansa Palace Lane, Hiran Magri Sec 4, Udaipur 313002", lat: 24.5712, lng: 73.7125, image: "/images/locations/udaipur.jpg" }
];

function MapController({ activeLocation }: { activeLocation: typeof locationsData[0] | undefined }) {
  const map = useMap();
  useEffect(() => {
    if (activeLocation) {
      map.flyTo([activeLocation.lat, activeLocation.lng], 12, {
        animate: true,
        duration: 1.5
      });
    } else {
      // Zoom out to show all of Western/Central India where the pins are
      map.flyTo([20.0, 74.0], 5, {
        animate: true,
        duration: 1.5
      });
    }
  }, [activeLocation, map]);
  return null;
}

export default function ContactMap() {
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const activeLocation = locationsData.find(loc => loc.id === activeLocationId);

  const handlePinClick = (id: string) => {
    if (activeLocationId === id) return;
    
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        setActiveLocationId(id);
      }, 300);
    } else {
      setActiveLocationId(id);
    }
  };

  return (
    <div className="w-full relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0a5c86] dark:text-white mb-4">Our Presence Across India</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Find an expert near you. Click on the map markers to view details for our operational branches and get in touch with local representatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-[350px] lg:h-[380px] bg-slate-100 dark:bg-[#0a121a] rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center justify-center overflow-hidden z-0 p-2 lg:max-w-[100%]"
          >
            <MapContainer 
              center={[20.0, 74.0]} 
              zoom={5} 
              minZoom={4}
              maxBounds={[
                [6.0, 68.0],
                [36.0, 98.0]
              ]}
              maxBoundsViscosity={1.0}
              style={{ height: '100%', width: '100%', borderRadius: '1.25rem', zIndex: 1 }}
              className="w-full h-full relative"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <MapController activeLocation={activeLocation} />
              {locationsData.map((loc) => (
                <Marker 
                  key={loc.id} 
                  position={[loc.lat, loc.lng]}
                  icon={activeLocationId === loc.id ? activeIcon : defaultIcon}
                  eventHandlers={{
                    click: () => handlePinClick(loc.id),
                  }}
                />
              ))}
            </MapContainer>
            
            {activeLocationId && (
              <button 
                onClick={() => {
                  setIsFlipped(false);
                  setActiveLocationId(null);
                }}
                className="absolute shrink-0 z-10 bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-5 py-2.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] font-medium text-sm hover:scale-105 transition-transform flex items-center border border-slate-200 dark:border-slate-700"
              >
                <MapPinIcon size={16} className="mr-2" />
                Zoom Out to India
              </button>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-[350px] lg:h-[380px] perspective-1000"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className={`w-full h-full relative ${activeLocationId ? 'cursor-pointer' : ''}`}
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              onClick={() => activeLocationId && setIsFlipped(!isFlipped)}
            >
              
              {/* Front Face */}
              <div 
                className={`absolute inset-0 w-full h-full rounded-3xl p-8 flex flex-col justify-center items-center text-center border border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] overflow-hidden ${activeLocation ? 'text-white border-white/20' : 'bg-white dark:bg-[#08121d]'}`}
                style={{ backfaceVisibility: "hidden" }}
              >
                {activeLocation && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url('${activeLocation.image}')` }}
                  >
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/20" />
                  </div>
                )}
                <div className="relative z-10 w-full h-full flex flex-col justify-center">
                  {!activeLocation ? (
                    <>
                      <div className="w-16 h-16 mx-auto bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-6 text-slate-400 dark:text-slate-500">
                        <MapPinIcon size={28} />
                      </div>
                      <h3 className="text-2xl font-serif text-slate-900 dark:text-white mb-3">Select Location</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
                        Click on a map marker to view branch details and contact information.
                      </p>
                    </>
                  ) : (
                    <div className="flex flex-col items-center h-full pt-8">
                      <h3 className="text-3xl font-serif text-white mb-2 drop-shadow-md">
                        {activeLocation.city}
                      </h3>
                      <p className="text-cyan-300 font-medium text-sm tracking-wide uppercase mb-8 drop-shadow">
                        {activeLocation.contactName}
                      </p>
                      
                      <div className="mt-auto text-xs text-white/80 uppercase tracking-[0.2em] flex items-center gap-2 group backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full">
                        <span>Tap to reveal details</span>
                        <motion.div 
                          animate={{ x: [0, 5, 0] }} 
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                          →
                        </motion.div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Back Face - Full Address Details */}
              <div 
                className="absolute inset-0 w-full h-full rounded-3xl bg-linear-to-br from-[#e0faff] to-[#bae6fd] dark:from-[#082f49] dark:to-[#0c4a6e] border border-sky-200 dark:border-sky-800 shadow-[0_8px_30px_rgba(14,165,233,0.15)] dark:shadow-[0_8px_30px_rgba(14,165,233,0.25)] p-8 flex flex-col relative overflow-hidden"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                {/* Decorative water ripple effect behind text */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-cyan-400/10 dark:bg-cyan-400/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-48 h-48 bg-sky-400/10 dark:bg-sky-400/5 rounded-full blur-2xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8">
                    <h3 className="text-2xl font-serif text-[#082f49] dark:text-sky-50 mb-1">
                      {activeLocation?.city}
                    </h3>
                    <p className="text-sm text-sky-700 dark:text-sky-300">Branch Office</p>
                  </div>

                  <div className="space-y-6 flex-grow">
                    <div className="flex items-start gap-4">
                      <Phone size={18} className="text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-sky-600/70 dark:text-sky-400/70 uppercase tracking-wider mb-1">Phone</p>
                        <p className="text-[#0c4a6e] dark:text-sky-100 text-sm leading-relaxed">{activeLocation?.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPinIcon size={18} className="text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-sky-600/70 dark:text-sky-400/70 uppercase tracking-wider mb-1">Address</p>
                        <p className="text-[#0c4a6e] dark:text-sky-100 text-sm leading-relaxed">{activeLocation?.address}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-sky-200/50 dark:border-sky-800/50 text-center">
                    <span className="text-xs text-sky-700 dark:text-sky-400 uppercase tracking-[0.2em] flex justify-center items-center gap-2">
                       <motion.div 
                          animate={{ x: [0, -5, 0] }} 
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                          ←
                        </motion.div>
                      <span>Return</span>
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
