import fs from 'fs';
import { OutputTarget } from './../Reporter';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Matches Report</title>
        </head>
        <body>
          <div id="root">${report}</div>
        </body>
      </html>
     `;

    fs.writeFileSync('report.html', html.trim());
  }
}
