import { OutputTarget } from './../Reporter';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
