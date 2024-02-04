import { describe, expect, it } from 'vitest';

import { IHttpPostClient } from '@Data/protocols/http/http-post-client';

import { RemoteAuthentication } from './remote-authentication';

describe('Remote Authentication', () => {
  it('should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements IHttpPostClient {
      public url?: string;

      async post(url: string): Promise<void> {
        this.url = url;
      }
    }

    const url = 'any_url';

    const httpPostClientSpy = new HttpPostClientSpy();

    const systemUnderTest = new RemoteAuthentication(url, httpPostClientSpy);

    await systemUnderTest.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
