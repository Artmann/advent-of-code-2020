import { Command, flags } from '@oclif/command';
import boxen = require('boxen');
import chalk = require('chalk');
import * as fs from 'fs';
import * as inquirer from 'inquirer';
import { join } from 'path';

class AdventOfCode2020 extends Command {
  static description = 'Solves advent of code problems.';

  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' })
  };

  static args = [
    { name: 'day' }
  ];

  async readInput(day: number): Promise<string> {
    const inputPath = join(__dirname, 'inputs', `day${ day }-puzzle.txt`);

    if (!fs.existsSync(inputPath)) {
      return '';
    }

    return fs.promises.readFile(inputPath, 'utf8');
  }

  async solvePuzzle(day: number): Promise<void> {
    const puzzlePath = join(__dirname, 'puzzles', `day${ day }`);

    if (!fs.existsSync(puzzlePath)) {
      console.log('This puzzle has not been solved yet.');

      return;
    }

    const { puzzle1, puzzle2 } = require(puzzlePath);
    const input = await this.readInput(day);

    let output = '';

    [ puzzle1, puzzle2 ].forEach((puzzle, index: number): void => {
      const startTime = Date.now();
      const result = puzzle(input);
      const endTime = Date.now();
      const duration = (endTime - startTime);

      output += `\nPuzzle ${ index + 1 } (${ duration }ms)\n`;
      output += `${ chalk.yellow.bold(result) }\n`;
    });

    console.log(
      boxen(
        output,
        {
          align: 'center',
          padding: 1,
          margin: 1
        }
      )
    );
  }

  async run() {
    const { args } = this.parse(AdventOfCode2020);

    if (args.day) {
      return await this.solvePuzzle(parseInt(args.day, 10));
    }

    const answers = await inquirer.prompt({
      choices: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
      message: 'For which day do you want to solve the puzzles?',
      name: 'day',
      type: 'list'
    });

    await this.solvePuzzle(parseInt(answers.day, 10));
  }
}

export = AdventOfCode2020;
