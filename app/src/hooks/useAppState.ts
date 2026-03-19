import { useCallback, useMemo } from 'react';
import type { AppState, ScarfColors, SeriesType, TeamCode } from '../types/game.types';
import { TEAM_COLORS } from '../constants/teams';
import { DEFAULT_STATE, STORAGE_KEY } from '../constants/defaults';
import { useLocalStorage } from './useLocalStorage';

type AppActions = {
  setSeason: (season: number) => void;
  setTeam: (team: TeamCode) => void;
  setAwaySame: (awaySame: boolean) => void;
  toggleSeries: (series: SeriesType) => void;
  setColor: (key: keyof AppState['colors'], value: string) => void;
  toggleChecked: (gameKey: string) => void;
  scarfColors: ScarfColors;
};

export function useAppState(): [AppState, AppActions] {
  const [state, setState] = useLocalStorage<AppState>(STORAGE_KEY, DEFAULT_STATE);

  const setSeason = useCallback(
    (season: number) => setState((prev) => ({ ...prev, season, checked: {} })),
    [setState],
  );

  const setTeam = useCallback(
    (team: TeamCode) => {
      const tc = TEAM_COLORS[team];
      setState((prev) => ({
        ...prev,
        team,
        colors: { ...prev.colors, homeWin: tc.win, homeDraw: tc.draw, homeLoss: tc.loss },
        checked: {},
      }));
    },
    [setState],
  );

  const setAwaySame = useCallback(
    (awaySame: boolean) => setState((prev) => ({ ...prev, awaySame })),
    [setState],
  );

  const toggleSeries = useCallback(
    (series: SeriesType) =>
      setState((prev) => {
        const has = prev.series.includes(series);
        if (has && prev.series.length <= 1) return prev;
        return {
          ...prev,
          series: has ? prev.series.filter((s) => s !== series) : [...prev.series, series],
        };
      }),
    [setState],
  );

  const setColor = useCallback(
    (key: keyof AppState['colors'], value: string) =>
      setState((prev) => ({ ...prev, colors: { ...prev.colors, [key]: value } })),
    [setState],
  );

  const toggleChecked = useCallback(
    (gameKey: string) =>
      setState((prev) => {
        const next = { ...prev.checked };
        if (next[gameKey]) {
          delete next[gameKey];
        } else {
          next[gameKey] = true;
        }
        return { ...prev, checked: next };
      }),
    [setState],
  );

  const scarfColors: ScarfColors = useMemo(() => {
    const { colors, awaySame } = state;
    const home = { win: colors.homeWin, draw: colors.homeDraw, loss: colors.homeLoss };
    return {
      home,
      away: awaySame ? home : { win: colors.awayWin, draw: colors.awayDraw, loss: colors.awayLoss },
    };
  }, [state]);

  return [state, { setSeason, setTeam, setAwaySame, toggleSeries, setColor, toggleChecked, scarfColors }];
}
