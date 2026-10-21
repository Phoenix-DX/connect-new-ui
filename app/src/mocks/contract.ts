import { http, HttpResponse, type RequestHandler } from 'msw';
import type { ActionInputs, ActionOutputs, PathOf } from '../lib/api';
import { UserException, answerOfException, isRaisedByServer } from '../lib/os-exceptions';
import { emptyLists, mockDelay, scenario } from './scenario';

/* A mock handler typed by the API contract, for fictional data (P-MOCKS) and mutations (P-MUTATION):
     contractHandler('Module', 'ActionName', (inputs) => outputs)
     contractHandler('Module', 'Owner/DataActionName', (inputs) => outputs)
   `inputs` and the returned outputs have the contract's types, so fictional data with a wrong shape does not compile.
   Recorded data uses recordedHandler (src/mocks/fixtures.ts), checked against the contract by contract_gen.py.
   Server exceptions: when `answer` throws one (raiseUserException, or e.g. new SecurityException(...) from
   src/lib/os-exceptions.ts), the handler sends the contract's error answer { error, exception, specificType? } with
   HTTP 500 and callAction raises the same exception in the app.
   Scenarios (?mock=...): error → HTTP 500 without an exception (callAction: CommunicationException, as the runtime
   treats any failed answer, OutSystems.js:3), empty → every list emptied, loading → never answers. */
export function contractHandler<M extends string, A extends string>(
  module: M,
  action: A,
  answer: (inputs: ActionInputs<PathOf<M, A>>) => ActionOutputs<PathOf<M, A>> | Promise<ActionOutputs<PathOf<M, A>>>,
): RequestHandler {
  return http.post(`/api/${module}/${action}`, async ({ request }) => {
    await mockDelay();
    if (scenario() === 'error') return HttpResponse.json({ error: 'mock error' }, { status: 500 });
    const body: unknown = await request.json().catch(() => ({}));
    const inputs = (typeof body === 'object' && body !== null ? body : {}) as ActionInputs<PathOf<M, A>>;
    let data: ActionOutputs<PathOf<M, A>>;
    try {
      data = await answer(inputs);
    } catch (error) {
      if (isRaisedByServer(error)) return HttpResponse.json(answerOfException(error), { status: 500 });
      throw error;
    }
    return HttpResponse.json({ data: scenario() === 'empty' ? emptyLists(data) : data });
  });
}

/** Raise a User Exception from a mock answer, as a server action's Raise Exception does: the app's callAction raises
    UserException(message), with the specific type of a named user exception ('<Module>.<Name>') when given. */
export function raiseUserException(message: string, specificType = ''): never {
  throw new UserException(message, specificType);
}
