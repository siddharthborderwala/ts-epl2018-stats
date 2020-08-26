import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from '../MatchResult.enum';
import { dateStrToDate } from '../utils';
import { MatchData } from '../MatchData';

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStrToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3], 10),
      parseInt(row[4], 10),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
