export interface ThemePalette {
  id: 'powder-blue' | 'sage-cream' | 'peach-terracotta'
    | 'aqua-navy' | 'mint-navy' | 'champagne-brown'
    | 'soft-teal' | 'ice-blue-coral' | 'pistachio-green' | 'baby-blue-rose'
    | 'cream-terracotta' | 'cyan-purple' | 'buttercream-sage' | 'sky-slate'
    | 'soft-sage' | 'light-blue' | 'powder-blue-beige'
    | 'mint-fresh' | 'sage-cream-2' | 'olive-mist' | 'seafoam' | 'pistachio'
    | 'sky-blue' | 'baby-blue' | 'ice-blue' | 'blue-grey' | 'ocean-mist'
    | 'warm-minimal';
  name: string;
  badge: string;
  bgMain: string;
  bgCard: string;
  chipBg: string;
  borderMain: string;
  borderSubtle: string;
  primaryAccent: string;
  primaryHover: string;
  primaryText: string;
  goldAccent: string;
  goldHover?: string;
  textMain: string;
  textBody: string;
  textMuted: string;
  pillBg: string;
  pillBorder: string;
  pillText: string;
  chipBorder: string;
  iconBoxBg: string;
  isDark?: boolean;
}

export const POWDER_BLUE_PALETTE: ThemePalette = {
  id: 'powder-blue', name: '🩵 Powder Blue', badge: 'Powder · Blue',
  bgMain: '#F7FBFF', bgCard: '#FFFFFF', chipBg: '#DCEEFF',
  borderMain: '#DCEEFF', borderSubtle: '#EBF5FF',
  primaryAccent: '#5B9BD5', primaryHover: '#3A82C4', primaryText: '#FFFFFF',
  goldAccent: '#5B9BD5', goldHover: '#3A82C4',
  textMain: '#1E293B', textBody: '#3D5068', textMuted: '#7A9AB8',
  pillBg: '#DCEEFF', pillBorder: '#A8CCEE', pillText: '#1E293B',
  chipBorder: '#DCEEFF', iconBoxBg: '#DCEEFF', isDark: false,
};

export const SAGE_CREAM_PALETTE: ThemePalette = {
  id: 'sage-cream', name: '🌿 Sage + Cream', badge: 'Sage · Cream',
  bgMain: '#FBFCF8', bgCard: '#FFFFFF', chipBg: '#E3EFE6',
  borderMain: '#E3EFE6', borderSubtle: '#EDF5EF',
  primaryAccent: '#739B82', primaryHover: '#527A62', primaryText: '#FFFFFF',
  goldAccent: '#739B82', goldHover: '#527A62',
  textMain: '#26352D', textBody: '#405548', textMuted: '#7A9A85',
  pillBg: '#E3EFE6', pillBorder: '#AACDB5', pillText: '#26352D',
  chipBorder: '#E3EFE6', iconBoxBg: '#E3EFE6', isDark: false,
};

export const PEACH_TERRACOTTA_PALETTE: ThemePalette = {
  id: 'peach-terracotta', name: '🧡 Peach + Terracotta', badge: 'Peach · Terra',
  bgMain: '#FFFAF7', bgCard: '#FFFFFF', chipBg: '#F5E2D9',
  borderMain: '#F5E2D9', borderSubtle: '#FAF0EB',
  primaryAccent: '#C98268', primaryHover: '#A86248', primaryText: '#FFFFFF',
  goldAccent: '#C98268', goldHover: '#A86248',
  textMain: '#3A302C', textBody: '#5A4E48', textMuted: '#A08878',
  pillBg: '#F5E2D9', pillBorder: '#D8B8A8', pillText: '#3A302C',
  chipBorder: '#F5E2D9', iconBoxBg: '#F5E2D9', isDark: false,
};

export const AQUA_NAVY_PALETTE: ThemePalette = {
  id: 'aqua-navy', name: '🩵 Aqua + Navy', badge: 'Aqua · Navy',
  bgMain: '#F5FCFC', bgCard: '#FFFFFF', chipBg: '#D8EFED',
  borderMain: '#D8EFED', borderSubtle: '#E8F6F5',
  primaryAccent: '#55A9A5', primaryHover: '#358885', primaryText: '#FFFFFF',
  goldAccent: '#55A9A5', goldHover: '#358885',
  textMain: '#1F3440', textBody: '#385560', textMuted: '#70A0A0',
  pillBg: '#D8EFED', pillBorder: '#A0D0CC', pillText: '#1F3440',
  chipBorder: '#D8EFED', iconBoxBg: '#D8EFED', isDark: false,
};

