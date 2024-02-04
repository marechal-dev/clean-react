import { IHttpPostClient } from '@Data/protocols/http/http-post-client';

export class RemoteAuthentication {
  public constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient,
  ) {}

  public async auth(): Promise<void> {
    await this.httpPostClient.post(this.url);
  }
}
