export function exhaustiveGuard(_: never, errorMessage: string): never {
  throw new Error(errorMessage);
}