export const MINT_NAVY_PALETTE: ThemePalette = {
  id: 'mint-navy', name: '🍃 Mint + Navy', badge: 'Mint · Navy',
  bgMain: '#F5FBF9', bgCard: '#FFFFFF', chipBg: '#D8EFE8',
  borderMain: '#D8EFE8', borderSubtle: '#E8F6F2',
  primaryAccent: '#63B49F', primaryHover: '#429480', primaryText: '#FFFFFF',
  goldAccent: '#63B49F', goldHover: '#429480',
  textMain: '#20343A', textBody: '#385560', textMuted: '#70A898',
  pillBg: '#D8EFE8', pillBorder: '#A0D0C5', pillText: '#20343A',
  chipBorder: '#D8EFE8', iconBoxBg: '#D8EFE8', isDark: false,
};

export const CHAMPAGNE_BROWN_PALETTE: ThemePalette = {
  id: 'champagne-brown', name: '🥂 Champagne + Brown', badge: 'Champagne · Brown',
  bgMain: '#FFFCF7', bgCard: '#FFFFFF', chipBg: '#F1E6D3',
  borderMain: '#F1E6D3', borderSubtle: '#F8F0E5',
  primaryAccent: '#B99A6B', primaryHover: '#987848', primaryText: '#FFFFFF',
  goldAccent: '#B99A6B', goldHover: '#987848',
  textMain: '#3B332C', textBody: '#5A5048', textMuted: '#A09078',
  pillBg: '#F1E6D3', pillBorder: '#D8C0A0', pillText: '#3B332C',
  chipBorder: '#F1E6D3', iconBoxBg: '#F1E6D3', isDark: false,
};

export const SOFT_TEAL_PALETTE: ThemePalette = {
  id: 'soft-teal', name: '🩵 Soft Teal + Cream', badge: 'Teal · Cream',
  bgMain: '#F7FCFB', bgCard: '#FFFFFF', chipBg: '#D8EEEB',
  borderMain: '#D8EEEB', borderSubtle: '#E8F5F3',
  primaryAccent: '#4FA7A0', primaryHover: '#308880', primaryText: '#FFFFFF',
  goldAccent: '#4FA7A0', goldHover: '#308880',
  textMain: '#203A3A', textBody: '#385858', textMuted: '#70A0A0',
  pillBg: '#D8EEEB', pillBorder: '#A0CCC8', pillText: '#203A3A',
  chipBorder: '#D8EEEB', iconBoxBg: '#D8EEEB', isDark: false,
};

export const ICE_BLUE_CORAL_PALETTE: ThemePalette = {
  id: 'ice-blue-coral', name: '🧊 Ice Blue + Coral', badge: 'Ice · Coral',
  bgMain: '#F7FAFC', bgCard: '#FFFFFF', chipBg: '#F7E0DB',
  borderMain: '#F7E0DB', borderSubtle: '#FAEEE9',
  primaryAccent: '#E28B7D', primaryHover: '#C86858', primaryText: '#FFFFFF',
  goldAccent: '#E28B7D', goldHover: '#C86858',
  textMain: '#26333D', textBody: '#485260', textMuted: '#A08888',
  pillBg: '#F7E0DB', pillBorder: '#E0B8B0', pillText: '#26333D',
  chipBorder: '#F7E0DB', iconBoxBg: '#F7E0DB', isDark: false,
};

export const PISTACHIO_GREEN_PALETTE: ThemePalette = {
  id: 'pistachio-green', name: '🌱 Pistachio + Deep Green', badge: 'Pistachio · Green',
  bgMain: '#FAFCF6', bgCard: '#FFFFFF', chipBg: '#E2EDD9',
  borderMain: '#E2EDD9', borderSubtle: '#EDF4E8',
  primaryAccent: '#91B879', primaryHover: '#709858', primaryText: '#FFFFFF',
  goldAccent: '#91B879', goldHover: '#709858',
  textMain: '#294238', textBody: '#406050', textMuted: '#80A888',
  pillBg: '#E2EDD9', pillBorder: '#B8D0A8', pillText: '#294238',
  chipBorder: '#E2EDD9', iconBoxBg: '#E2EDD9', isDark: false,
};

