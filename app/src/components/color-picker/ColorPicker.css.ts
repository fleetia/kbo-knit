import { style } from '@vanilla-extract/css';

export const group = style({
  position: 'relative',
  background: '#fff',
  border: '1px solid #e5e5e5',
  borderRadius: 12,
  padding: '1rem',
  '@media': {
    '(min-width: 768px)': { padding: '1.2rem 1.5rem' },
  },
});

export const label = style({
  fontSize: '0.8rem',
  color: '#999',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '0.4rem',
});

export const sectionLabel = style({
  fontSize: '0.75rem',
  color: '#999',
  paddingBottom: 4,
  borderBottom: '1px solid #e5e5e5',
  marginBottom: 4,
});

export const checkboxRow = style({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.35rem',
  cursor: 'pointer',
  '@media': {
    '(min-width: 768px)': { top: '1.2rem', right: '1.5rem' },
  },
});

export const checkbox = style({
  width: 14,
  height: 14,
  cursor: 'pointer',
  accentColor: '#4a90d9',
  margin: 0,
});

export const checkboxLabel = style({
  fontSize: '0.75rem',
  color: '#999',
  letterSpacing: '0.03em',
});

export const colorRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '0.4rem',
});

export const colorLabel = style({
  width: 20,
  fontSize: '0.85rem',
  fontWeight: 600,
});

export const colorInput = style({
  width: 32,
  height: 32,
  border: '2px solid #e5e5e5',
  borderRadius: 8,
  cursor: 'pointer',
  padding: 2,
  '@media': {
    '(min-width: 768px)': { width: 36, height: 36 },
  },
});

export const hex = style({
  fontSize: '0.7rem',
  color: '#aaa',
  fontFamily: 'monospace',
});

export const splitRow = style({
  display: 'flex',
  gap: '1.5rem',
});

export const section = style({
  flex: 1,
});
