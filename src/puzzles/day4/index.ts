// Find the number of valid passwords.

function validateRequiredFields(passportData: object): boolean {
  const requiredFields = [ 'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid' ];
  const passportFields = Object.keys(passportData);

  return requiredFields.every(field => passportFields.includes(field));
}

function validateFieldValues(passportData: any): boolean {
  const range = (value: string, min: number, max: number): boolean => parseInt(value, 10) >= min && parseInt(value, 10) <= max;
  const height = (value: string): boolean => {
    if (!/^\d+(in|cm)$/.test(value)) {
      return false;
    }

    if (value.includes('in')) {
      return range(value.replace('in', ''), 59, 76);
    }

    return range(value.replace('cm', ''), 150, 193);
  };
  const hex = (value: string): boolean => /^#[a-f0-9]{6}$/.test(value);
  const color = (value: string): boolean => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value);
  const pid = (value:string): boolean => /^[0-9]{9}$/.test(value);

  return [
    range(passportData.byr, 1920, 2002),
    range(passportData.iyr, 2010, 2020),
    range(passportData.eyr, 2020, 2030),
    height(passportData.hgt),
    hex(passportData.hcl),
    color(passportData.ecl),
    pid(passportData.pid)
  ].every(Boolean);
}

function parsePassportData(input: string): object[] {
  const groups = input.split(/^\s*$(?:\r\n?|\n)/m);

  return groups.map(group => {
    const pairs = group.split(/[\n\s]/).filter(Boolean);

    return pairs
      .map(p => p.split(':'))
      .reduce((carry: any, [ key, value ]) => ({
        ...carry,
        [ key ]: value
      }), {});
  });
}

export function puzzle1(input: string): number {
  const passportData = parsePassportData(input);

  return passportData.filter(validateRequiredFields).length;
}

export function puzzle2(input: string): number {
  const passportData = parsePassportData(input);

  return passportData
    .filter(validateRequiredFields)
    .filter(validateFieldValues)
    .length;
}