export const BABY_BLUE_ROSE_PALETTE: ThemePalette = {
  id: 'baby-blue-rose', name: '💙 Baby Blue + Rose', badge: 'Baby · Rose',
  bgMain: '#F7FAFD', bgCard: '#FFFFFF', chipBg: '#E9D7DC',
  borderMain: '#E9D7DC', borderSubtle: '#F2E5E8',
  primaryAccent: '#8AAFD0', primaryHover: '#6890B8', primaryText: '#FFFFFF',
  goldAccent: '#8AAFD0', goldHover: '#6890B8',
  textMain: '#293541', textBody: '#485568', textMuted: '#88A0B8',
  pillBg: '#E9D7DC', pillBorder: '#C8B0B8', pillText: '#293541',
  chipBorder: '#E9D7DC', iconBoxBg: '#E9D7DC', isDark: false,
};

export const CREAM_TERRACOTTA_PALETTE: ThemePalette = {
  id: 'cream-terracotta', name: '🏺 Cream + Terracotta', badge: 'Cream · Terra',
  bgMain: '#FFFBF6', bgCard: '#FFFFFF', chipBg: '#F1DED5',
  borderMain: '#F1DED5', borderSubtle: '#F8EDE8',
  primaryAccent: '#C7795C', primaryHover: '#A85840', primaryText: '#FFFFFF',
  goldAccent: '#C7795C', goldHover: '#A85840',
  textMain: '#3C302A', textBody: '#5A4E45', textMuted: '#A08878',
  pillBg: '#F1DED5', pillBorder: '#D8B8A8', pillText: '#3C302A',
  chipBorder: '#F1DED5', iconBoxBg: '#F1DED5', isDark: false,
};

export const CYAN_PURPLE_PALETTE: ThemePalette = {
  id: 'cyan-purple', name: '🩵 Soft Cyan + Purple', badge: 'Cyan · Purple',
  bgMain: '#F6FCFC', bgCard: '#FFFFFF', chipBg: '#DDD9F0',
  borderMain: '#DDD9F0', borderSubtle: '#ECEAF7',
  primaryAccent: '#65AAA9', primaryHover: '#458888', primaryText: '#FFFFFF',
  goldAccent: '#65AAA9', goldHover: '#458888',
  textMain: '#303044', textBody: '#4A4A68', textMuted: '#8888A8',
  pillBg: '#DDD9F0', pillBorder: '#B8B4D8', pillText: '#303044',
  chipBorder: '#DDD9F0', iconBoxBg: '#DDD9F0', isDark: false,
};

export const BUTTERCREAM_SAGE_PALETTE: ThemePalette = {
  id: 'buttercream-sage', name: '🌼 Buttercream + Sage', badge: 'Butter · Sage',
  bgMain: '#FFFDF4', bgCard: '#FFFFFF', chipBg: '#F2EACB',
  borderMain: '#F2EACB', borderSubtle: '#F8F3E0',
  primaryAccent: '#8DA37E', primaryHover: '#6C8260', primaryText: '#FFFFFF',
  goldAccent: '#8DA37E', goldHover: '#6C8260',
  textMain: '#344038', textBody: '#506050', textMuted: '#88A080',
  pillBg: '#F2EACB', pillBorder: '#D8CCA0', pillText: '#344038',
  chipBorder: '#F2EACB', iconBoxBg: '#F2EACB', isDark: false,
};

export const SKY_SLATE_PALETTE: ThemePalette = {
  id: 'sky-slate', name: '🌤️ Sky + Slate', badge: 'Sky · Slate',
  bgMain: '#F5FAFE', bgCard: '#FFFFFF', chipBg: '#DCECF7',
  borderMain: '#DCECF7', borderSubtle: '#EAF4FB',
  primaryAccent: '#69A8D1', primaryHover: '#4888B8', primaryText: '#FFFFFF',
  goldAccent: '#69A8D1', goldHover: '#4888B8',
  textMain: '#263747', textBody: '#405568', textMuted: '#7898B8',
  pillBg: '#DCECF7', pillBorder: '#A8CCE8', pillText: '#263747',
  chipBorder: '#DCECF7', iconBoxBg: '#DCECF7', isDark: false,
};

// ── NEW 20 PALETTES ───────────────────────────────────────────────────────────

