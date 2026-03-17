import type { ScarfRow, ScarfColors } from '../../types/game.types';
import * as s from './ScarfHorizontal.css';

type Props = {
  rows: ScarfRow[];
  colors: ScarfColors;
  awaySame: boolean;
};

type LegendItem = { label: string; color: string };

function buildLegend(colors: ScarfColors, awaySame: boolean): LegendItem[] {
  const prefix = awaySame ? '' : '홈 ';
  const items: LegendItem[] = [
    { label: `${prefix}승`, color: colors.home.win },
    { label: `${prefix}무`, color: colors.home.draw },
    { label: `${prefix}패`, color: colors.home.loss },
  ];

  if (!awaySame) {
    items.push(
      { label: '원정 승', color: colors.away.win },
      { label: '원정 무', color: colors.away.draw },
      { label: '원정 패', color: colors.away.loss },
    );
  }

  return items;
}

export function ScarfHorizontal({ rows, colors, awaySame }: Props) {
  const legend = buildLegend(colors, awaySame);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className={s.title}>가로 미리보기</h2>
      </div>

      <div className={s.scarf}>
        {rows.map((r) => (
          <div key={r.gameKey} className={s.col} style={{ background: r.color }} />
        ))}
      </div>

      <div className={s.legend}>
        {legend.map((item) => (
          <div key={item.label} className={s.legendItem}>
            <div className={s.swatch} style={{ background: item.color }} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
