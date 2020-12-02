
function isValidPasswordForSledRentalPlace(passwordString: string): boolean {
  const [ policy, password ] = passwordString.split(': ');
  const [ rules, requiredLetter ] = policy.split(' ');
  const [ min, max ] = rules.split('-').map(s => parseInt(s, 10));

  const numberOfOccurrences = password.split('').filter(c => c === requiredLetter).length;

  return numberOfOccurrences >= min && numberOfOccurrences <= max;
}

function isValidPasswordForTobogganCoporate(passwordString: string): boolean {
  const [ policy, password ] = passwordString.split(': ');
  const [ rules, requiredLetter ] = policy.split(' ');
  const [ firstPosition, secondPosition ] = rules.split('-').map(s => parseInt(s, 10));

  const characters = password.split('');
  const firstCharacter = characters[ firstPosition - 1 ];
  const secondCharacter = characters[ secondPosition - 1 ];

  if (firstCharacter === requiredLetter && secondCharacter === requiredLetter) {
    return false;
  }

  if (firstCharacter === requiredLetter) {
    return true;
  }

  if (secondCharacter === requiredLetter) {
    return true;
  }

  return false;
}

export function puzzle1(input: string): number {
  const passwords = input.split('\n').map(e => e.trim()).filter(Boolean);

  const numberOfValidPasswords = passwords.filter(isValidPasswordForSledRentalPlace).length;

  return numberOfValidPasswords;
}

export function puzzle2(input: string): number {
  const passwords = input.split('\n').map(e => e.trim()).filter(Boolean);

  const numberOfValidPasswords = passwords.filter(isValidPasswordForTobogganCoporate).length;

  return numberOfValidPasswords;
}
