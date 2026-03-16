import { CURRENT_YEAR } from '../../constants/defaults';
import * as s from './SeasonSelector.css';

type Props = {
  value: number;
  onChange: (season: number) => void;
};

const START_YEAR = 2025;
const YEARS = Array.from({ length: CURRENT_YEAR - START_YEAR + 1 }, (_, i) => CURRENT_YEAR - i);

export function SeasonSelector({ value, onChange }: Props) {
  return (
    <div className={s.group}>
      <h3 className={s.label}>시즌</h3>
      <select
        className={s.select}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {YEARS.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
}
