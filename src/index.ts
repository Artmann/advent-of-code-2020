import { Command, flags } from '@oclif/command';
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

  async readInput(day: number): Promise<[ string, string ]> {
    const inputPath = join(__dirname, 'inputs');

    const readFile = async (path: string): Promise<string> => {
      const absolutePath = join(inputPath, path);

      if (!fs.existsSync(absolutePath)) {
        return '';
      }

      return fs.promises.readFile(absolutePath, 'utf8');
    };

    return [
      await readFile(`day${ day }-puzzle1.txt`),
      await readFile(`day${ day }-puzzle2.txt`)
    ];
  }

  async solvePuzzle(day: number): Promise<void> {
    const puzzlePath = join(__dirname, 'puzzles', `day${ day }`);

    if (!fs.existsSync(puzzlePath)) {
      console.log('This puzzle has not been solved yet.');

      return;
    }

    const { puzzle1, puzzle2 } = require(puzzlePath);
    const [ firstInput, secondInput ] = await this.readInput(day);

    [ [puzzle1, firstInput], [puzzle2, secondInput] ].forEach(([puzzle, input], index: number): void => {
      const startTime = Date.now();
      const result = puzzle(input);
      const endTime = Date.now();
      const duration = (endTime - startTime) / 1_000.0;

      console.log(`Puzzle ${ index + 1 } (${ duration }s)`);
      console.log('');
      console.log(result);
      console.log('');
    });
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
