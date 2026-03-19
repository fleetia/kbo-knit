import type { AppState } from '../../types/game.types';
import * as s from './ColorPicker.css';

type ColorKey = keyof AppState['colors'];

type Props = {
  colors: AppState['colors'];
  awaySame: boolean;
  onAwaySameChange: (awaySame: boolean) => void;
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

export function ColorPicker({ colors, awaySame, onAwaySameChange, onColorChange }: Props) {
  return (
    <div className={s.group}>
      <h3 className={s.label}>경기별 색상</h3>
      <label className={s.checkboxRow}>
        <span className={s.checkboxLabel}>홈/원정 색상 분리</span>
        <input
          type="checkbox"
          className={s.checkbox}
          checked={!awaySame}
          onChange={(e) => onAwaySameChange(!e.target.checked)}
        />
      </label>

      {awaySame ? (
        <>
          <ColorRow label="승" colorKey="homeWin" value={colors.homeWin} onChange={onColorChange} />
          <ColorRow label="무" colorKey="homeDraw" value={colors.homeDraw} onChange={onColorChange} />
          <ColorRow label="패" colorKey="homeLoss" value={colors.homeLoss} onChange={onColorChange} />
        </>
      ) : (
        <div className={s.splitRow}>
          <div className={s.section}>
            <h4 className={s.sectionLabel}>홈</h4>
            <ColorRow label="승" colorKey="homeWin" value={colors.homeWin} onChange={onColorChange} />
            <ColorRow label="무" colorKey="homeDraw" value={colors.homeDraw} onChange={onColorChange} />
            <ColorRow label="패" colorKey="homeLoss" value={colors.homeLoss} onChange={onColorChange} />
          </div>
          <div className={s.section}>
            <h4 className={s.sectionLabel}>원정</h4>
            <ColorRow label="승" colorKey="awayWin" value={colors.awayWin} onChange={onColorChange} />
            <ColorRow label="무" colorKey="awayDraw" value={colors.awayDraw} onChange={onColorChange} />
            <ColorRow label="패" colorKey="awayLoss" value={colors.awayLoss} onChange={onColorChange} />
          </div>
        </div>
      )}
    </div>
  );
}
