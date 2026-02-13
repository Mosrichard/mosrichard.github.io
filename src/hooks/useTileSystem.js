import { useEffect } from 'react';

export const useTileSystem = () => {
  useEffect(() => {
    // Create blinking stars
    const createParticles = () => {
      const container = document.createElement('div');
      container.id = 'particles';
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        particle.style.animationDuration = `${2 + Math.random() * 2}s`;
        container.appendChild(particle);
      }
      document.body.appendChild(container);
      return container;
    };

    const particles = createParticles();

    // Create single hover tile
    const createHoverTile = () => {
      const tile = document.createElement('div');
      tile.className = 'hover-tile';
      tile.style.position = 'fixed';
      tile.style.width = '60px';
      tile.style.height = '60px';
      tile.style.background = 'rgba(255,255,255,0.15)';
      tile.style.border = '2px solid rgba(255,255,255,0.3)';
      tile.style.pointerEvents = 'none';
      tile.style.zIndex = '1000';
      tile.style.opacity = '0';
      tile.style.transition = 'all 0.15s ease';
      tile.style.boxShadow = '0 0 25px rgba(255,255,255,0.6), inset 0 0 15px rgba(255,255,255,0.2)';
      document.body.appendChild(tile);
      return tile;
    };

    const hoverTile = createHoverTile();

    // Mouse move handler
    const handleMouseMove = (e) => {
      // Check if hovering over content area
      const contentArea = document.querySelector('.main-content');
      if (contentArea) {
        const rect = contentArea.getBoundingClientRect();
        if (e.clientX >= rect.left && e.clientX <= rect.right && 
            e.clientY >= rect.top && e.clientY <= rect.bottom) {
          hoverTile.style.opacity = '0';
          return;
        }
      }
      
      const x = Math.floor(e.clientX / 60) * 60;
      const y = Math.floor(e.clientY / 60) * 60;
      
      hoverTile.style.left = `${x}px`;
      hoverTile.style.top = `${y}px`;
      hoverTile.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      hoverTile.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (hoverTile) {
        hoverTile.remove();
      }
      if (particles) {
        particles.remove();
      }
    };
  }, []);
};