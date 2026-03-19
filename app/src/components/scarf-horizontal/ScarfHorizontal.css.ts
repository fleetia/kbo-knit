import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const container = style({
  background: vars.color.white,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: '1rem',
  marginBottom: '1rem',
});

export const scarf = style({
  display: 'flex',
  height: 48,
  borderRadius: vars.radius.md,
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
  width: '100%',
});

export const col = style({
  flex: 1,
  minWidth: 0,
});
