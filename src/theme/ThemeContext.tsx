import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemePalette, POWDER_BLUE_PALETTE, AVAILABLE_THEMES } from './themeConfig';

export type ThemeId =
  | 'powder-blue' | 'sage-cream' | 'peach-terracotta'
  | 'aqua-navy' | 'mint-navy' | 'champagne-brown'
  | 'soft-teal' | 'ice-blue-coral' | 'pistachio-green' | 'baby-blue-rose'
  | 'cream-terracotta' | 'cyan-purple' | 'buttercream-sage' | 'sky-slate'
  | 'soft-sage' | 'light-blue' | 'powder-blue-beige'
  | 'mint-fresh' | 'sage-cream-2' | 'olive-mist' | 'seafoam' | 'pistachio'
  | 'sky-blue' | 'baby-blue' | 'ice-blue' | 'blue-grey' | 'ocean-mist'
  | 'warm-minimal';

interface ThemeContextType {
  theme: ThemePalette;
  themeId: ThemeId;
  isOriginal: boolean;
  cycleNextTheme: () => void;
  revertToOriginal: () => void;
  setThemeById: (id: ThemeId) => void;
  availableThemes: ThemePalette[];
}

const ThemeContext = createContext<ThemeContextType>({
  theme: POWDER_BLUE_PALETTE,
  themeId: 'powder-blue',
  isOriginal: true,
  cycleNextTheme: () => {},
  revertToOriginal: () => {},
  setThemeById: () => {},
  availableThemes: AVAILABLE_THEMES,
});

const ALL_IDS: ThemeId[] = [
  'powder-blue', 'sage-cream', 'peach-terracotta',
  'aqua-navy', 'mint-navy', 'champagne-brown',
  'soft-teal', 'ice-blue-coral', 'pistachio-green', 'baby-blue-rose',
  'cream-terracotta', 'cyan-purple', 'buttercream-sage', 'sky-slate',
  'soft-sage', 'light-blue', 'powder-blue-beige',
  'mint-fresh', 'sage-cream-2', 'olive-mist', 'seafoam', 'pistachio',
  'sky-blue', 'baby-blue', 'ice-blue', 'blue-grey', 'ocean-mist',
  'warm-minimal',
];

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentId, setCurrentId] = useState<ThemeId>('buttercream-sage');

  useEffect(() => {
    const root = document.documentElement;
    ALL_IDS.forEach((id) => root.classList.remove(`theme-${id}`));
    root.classList.add(`theme-${currentId}`);

    const t = AVAILABLE_THEMES.find((p) => p.id === currentId) || POWDER_BLUE_PALETTE;
    root.style.setProperty('--bg-main', t.bgMain);
    root.style.setProperty('--bg-card', t.bgCard);
    root.style.setProperty('--chip-bg', t.chipBg);
    root.style.setProperty('--border-main', t.borderMain);
    root.style.setProperty('--border-subtle', t.borderSubtle);
    root.style.setProperty('--primary-accent', t.primaryAccent);
    root.style.setProperty('--primary-hover', t.primaryHover);
    root.style.setProperty('--primary-text', t.primaryText);
    root.style.setProperty('--text-main', t.textMain);
    root.style.setProperty('--text-body', t.textBody);
    root.style.setProperty('--text-muted', t.textMuted);
    root.style.setProperty('--pill-bg', t.pillBg);
    root.style.setProperty('--pill-border', t.pillBorder);
    root.style.setProperty('--pill-text', t.pillText);
    root.style.setProperty('--chip-border', t.chipBorder);
    root.style.setProperty('--icon-box-bg', t.iconBoxBg);
    root.style.setProperty('--gold-accent', t.goldAccent);
    root.style.setProperty('--gold-hover', t.goldHover || t.goldAccent);
    document.body.style.backgroundColor = t.bgMain;
    document.body.style.color = t.textMain;
  }, [currentId]);

  const cycleNextTheme = () => {
    const nextIndex = (ALL_IDS.indexOf(currentId) + 1) % ALL_IDS.length;
    setCurrentId(ALL_IDS[nextIndex]);
  };

  const revertToOriginal = () => setCurrentId('buttercream-sage');
  const setThemeById = (id: ThemeId) => setCurrentId(id);
  const currentTheme = AVAILABLE_THEMES.find((t) => t.id === currentId) || POWDER_BLUE_PALETTE;

  return (
    <ThemeContext.Provider value={{
      theme: currentTheme, themeId: currentId,
      isOriginal: currentId === 'buttercream-sage',
      cycleNextTheme, revertToOriginal, setThemeById,
      availableThemes: AVAILABLE_THEMES,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
