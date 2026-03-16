import { useMemo } from 'react';
import { useAppState } from './hooks/useAppState';
import { useKboData } from './hooks/useKboData';
import { getTeamGames, buildScarfRows, countResults } from './utils/gameUtils';
import { SeasonSelector } from './components/season-selector/SeasonSelector';
import { TeamSelector } from './components/team-selector/TeamSelector';
import { SeriesFilter } from './components/series-filter/SeriesFilter';
import { ColorPicker } from './components/color-picker/ColorPicker';
import { ScarfPreview } from './components/scarf-preview/ScarfPreview';
import { ScarfHorizontal } from './components/scarf-horizontal/ScarfHorizontal';
import { BuyMeCoffee } from './components/buy-me-coffee/BuyMeCoffee';
import { KnittingGuide } from './components/knitting-guide/KnittingGuide';
import * as s from './App.css';

export function App() {
  const [state, actions] = useAppState();
  const { games, isLoading, error } = useKboData(state.season);

  const filteredGames = useMemo(
    () => getTeamGames(games, state.team, state.series),
    [games, state.team, state.series],
  );

  const scarfRows = useMemo(
    () => buildScarfRows(filteredGames, state.team, actions.scarfColors),
    [filteredGames, state.team, actions.scarfColors],
  );

  const { wins, draws, losses } = useMemo(() => countResults(scarfRows), [scarfRows]);

  return (
    <div className={s.app}>
      <h1 className={s.title}>KBO 뜨개 목도리 패턴</h1>
      <p className={s.subtitle}>경기 결과를 목도리 배색 패턴으로 만들어보세요</p>

      <div className={s.settings}>
        <SeasonSelector value={state.season} onChange={actions.setSeason} />
        <TeamSelector value={state.team} onChange={actions.setTeam} />
        <SeriesFilter active={state.series} onToggle={actions.toggleSeries} />

        <div className={s.toggleGroup}>
          <label className={s.toggleRow}>
            <span className={s.toggle}>
              <input
                type="checkbox"
                className={s.toggleInput}
                checked={!state.awaySame}
                onChange={(e) => actions.setAwaySame(!e.target.checked)}
              />
              <span className={s.slider} />
            </span>
            <span className={s.toggleLabel}>홈/원정 색상 분리</span>
          </label>
        </div>

        <ColorPicker
          colors={state.colors}
          awaySame={state.awaySame}
          onColorChange={actions.setColor}
        />
      </div>

      <BuyMeCoffee />

      {isLoading && <p className={s.loading}>데이터 로딩 중...</p>}
      {error && <p className={s.error}>{error}</p>}

      {!isLoading && !error && (
        <>
          <ScarfHorizontal
            rows={scarfRows}
            colors={actions.scarfColors}
            awaySame={state.awaySame}
          />

          <ScarfPreview
            rows={scarfRows}
            colors={actions.scarfColors}
            awaySame={state.awaySame}
            wins={wins}
            draws={draws}
            losses={losses}
            checked={state.checked}
            onToggleCheck={actions.toggleChecked}
          />

          <KnittingGuide
            rows={scarfRows}
            checked={state.checked}
            onToggleCheck={actions.toggleChecked}
          />
        </>
      )}

      <footer className={s.footer}>
        <a
          className={s.footerLink}
          href="https://github.com/fleetia/kbo-knit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <div className={s.footerCredits}>
          inspired by{' '}
          <a className={s.footerLink} href="https://x.com/hook_h_" target="_blank" rel="noopener noreferrer">
            뜨개일기님
          </a>
          의{' '}
          <a
            className={s.footerLink}
            href="https://x.com/hook_h_/status/2022222157271662923"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline' }}
          >
            트윗
          </a>
          <br />
          dev by Lamer the Frog
        </div>
      </footer>
    </div>
  );
}
