import { useState, useCallback } from 'react';
import type { ScarfRow, ScarfColors } from '../../types/game.types';
import { RESULT_LABELS } from '../../constants/teams';
import * as s from './ScarfPreview.css';

type Props = {
  rows: ScarfRow[];
  colors: ScarfColors;
  awaySame: boolean;
  wins: number;
  draws: number;
  losses: number;
  checked: Record<string, boolean>;
  onToggleCheck: (gameKey: string) => void;
};

type LegendItem = {
  label: string;
  color: string;
};

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

export function ScarfPreview({ rows, colors, awaySame, wins, draws, losses, checked, onToggleCheck }: Props) {
  const legend = buildLegend(colors, awaySame);
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const handleRowClick = useCallback(
    (gameKey: string) => {
      const isMobile = window.matchMedia('(hover: none)').matches;
      if (isMobile) {
        if (expandedKey === gameKey) {
          onToggleCheck(gameKey);
          setExpandedKey(null);
        } else {
          setExpandedKey(gameKey);
        }
      } else {
        onToggleCheck(gameKey);
      }
    },
    [expandedKey, onToggleCheck],
  );

  return (
    <div className={s.container}>
      <div className={s.header}>
        <span className={s.stats}>
          {rows.length}경기 | {wins}승 {draws}무 {losses}패
        </span>
      </div>

      <div className={s.scarf}>
        {rows.map((r) => {
          const isDone = checked[r.gameKey];
          const isExpanded = expandedKey === r.gameKey;
          return (
            <div
              key={r.gameKey}
              className={`${s.row} ${isDone ? s.done : ''} ${isExpanded ? s.expanded : ''}`}
              onClick={() => handleRowClick(r.gameKey)}
            >
              <div className={s.bar} style={{ background: r.color }}>
                <span className={s.tooltip}>
                  {r.date} {r.prefix} vs {r.opponent} {r.score} {RESULT_LABELS[r.result]}
                </span>
              </div>
            </div>
          );
        })}
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
