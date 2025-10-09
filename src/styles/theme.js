const baseTheme = {
  primary: '#6366f1',
  gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  transition: '0.3s ease',
};

export const lightTheme = {
  ...baseTheme,
  body: '#ffffff',
  text: '#1f2937',
  textSecondary: '#4b5563',
  headerBg: 'rgba(255, 255, 255, 0.8)',
  cardBg: '#ffffff',
  hover: '#f3f4f6',
  tagBg: '#e5e7eb',
  tagText: '#374151',
};

export const darkTheme = {
  ...baseTheme,
  body: '#111827',
  text: '#f3f4f6',
  textSecondary: '#9ca3af',
  headerBg: 'rgba(17, 24, 39, 0.8)',
  cardBg: '#1f2937',
  hover: '#374151',
  tagBg: '#374151',
  tagText: '#f3f4f6',
};