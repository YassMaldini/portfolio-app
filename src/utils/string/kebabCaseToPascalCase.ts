export function kebabCaseToPascalCase(kebabCase: string) {
  return kebabCase.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(str: string) {
  return str.replace(/-/, '').toUpperCase();
}
