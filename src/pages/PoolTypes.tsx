import PoolBentoSection from '../components/PoolBentoSection';
import { usePageMeta } from '../hooks/usePageMeta';

export default function PoolTypes() {
  usePageMeta(
    'Swimming Pool Types',
    'Explore our full range of swimming pool designs — private, commercial, competition, vanishing edge, overflow, skimmer, and readymade FRP pools.',
  );
  return (
    <div className="w-full">
      <PoolBentoSection />
    </div>
  );
}


