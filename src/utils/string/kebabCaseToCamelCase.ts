export const kebabCaseToCamelCase = (kebabCase: string) =>
  kebabCase.replace(/-./g, (x) => x[1].toUpperCase());
