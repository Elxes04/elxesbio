// Material Design 3 Color Tokens
// https://m3.material.io/styles/color/system/overview

const baseTheme = {
  // Material 3 primary color (indigo)
  primary: '#6750A4',
  onPrimary: '#FFFFFF',
  primaryContainer: '#EADDFF',
  onPrimaryContainer: '#21005D',
  
  // Secondary colors
  secondary: '#625B71',
  onSecondary: '#FFFFFF',
  secondaryContainer: '#E8DEF8',
  onSecondaryContainer: '#1D192B',
  
  // Tertiary colors
  tertiary: '#7D5260',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#FFD8E4',
  onTertiaryContainer: '#31111D',
  
  // Error colors
  error: '#B3261E',
  onError: '#FFFFFF',
  errorContainer: '#F9DEDC',
  onErrorContainer: '#410E0B',
  
  // Gradients
  gradient: 'linear-gradient(135deg, #6750A4 0%, #7D5260 100%)',
  
  // Transitions
  transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  
  // Elevation shadows (Material 3)
  elevation: {
    level0: 'none',
    level1: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    level2: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
    level3: '0px 1px 3px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
    level4: '0px 2px 3px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
    level5: '0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
  },
  
  // Border radius (Material 3)
  shape: {
    none: '0px',
    extraSmall: '4px',
    small: '8px',
    medium: '12px',
    large: '16px',
    extraLarge: '28px',
    full: '9999px',
  },
};

export const lightTheme = {
  ...baseTheme,
  
  // Surface colors
  surface: '#FEF7FF',
  onSurface: '#1D1B20',
  surfaceVariant: '#E7E0EC',
  onSurfaceVariant: '#49454F',
  
  surfaceContainerLowest: '#FFFFFF',
  surfaceContainerLow: '#F7F2FA',
  surfaceContainer: '#F3EDF7',
  surfaceContainerHigh: '#ECE6F0',
  surfaceContainerHighest: '#E6E0E9',
  
  // Outline
  outline: '#79747E',
  outlineVariant: '#CAC4D0',
  
  // Background (deprecated in M3 but kept for compatibility)
  background: '#FEF7FF',
  onBackground: '#1D1B20',
  
  // Inverse colors
  inverseSurface: '#322F35',
  inverseOnSurface: '#F5EFF7',
  inversePrimary: '#D0BCFF',
  
  // Scrim
  scrim: '#000000',
  
  // Legacy compatibility
  body: '#FEF7FF',
  text: '#1D1B20',
  textSecondary: '#49454F',
  headerBg: 'rgba(254, 247, 255, 0.8)',
  cardBg: '#ECE6F0',
  hover: '#E6E0E9',
  tagBg: '#E7E0EC',
  tagText: '#49454F',
};

export const darkTheme = {
  ...baseTheme,
  
  // Dark mode primary adjustment
  primary: '#D0BCFF',
  onPrimary: '#381E72',
  primaryContainer: '#4F378B',
  onPrimaryContainer: '#EADDFF',
  
  secondary: '#CCC2DC',
  onSecondary: '#332D41',
  secondaryContainer: '#4A4458',
  onSecondaryContainer: '#E8DEF8',
  
  tertiary: '#EFB8C8',
  onTertiary: '#492532',
  tertiaryContainer: '#633B48',
  onTertiaryContainer: '#FFD8E4',
  
  error: '#F2B8B5',
  onError: '#601410',
  errorContainer: '#8C1D18',
  onErrorContainer: '#F9DEDC',
  
  // Surface colors
  surface: '#141218',
  onSurface: '#E6E0E9',
  surfaceVariant: '#49454F',
  onSurfaceVariant: '#CAC4D0',
  
  surfaceContainerLowest: '#0F0D13',
  surfaceContainerLow: '#1D1B20',
  surfaceContainer: '#211F26',
  surfaceContainerHigh: '#2B2930',
  surfaceContainerHighest: '#36343B',
  
  // Outline
  outline: '#938F99',
  outlineVariant: '#49454F',
  
  // Background
  background: '#141218',
  onBackground: '#E6E0E9',
  
  // Inverse colors
  inverseSurface: '#E6E0E9',
  inverseOnSurface: '#322F35',
  inversePrimary: '#6750A4',
  
  // Scrim
  scrim: '#000000',
  
  // Legacy compatibility
  body: '#141218',
  text: '#E6E0E9',
  textSecondary: '#CAC4D0',
  headerBg: 'rgba(20, 18, 24, 0.8)',
  cardBg: '#211F26',
  hover: '#2B2930',
  tagBg: '#49454F',
  tagText: '#CAC4D0',
};
