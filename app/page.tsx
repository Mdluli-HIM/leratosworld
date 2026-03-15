import { HomeHero } from '../components/home/home-hero';
import { HomeLookbook } from '../components/home/home-lookbook';
import { HomeProjectGrid } from '../components/home/home-project-grid';

export default function HomePage() {
  return (
    <div className="visual-home">
      <HomeHero />
      <HomeLookbook />
      <HomeProjectGrid />
    </div>
  );
}
