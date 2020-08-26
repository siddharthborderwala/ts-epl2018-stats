import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Reporter {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static winsAnalysisWithConsoleReport(team: string): Reporter {
    return new Reporter(new WinsAnalysis(team), new ConsoleReport());
  }

  report(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
