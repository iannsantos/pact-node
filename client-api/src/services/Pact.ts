import { Pact } from '@pact-foundation/pact';
import path from 'path';

export default async function startMockService(): Promise<void> {
  const provider = new Pact({
    port: 1234,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    consumer: 'AccountApi',
    provider: 'ClientApi',
  });

  await provider.setup();
}
