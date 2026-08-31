import React, { useState } from 'react';
import { Scene3D } from './components/3d/Scene3D';
import { Navbar } from './components/ui/Navbar';
import { Preloader } from './components/ui/Preloader';
import { CustomCursor } from './components/ui/CustomCursor';
import { CommandPalette } from './components/ui/CommandPalette';
import { ProjectModal } from './components/ui/ProjectModal';
import { Footer } from './components/ui/Footer';

import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { GithubSection } from './components/sections/GithubSection';
import { ContactSection } from './components/sections/ContactSection';

import { projectsList } from './data/resumeData';
import { Project } from './types/portfolio';
import { sounds } from './utils/sound';

export function App() {
  const [loading, setLoading] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.enabled = next;
  };

  const handleSelectProjectById = (projectId: string) => {
    const found = projectsList.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF9FC] text-[#181424] selection:bg-[#F472B6] selection:text-white">
      {/* Quantum Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Global 3D Three.js / React Three Fiber Background */}
      <Scene3D />

      {/* Subtle Background Grid & Noise Texture */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none z-[1]" />

      {/* Floating Glassmorphic Navbar */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Spotlight Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectProject={handleSelectProjectById}
      />

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Main Sections Stream */}
      <main className="relative z-10">
        <HeroSection onOpenProjects={() => handleSelectProjectById('aegis-ai')} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <ExperienceSection />
        <CertificationsSection />
        <GithubSection />
        <ContactSection />
      </main>

      {/* Futuristic Status Footer */}
      <Footer />
    </div>
  );
}

export default App;
