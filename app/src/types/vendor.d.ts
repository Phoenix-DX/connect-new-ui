/* Types for libraries that ship none. */
declare module 'wnumb' {
  interface WNumbFormatter {
    to: (value: number) => string;
    from: (value: string) => number | false;
  }
  const wNumb: (options?: Record<string, unknown>) => WNumbFormatter;
  export default wNumb;
}
