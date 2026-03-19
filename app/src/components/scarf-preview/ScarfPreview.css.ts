import { style, globalStyle } from '@vanilla-extract/css';

export const container = style({});

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

export const stats = style({
  fontSize: '0.75rem',
  color: '#888',
  '@media': {
    '(min-width: 768px)': { fontSize: '0.8rem' },
  },
});

export const scarf = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 8,
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
});

export const row = style({
  display: 'flex',
  height: 10,
  cursor: 'pointer',
  transition: 'height 0.15s, opacity 0.15s',
  selectors: {
    '&:hover': { height: 24 },
  },
  '@media': {
    '(min-width: 768px)': {
      height: 12,
    },
  },
});

// Desktop hover override
globalStyle(`${row}:hover`, {
  '@media': {
    '(min-width: 768px)': { height: 28 },
  },
});

export const done = style({
  opacity: 0.35,
});

export const expanded = style({
  height: 24,
  '@media': {
    '(min-width: 768px)': { height: 28 },
  },
});

export const checkCell = style({
  display: 'none',
});

export const checkbox = style({
  display: 'none',
});

export const bar = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
});

export const tooltip = style({
  display: 'none',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '0.65rem',
  color: '#fff',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
  whiteSpace: 'nowrap',
  pointerEvents: 'none',
});

globalStyle(`${row}:hover ${tooltip}`, {
  display: 'block',
});

globalStyle(`${expanded} ${tooltip}`, {
  display: 'block',
});

export const legend = style({
  display: 'flex',
  gap: '0.8rem',
  marginTop: '0.6rem',
  flexWrap: 'wrap',
});

export const legendItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  fontSize: '0.7rem',
  color: '#666',
  '@media': {
    '(min-width: 768px)': { fontSize: '0.8rem' },
  },
});

export const swatch = style({
  width: 12,
  height: 12,
  borderRadius: 3,
  border: '1px solid rgba(0, 0, 0, 0.1)',
  '@media': {
    '(min-width: 768px)': { width: 16, height: 16 },
  },
});

globalStyle(`${done} ${tooltip}`, {
  textDecoration: 'line-through',
});
