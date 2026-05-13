
export default function Logo({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <img src="/logo.png" alt="Crystal Pools Logo" className="w-full h-full object-contain" />
    </div>
  );
}
