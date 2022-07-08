import React from 'react';
import { 
  LandingHeroContainer, 
  LandingTrendingContainer,
  LandingTopCollectionsContainer,
  LandingAboutContainer, 
  LandingTeamContainer, 
  LandingRoadmapContainer, 
  LandingWhitepaperContainer
} from '../../containers';

const Landing = () => {
  return (
    <main className="bg-hl-primary-dark">
      <section id="hero-section">
        <LandingHeroContainer/>
      </section>
      <section id="trending-section">
        <LandingTrendingContainer/>
      </section>
      <section id="top-collections-section">
        <LandingTopCollectionsContainer />
      </section>
      <section id="about-section">
        <LandingAboutContainer/>
      </section>
      <section id="team-section">
        <LandingTeamContainer/>
      </section>
      <section id="roadmap-section">
        <LandingRoadmapContainer />
      </section>
      <section id="whitepaper-section">
        <LandingWhitepaperContainer />
      </section>
    </main>
  )
}

export default Landing;