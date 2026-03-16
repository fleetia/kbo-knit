import type { SeriesType } from '../../types/game.types';
import * as s from './SeriesFilter.css';

type Props = {
  active: SeriesType[];
  onToggle: (series: SeriesType) => void;
};

const SERIES_OPTIONS: { value: SeriesType; label: string }[] = [
  { value: 'PRESEASON', label: '시범' },
  { value: 'REGULAR_SEASON', label: '정규' },
  { value: 'POSTSEASON', label: '포스트' },
];

export function SeriesFilter({ active, onToggle }: Props) {
  return (
    <div className={s.group}>
      <h3 className={s.label}>시리즈</h3>
      <div className={s.filters}>
        {SERIES_OPTIONS.map(({ value, label }) => (
          <button
            key={value}
            className={`${s.btn} ${active.includes(value) ? s.active : ''}`}
            onClick={() => onToggle(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
