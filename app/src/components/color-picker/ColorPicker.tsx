import type { AppState } from '../../types/game.types';
import * as s from './ColorPicker.css';

type ColorKey = keyof AppState['colors'];

type Props = {
  colors: AppState['colors'];
  awaySame: boolean;
  onColorChange: (key: ColorKey, value: string) => void;
};

type ColorRowProps = {
  label: string;
  colorKey: ColorKey;
  value: string;
  onChange: (key: ColorKey, value: string) => void;
};

function ColorRow({ label, colorKey, value, onChange }: ColorRowProps) {
  return (
    <div className={s.colorRow}>
      <label className={s.colorLabel}>{label}</label>
      <input
        type="color"
        className={s.colorInput}
        value={value}
        onChange={(e) => onChange(colorKey, e.target.value)}
      />
      <span className={s.hex}>{value}</span>
    </div>
  );
}

export function ColorPicker({ colors, awaySame, onColorChange }: Props) {
  if (awaySame) {
    return (
      <div className={s.group}>
        <h3 className={s.label}>경기별 색상</h3>
        <ColorRow label="승" colorKey="homeWin" value={colors.homeWin} onChange={onColorChange} />
        <ColorRow label="무" colorKey="homeDraw" value={colors.homeDraw} onChange={onColorChange} />
        <ColorRow label="패" colorKey="homeLoss" value={colors.homeLoss} onChange={onColorChange} />
      </div>
    );
  }

  return (
    <div className={s.group}>
      <div className={s.section}>
        <h3 className={s.label}>홈</h3>
        <ColorRow label="승" colorKey="homeWin" value={colors.homeWin} onChange={onColorChange} />
        <ColorRow label="무" colorKey="homeDraw" value={colors.homeDraw} onChange={onColorChange} />
        <ColorRow label="패" colorKey="homeLoss" value={colors.homeLoss} onChange={onColorChange} />
      </div>
      <div className={s.divider} />
      <div className={s.section}>
        <h3 className={s.label}>원정</h3>
        <ColorRow label="승" colorKey="awayWin" value={colors.awayWin} onChange={onColorChange} />
        <ColorRow label="무" colorKey="awayDraw" value={colors.awayDraw} onChange={onColorChange} />
        <ColorRow label="패" colorKey="awayLoss" value={colors.awayLoss} onChange={onColorChange} />
      </div>
    </div>
  );
}
