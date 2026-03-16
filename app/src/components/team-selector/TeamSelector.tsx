import type { TeamCode } from '../../types/game.types';
import { TEAM_CODES, TEAM_NAMES } from '../../constants/teams';
import * as s from './TeamSelector.css';

type Props = {
  value: TeamCode;
  onChange: (team: TeamCode) => void;
};

export function TeamSelector({ value, onChange }: Props) {
  return (
    <div className={s.group}>
      <h3 className={s.label}>팀 선택</h3>
      <select
        className={s.select}
        value={value}
        onChange={(e) => onChange(e.target.value as TeamCode)}
      >
        {TEAM_CODES.map((code) => (
          <option key={code} value={code}>
            {TEAM_NAMES[code]}
          </option>
        ))}
      </select>
    </div>
  );
}
