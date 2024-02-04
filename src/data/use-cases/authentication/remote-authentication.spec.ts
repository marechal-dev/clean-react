import { describe, expect, it } from 'vitest';

import { HttpPostClientSpy } from '@Data/test/mock-http-client';

import { RemoteAuthentication } from './remote-authentication';

describe('Remote Authentication', () => {
  it('should call HttpPostClient with correct URL', async () => {
    const url = 'any_url';

    const httpPostClientSpy = new HttpPostClientSpy();

    const systemUnderTest = new RemoteAuthentication(url, httpPostClientSpy);

    await systemUnderTest.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
