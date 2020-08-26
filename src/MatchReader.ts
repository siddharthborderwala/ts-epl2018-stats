import { CsvFileReader } from './CsvFileReader';
import { dateStrToDate } from './utils';
import { MatchResult } from './MatchResult.enum';
import { MatchData } from './MatchData';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]) => [
      dateStrToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3], 10),
      parseInt(row[4], 10),
      row[5] as MatchResult,
      row[6],
    ]);
  }
}
