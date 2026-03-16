import { style } from '@vanilla-extract/css';

export const container = style({
  background: '#fff',
  border: '1px solid #e5e5e5',
  borderRadius: 12,
  padding: '1rem',
  marginBottom: '1rem',
});

export const header = style({
  marginBottom: '0.6rem',
});

export const title = style({
  fontSize: '0.95rem',
});

export const scarf = style({
  display: 'flex',
  height: 48,
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
  width: '100%',
});

export const col = style({
  flex: 1,
  minWidth: 0,
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
});

export const swatch = style({
  width: 12,
  height: 12,
  borderRadius: 3,
  border: '1px solid rgba(0, 0, 0, 0.1)',
});