export const SOFT_SAGE_PALETTE: ThemePalette = {
  id: 'soft-sage', name: '🌿 Soft Sage', badge: 'Soft · Sage',
  bgMain: '#F7F9F5', bgCard: '#FFFFFF', chipBg: '#DCE8DF',
  borderMain: '#DCE8DF', borderSubtle: '#EAF0EC',
  primaryAccent: '#8FAF9A', primaryHover: '#6E9A7E', primaryText: '#FFFFFF',
  goldAccent: '#8FAF9A', goldHover: '#6E9A7E',
  textMain: '#263238', textBody: '#3D5248', textMuted: '#7A9A88',
  pillBg: '#DCE8DF', pillBorder: '#B8D4BF', pillText: '#263238',
  chipBorder: '#DCE8DF', iconBoxBg: '#DCE8DF', isDark: false,
};

export const LIGHT_BLUE_2_PALETTE: ThemePalette = {
  id: 'light-blue', name: '💙 Light Blue', badge: 'Light · Blue',
  bgMain: '#F6F9FC', bgCard: '#FFFFFF', chipBg: '#DCEAF5',
  borderMain: '#DCEAF5', borderSubtle: '#EBF3FA',
  primaryAccent: '#8DB7D9', primaryHover: '#6A9EC4', primaryText: '#FFFFFF',
  goldAccent: '#8DB7D9', goldHover: '#6A9EC4',
  textMain: '#26364A', textBody: '#3D5166', textMuted: '#7A9AB5',
  pillBg: '#DCEAF5', pillBorder: '#A8CFEA', pillText: '#26364A',
  chipBorder: '#DCEAF5', iconBoxBg: '#DCEAF5', isDark: false,
};

export const POWDER_BLUE_BEIGE_PALETTE: ThemePalette = {
  id: 'powder-blue-beige', name: '🩵 Powder Blue + Beige', badge: 'Powder · Beige',
  bgMain: '#FAFAF7', bgCard: '#FFFFFF', chipBg: '#E8E0D3',
  borderMain: '#E8E0D3', borderSubtle: '#F0EBE4',
  primaryAccent: '#9FC5D0', primaryHover: '#7AAFC0', primaryText: '#FFFFFF',
  goldAccent: '#9FC5D0', goldHover: '#7AAFC0',
  textMain: '#29343D', textBody: '#445260', textMuted: '#8AA0B0',
  pillBg: '#E8E0D3', pillBorder: '#C8BAA8', pillText: '#29343D',
  chipBorder: '#E8E0D3', iconBoxBg: '#E8E0D3', isDark: false,
};

export const MINT_FRESH_PALETTE: ThemePalette = {
  id: 'mint-fresh', name: '🌱 Mint Fresh', badge: 'Mint · Fresh',
  bgMain: '#F5FBF8', bgCard: '#FFFFFF', chipBg: '#DDF1E8',
  borderMain: '#DDF1E8', borderSubtle: '#EBF7F2',
  primaryAccent: '#8FC9B0', primaryHover: '#6DB89A', primaryText: '#FFFFFF',
  goldAccent: '#8FC9B0', goldHover: '#6DB89A',
  textMain: '#263A35', textBody: '#3D5550', textMuted: '#7AADA0',
  pillBg: '#DDF1E8', pillBorder: '#AADFC8', pillText: '#263A35',
  chipBorder: '#DDF1E8', iconBoxBg: '#DDF1E8', isDark: false,
};

export const SAGE_CREAM_2_PALETTE: ThemePalette = {
  id: 'sage-cream-2', name: '🌾 Sage Cream', badge: 'Sage · Cream II',
  bgMain: '#FAFAF5', bgCard: '#FFFFFF', chipBg: '#E6EBDD',
  borderMain: '#E6EBDD', borderSubtle: '#EFF2E8',
  primaryAccent: '#A8B89F', primaryHover: '#88A07E', primaryText: '#FFFFFF',
  goldAccent: '#A8B89F', goldHover: '#88A07E',
  textMain: '#30352F', textBody: '#4A5048', textMuted: '#8A9A88',
  pillBg: '#E6EBDD', pillBorder: '#C0D0B8', pillText: '#30352F',
  chipBorder: '#E6EBDD', iconBoxBg: '#E6EBDD', isDark: false,
};

