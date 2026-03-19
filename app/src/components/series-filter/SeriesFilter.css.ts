import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export { group, groupLabel as label } from '../../styles/shared.css';

export const filters = style({
  display: 'flex',
  gap: '0.4rem',
});

export const btn = style({
  flex: 1,
  padding: '0.5rem 0.6rem',
  border: `1px solid ${vars.color.borderLight}`,
  borderRadius: 20,
  background: vars.color.white,
  fontSize: vars.fontSize.md,
  cursor: 'pointer',
  transition: '0.15s',
  textAlign: 'center',
  '@media': {
    '(min-width: 768px)': { flex: 'none', padding: '0.4rem 0.8rem' },
  },
});

export const active = style({
  background: vars.color.activeBg,
  color: vars.color.white,
  borderColor: vars.color.activeBg,
});
