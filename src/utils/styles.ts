export function parseStylesVariableAsNumber(variable: string) {
  const parsed = parseInt(variable);

  if (isNaN(parsed)) return 0;

  return parsed;
}
