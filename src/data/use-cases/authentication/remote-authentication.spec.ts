import { describe, expect, it } from 'vitest';

import { HttpPostClientSpy } from '@Data/test/mock-http-client';

import { RemoteAuthentication } from './remote-authentication';

type SystemUnderTestTypes = {
  systemUnderTest: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSystemUnderTest = (url: string = 'any_url'): SystemUnderTestTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();

  const systemUnderTest = new RemoteAuthentication(url, httpPostClientSpy);

  return {
    systemUnderTest,
    httpPostClientSpy,
  };
};

describe('Remote Authentication', () => {
  it('should call HttpPostClient with correct URL', async () => {
    const url = 'other_url';

    const { systemUnderTest, httpPostClientSpy } = makeSystemUnderTest(url);

    await systemUnderTest.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