export const OLIVE_MIST_PALETTE: ThemePalette = {
  id: 'olive-mist', name: '🫒 Olive Mist', badge: 'Olive · Mist',
  bgMain: '#F7F8F2', bgCard: '#FFFFFF', chipBg: '#E5E8D9',
  borderMain: '#E5E8D9', borderSubtle: '#EDEFD8',
  primaryAccent: '#AEB79A', primaryHover: '#8EA07A', primaryText: '#FFFFFF',
  goldAccent: '#AEB79A', goldHover: '#8EA07A',
  textMain: '#34382D', textBody: '#505548', textMuted: '#8A9080',
  pillBg: '#E5E8D9', pillBorder: '#C0C8A8', pillText: '#34382D',
  chipBorder: '#E5E8D9', iconBoxBg: '#E5E8D9', isDark: false,
};

export const SEAFOAM_PALETTE: ThemePalette = {
  id: 'seafoam', name: '🌊 Seafoam', badge: 'Sea · Foam',
  bgMain: '#F3FAF9', bgCard: '#FFFFFF', chipBg: '#D9EEEC',
  borderMain: '#D9EEEC', borderSubtle: '#E8F5F4',
  primaryAccent: '#86C5C0', primaryHover: '#60ADAA', primaryText: '#FFFFFF',
  goldAccent: '#86C5C0', goldHover: '#60ADAA',
  textMain: '#283B3B', textBody: '#3D5858', textMuted: '#78A8A5',
  pillBg: '#D9EEEC', pillBorder: '#A8D8D5', pillText: '#283B3B',
  chipBorder: '#D9EEEC', iconBoxBg: '#D9EEEC', isDark: false,
};

export const PISTACHIO_PALETTE: ThemePalette = {
  id: 'pistachio', name: '🍃 Pistachio', badge: 'Pistachio · Green',
  bgMain: '#F8FAF4', bgCard: '#FFFFFF', chipBg: '#E6EEDC',
  borderMain: '#E6EEDC', borderSubtle: '#EEF4E8',
  primaryAccent: '#B1C99A', primaryHover: '#90B278', primaryText: '#FFFFFF',
  goldAccent: '#B1C99A', goldHover: '#90B278',
  textMain: '#30382C', textBody: '#4A5545', textMuted: '#88A080',
  pillBg: '#E6EEDC', pillBorder: '#C0D8A8', pillText: '#30382C',
  chipBorder: '#E6EEDC', iconBoxBg: '#E6EEDC', isDark: false,
};

export const SKY_BLUE_PALETTE: ThemePalette = {
  id: 'sky-blue', name: '🩦 Sky Blue', badge: 'Sky · Blue',
  bgMain: '#F5FAFE', bgCard: '#FFFFFF', chipBg: '#DCEEF9',
  borderMain: '#DCEEF9', borderSubtle: '#EAF5FC',
  primaryAccent: '#8DBFE0', primaryHover: '#6AA8D0', primaryText: '#FFFFFF',
  goldAccent: '#8DBFE0', goldHover: '#6AA8D0',
  textMain: '#263746', textBody: '#3D5268', textMuted: '#7A9AB8',
  pillBg: '#DCEEF9', pillBorder: '#A8D0EE', pillText: '#263746',
  chipBorder: '#DCEEF9', iconBoxBg: '#DCEEF9', isDark: false,
};

export const BABY_BLUE_PALETTE: ThemePalette = {
  id: 'baby-blue', name: '👶 Baby Blue', badge: 'Baby · Blue',
  bgMain: '#F7FAFC', bgCard: '#FFFFFF', chipBg: '#E1EFF8',
  borderMain: '#E1EFF8', borderSubtle: '#EBF5FB',
  primaryAccent: '#9DC7E5', primaryHover: '#78B0D8', primaryText: '#FFFFFF',
  goldAccent: '#9DC7E5', goldHover: '#78B0D8',
  textMain: '#293B4D', textBody: '#405870', textMuted: '#7A9AB8',
  pillBg: '#E1EFF8', pillBorder: '#AACFE8', pillText: '#293B4D',
  chipBorder: '#E1EFF8', iconBoxBg: '#E1EFF8', isDark: false,
};

