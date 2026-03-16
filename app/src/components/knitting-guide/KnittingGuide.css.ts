import { style } from '@vanilla-extract/css';

export const container = style({
  background: '#fff',
  border: '1px solid #e5e5e5',
  borderRadius: 12,
  padding: '1rem',
  '@media': {
    '(min-width: 768px)': { padding: '1.5rem' },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.6rem',
});

export const title = style({
  fontSize: '0.95rem',
  '@media': {
    '(min-width: 768px)': { fontSize: '1.1rem' },
  },
});

export const progress = style({
  fontSize: '0.75rem',
  color: '#888',
});

export const list = style({
  fontSize: '0.75rem',
  lineHeight: 1.6,
  color: '#555',
  fontFamily: 'monospace',
  maxHeight: '60vh',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
  '@media': {
    '(min-width: 768px)': { fontSize: '0.8rem', maxHeight: 500 },
  },
});

export const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  padding: '0.3rem',
  borderRadius: 4,
  transition: 'background 0.1s',
  cursor: 'pointer',
  minHeight: 32,
  selectors: {
    '&:active': { background: '#f0f0f0' },
  },
  '@media': {
    '(min-width: 768px)': {
      minHeight: 'auto',
      padding: '0.2rem 0.4rem',
    },
  },
});

export const checked = style({
  opacity: 0.45,
  textDecoration: 'line-through',
});

export const checkbox = style({
  width: 18,
  height: 18,
  cursor: 'pointer',
  accentColor: '#4a90d9',
  flexShrink: 0,
  '@media': {
    '(min-width: 768px)': { width: 16, height: 16 },
  },
});

export const rowNum = style({
  width: 24,
  textAlign: 'right',
  color: '#bbb',
  flexShrink: 0,
  fontSize: '0.7rem',
});

export const swatch = style({
  display: 'inline-block',
  width: 12,
  height: 12,
  borderRadius: 2,
  border: '1px solid rgba(0, 0, 0, 0.1)',
  flexShrink: 0,
});
