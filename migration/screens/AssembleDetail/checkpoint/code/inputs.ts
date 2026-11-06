/** The route inputs of AssembleDetail, from the query string by their original names.
    @origin UBTConnect.Legacy_AssembleFlow.AssembleDetail */
export interface AssembleDetailInputs {
  EventId: string;
  SeriesId: string;
  /** Start (DateTime) as "yyyy-MM-ddTHH:mm:ss"; "" is the null DateTime. */
  Start: string;
  /** AssembleEventTypeTile: the title until the preload or the meeting gives one. */
  AssembleEventTypeTile: string;
}

/** The four inputs ("" when absent). Start keeps the wall-clock text of `dateTimeParam` without milliseconds or "Z". */
export function readAssembleDetailInputs(params: URLSearchParams): AssembleDetailInputs {
  return {
    EventId: params.get('EventId') ?? '',
    SeriesId: params.get('SeriesId') ?? '',
    Start: (params.get('Start') ?? '').replace(/\.\d+Z?$|Z$/, ''),
    AssembleEventTypeTile: params.get('AssembleEventTypeTile') ?? '',
  };
}
