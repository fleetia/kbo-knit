import type { ScarfRow, ScarfColors } from '../../types/game.types';
import { buildLegend } from '../../utils/legendUtils';
import { Legend } from '../legend/Legend';
import * as s from './ScarfHorizontal.css';

type Props = {
  rows: ScarfRow[];
  colors: ScarfColors;
  awaySame: boolean;
};

export function ScarfHorizontal({ rows, colors, awaySame }: Props) {
  const legend = buildLegend(colors, awaySame);

  return (
    <div className={s.container}>
      <div className={s.scarf}>
        {rows.map((r) => (
          <div key={r.gameKey} className={s.col} style={{ background: r.color }} />
        ))}
      </div>

      <Legend items={legend} />
    </div>
  );
}
