import { Reporter } from './Reporter';
import { MatchReader } from './MatchReader';

/*
const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
*/
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const reporter = new Reporter(new WinsAnalysis('Man United'), new ConsoleReport());
const reporter = Reporter.winsAnalysisWithConsoleReport('Man United');
reporter.report(matchReader.matches);

/*
const reporter2 = new Reporter(new WinsAnalysis('Chelsea'), new HtmlReport());
reporter2.report(matchReader.matches);
*/
