import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Material Design 3 CSS Custom Properties */
  :root {
    /* Primary */
    --md-sys-color-primary: ${({ theme }) => theme.primary};
    --md-sys-color-on-primary: ${({ theme }) => theme.onPrimary};
    --md-sys-color-primary-container: ${({ theme }) => theme.primaryContainer};
    --md-sys-color-on-primary-container: ${({ theme }) => theme.onPrimaryContainer};
    
    /* Secondary */
    --md-sys-color-secondary: ${({ theme }) => theme.secondary};
    --md-sys-color-on-secondary: ${({ theme }) => theme.onSecondary};
    --md-sys-color-secondary-container: ${({ theme }) => theme.secondaryContainer};
    --md-sys-color-on-secondary-container: ${({ theme }) => theme.onSecondaryContainer};
    
    /* Tertiary */
    --md-sys-color-tertiary: ${({ theme }) => theme.tertiary};
    --md-sys-color-on-tertiary: ${({ theme }) => theme.onTertiary};
    --md-sys-color-tertiary-container: ${({ theme }) => theme.tertiaryContainer};
    --md-sys-color-on-tertiary-container: ${({ theme }) => theme.onTertiaryContainer};
    
    /* Error */
    --md-sys-color-error: ${({ theme }) => theme.error};
    --md-sys-color-on-error: ${({ theme }) => theme.onError};
    --md-sys-color-error-container: ${({ theme }) => theme.errorContainer};
    --md-sys-color-on-error-container: ${({ theme }) => theme.onErrorContainer};
    
    /* Surface */
    --md-sys-color-surface: ${({ theme }) => theme.surface};
    --md-sys-color-on-surface: ${({ theme }) => theme.onSurface};
    --md-sys-color-surface-variant: ${({ theme }) => theme.surfaceVariant};
    --md-sys-color-on-surface-variant: ${({ theme }) => theme.onSurfaceVariant};
    
    /* Outline */
    --md-sys-color-outline: ${({ theme }) => theme.outline};
    --md-sys-color-outline-variant: ${({ theme }) => theme.outlineVariant};
    
    /* Background */
    --md-sys-color-background: ${({ theme }) => theme.background};
    --md-sys-color-on-background: ${({ theme }) => theme.onBackground};
    
    /* Surface containers */
    --md-sys-color-surface-container-lowest: ${({ theme }) => theme.surfaceContainerLowest};
    --md-sys-color-surface-container-low: ${({ theme }) => theme.surfaceContainerLow};
    --md-sys-color-surface-container: ${({ theme }) => theme.surfaceContainer};
    --md-sys-color-surface-container-high: ${({ theme }) => theme.surfaceContainerHigh};
    --md-sys-color-surface-container-highest: ${({ theme }) => theme.surfaceContainerHighest};
    
    /* Inverse */
    --md-sys-color-inverse-surface: ${({ theme }) => theme.inverseSurface};
    --md-sys-color-inverse-on-surface: ${({ theme }) => theme.inverseOnSurface};
    --md-sys-color-inverse-primary: ${({ theme }) => theme.inversePrimary};
    
    /* Shape */
    --md-sys-shape-corner-none: ${({ theme }) => theme.shape.none};
    --md-sys-shape-corner-extra-small: ${({ theme }) => theme.shape.extraSmall};
    --md-sys-shape-corner-small: ${({ theme }) => theme.shape.small};
    --md-sys-shape-corner-medium: ${({ theme }) => theme.shape.medium};
    --md-sys-shape-corner-large: ${({ theme }) => theme.shape.large};
    --md-sys-shape-corner-extra-large: ${({ theme }) => theme.shape.extraLarge};
    --md-sys-shape-corner-full: ${({ theme }) => theme.shape.full};
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: 'Roboto Flex', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    line-height: 1.5;
    min-height: 100vh;
    transition: background-color ${({ theme }) => theme.transition},
                color ${({ theme }) => theme.transition};
  }

  /* Material Design 3 Typography Scale */
  .md-typescale-display-large {
    font-size: 57px;
    line-height: 64px;
    font-weight: 400;
    letter-spacing: -0.25px;
  }

  .md-typescale-display-medium {
    font-size: 45px;
    line-height: 52px;
    font-weight: 400;
  }

  .md-typescale-display-small {
    font-size: 36px;
    line-height: 44px;
    font-weight: 400;
  }

  .md-typescale-headline-large {
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
  }

  .md-typescale-headline-medium {
    font-size: 28px;
    line-height: 36px;
    font-weight: 400;
  }

  .md-typescale-headline-small {
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
  }

  .md-typescale-title-large {
    font-size: 22px;
    line-height: 28px;
    font-weight: 400;
  }

  .md-typescale-title-medium {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0.15px;
  }

  .md-typescale-title-small {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: 0.1px;
  }

  .md-typescale-body-large {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  .md-typescale-body-medium {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 0.25px;
  }

  .md-typescale-body-small {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    letter-spacing: 0.4px;
  }

  .md-typescale-label-large {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: 0.1px;
  }

  .md-typescale-label-medium {
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  .md-typescale-label-small {
    font-size: 11px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.onPrimary};
  }

  /* Material Design Web Components - Enhanced Ripple Effect */
  md-filled-button,
  md-outlined-button,
  md-text-button,
  md-icon-button {
    /* Ensure ripple is visible */
    --md-ripple-hover-opacity: 0.08;
    --md-ripple-pressed-opacity: 0.12;
    --md-ripple-hover-color: ${({ theme }) => theme.onSurface};
    --md-ripple-pressed-color: ${({ theme }) => theme.onSurface};
  }

  md-filled-button {
    --md-ripple-hover-color: ${({ theme }) => theme.onPrimary};
    --md-ripple-pressed-color: ${({ theme }) => theme.onPrimary};
  }
`;

export default GlobalStyle;
