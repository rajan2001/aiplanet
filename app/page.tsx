import { HomeFeature } from '@/components/home-feature';
import { HomeHero } from '@/components/home-hero';
import { HomeSearch } from '@/components/home-search';
import { HomeSection } from '@/components/home-section';

export default function Page() {
  return (
    <>
      <HomeHero />
      <HomeSection />
      <HomeSearch />
    </>
  );
}
