import { IHttpPostClient } from '@Data/protocols/http/http-post-client';

export class HttpPostClientSpy implements IHttpPostClient {
  public url?: string;

  async post(url: string): Promise<void> {
    this.url = url;
  }
}