export const ICE_BLUE_PALETTE: ThemePalette = {
  id: 'ice-blue', name: '🧊 Ice Blue', badge: 'Ice · Blue',
  bgMain: '#F4F9FB', bgCard: '#FFFFFF', chipBg: '#DCECEF',
  borderMain: '#DCECEF', borderSubtle: '#EAF3F5',
  primaryAccent: '#91C3D1', primaryHover: '#6AAFC0', primaryText: '#FFFFFF',
  goldAccent: '#91C3D1', goldHover: '#6AAFC0',
  textMain: '#26383E', textBody: '#3D5560', textMuted: '#78A8B5',
  pillBg: '#DCECEF', pillBorder: '#A8D0D8', pillText: '#26383E',
  chipBorder: '#DCECEF', iconBoxBg: '#DCECEF', isDark: false,
};

export const BLUE_GREY_PALETTE: ThemePalette = {
  id: 'blue-grey', name: '🩶 Blue Grey', badge: 'Blue · Grey',
  bgMain: '#F6F8FA', bgCard: '#FFFFFF', chipBg: '#E1E7ED',
  borderMain: '#E1E7ED', borderSubtle: '#EBF0F4',
  primaryAccent: '#9BAFC3', primaryHover: '#7898B0', primaryText: '#FFFFFF',
  goldAccent: '#9BAFC3', goldHover: '#7898B0',
  textMain: '#303A46', textBody: '#485868', textMuted: '#7A90A8',
  pillBg: '#E1E7ED', pillBorder: '#AABCCC', pillText: '#303A46',
  chipBorder: '#E1E7ED', iconBoxBg: '#E1E7ED', isDark: false,
};

export const OCEAN_MIST_PALETTE: ThemePalette = {
  id: 'ocean-mist', name: '🌫️ Ocean Mist', badge: 'Ocean · Mist',
  bgMain: '#F3F9FA', bgCard: '#FFFFFF', chipBg: '#D9EBED',
  borderMain: '#D9EBED', borderSubtle: '#E8F3F5',
  primaryAccent: '#82B8C0', primaryHover: '#5EA0AA', primaryText: '#FFFFFF',
  goldAccent: '#82B8C0', goldHover: '#5EA0AA',
  textMain: '#27383B', textBody: '#3D5558', textMuted: '#78A5A8',
  pillBg: '#D9EBED', pillBorder: '#A8CDD0', pillText: '#27383B',
  chipBorder: '#D9EBED', iconBoxBg: '#D9EBED', isDark: false,
};

export const WARM_MINIMAL_PALETTE: ThemePalette = {
  id: 'warm-minimal', name: '🤍 Warm Minimal', badge: 'Warm · Minimal',
  bgMain: '#FAF9F6', bgCard: '#FFFFFF', chipBg: '#EAE4DC',
  borderMain: '#EAE4DC', borderSubtle: '#F0EDE8',
  primaryAccent: '#B7A99A', primaryHover: '#988878', primaryText: '#FFFFFF',
  goldAccent: '#B7A99A', goldHover: '#988878',
  textMain: '#30302D', textBody: '#504E48', textMuted: '#989080',
  pillBg: '#EAE4DC', pillBorder: '#C8C0B0', pillText: '#30302D',
  chipBorder: '#EAE4DC', iconBoxBg: '#EAE4DC', isDark: false,
};

export const AVAILABLE_THEMES = [
  POWDER_BLUE_PALETTE,
  SAGE_CREAM_PALETTE,
  PEACH_TERRACOTTA_PALETTE,
  AQUA_NAVY_PALETTE,
  MINT_NAVY_PALETTE,
  CHAMPAGNE_BROWN_PALETTE,
  SOFT_TEAL_PALETTE,
  ICE_BLUE_CORAL_PALETTE,
  PISTACHIO_GREEN_PALETTE,
  BABY_BLUE_ROSE_PALETTE,
  CREAM_TERRACOTTA_PALETTE,
  CYAN_PURPLE_PALETTE,
  BUTTERCREAM_SAGE_PALETTE,
  SKY_SLATE_PALETTE,
  SOFT_SAGE_PALETTE,
  LIGHT_BLUE_2_PALETTE,
  POWDER_BLUE_BEIGE_PALETTE,
  MINT_FRESH_PALETTE,
  SAGE_CREAM_2_PALETTE,
  OLIVE_MIST_PALETTE,
  SEAFOAM_PALETTE,
  PISTACHIO_PALETTE,
  SKY_BLUE_PALETTE,
  BABY_BLUE_PALETTE,
  ICE_BLUE_PALETTE,
  BLUE_GREY_PALETTE,
  OCEAN_MIST_PALETTE,
  WARM_MINIMAL_PALETTE,
];
