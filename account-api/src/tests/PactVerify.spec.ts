import { Verifier } from '@pact-foundation/pact';

describe('Pact verification', () => {
  it('checking if provider agrees with consumer', async () => {
    const verify = new Verifier({
      providerBaseUrl: 'http://localhost:3334',
      pactBrokerUrl: 'http://localhost',
      provider: 'AccountApi',
      publishVerificationResult: true,
      providerVersion: '1.0.0',
    });

    await verify
      .verifyProvider()
      .then(() => console.log('Pact verification complete'))
      .catch(err => console.log(err));
  });
});
