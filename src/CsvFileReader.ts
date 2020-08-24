import fs from 'fs';
import { dateStrToDate } from './utils';
import { MatchResult } from './MatchResult.enum';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, 'utf-8')
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(
        (row: string[]): MatchData => [
          dateStrToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3], 10),
          parseInt(row[4], 10),
          row[5] as MatchResult,
          row[6],
        ]
      );
  }
}
