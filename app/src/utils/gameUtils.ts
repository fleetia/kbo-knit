import type { Game, GameResult, ScarfColors, ScarfRow, SeriesType, TeamCode } from '../types/game.types';
import { TEAM_NAMES } from '../constants/teams';

export function getTeamGames(
  games: Game[],
  teamCode: TeamCode,
  seriesFilter: SeriesType[],
): Game[] {
  return games
    .filter(
      (g) =>
        (g.homeTeam === teamCode || g.awayTeam === teamCode) &&
        seriesFilter.includes(g.seriesType) &&
        g.awayScore !== null && g.homeScore !== null,
    )
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getGameResult(game: Game, teamCode: TeamCode): {
  isHome: boolean;
  result: GameResult;
  myScore: number;
  opScore: number;
} {
  const isHome = game.homeTeam === teamCode;
  const myScore = (isHome ? game.homeScore : game.awayScore) ?? 0;
  const opScore = (isHome ? game.awayScore : game.homeScore) ?? 0;

  if (myScore > opScore) {
    return { isHome, result: 'win', myScore, opScore };
  }
  if (myScore < opScore) {
    return { isHome, result: 'loss', myScore, opScore };
  }
  return { isHome, result: 'draw', myScore, opScore };
}

export function buildScarfRows(
  games: Game[],
  teamCode: TeamCode,
  colors: ScarfColors,
): ScarfRow[] {
  return games.map((game) => {
    const { isHome, result, myScore, opScore } = getGameResult(game, teamCode);
    const colorSet = isHome ? colors.home : colors.away;
    const opponent = isHome ? game.awayTeam : game.homeTeam;

    return {
      gameKey: game.gameKey,
      color: colorSet[result],
      result,
      isHome,
      date: game.date,
      opponent: TEAM_NAMES[opponent] ?? opponent,
      score: `${myScore}:${opScore}`,
      prefix: isHome ? 'H' as const : 'A' as const,
    };
  });
}

export function countResults(rows: ScarfRow[]): { wins: number; draws: number; losses: number } {
  return rows.reduce(
    (acc, r) => {
      if (r.result === 'win') { return { ...acc, wins: acc.wins + 1 }; }
      if (r.result === 'draw') { return { ...acc, draws: acc.draws + 1 }; }
      return { ...acc, losses: acc.losses + 1 };
    },
    { wins: 0, draws: 0, losses: 0 },
  );
}
