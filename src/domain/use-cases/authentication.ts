import { IAccount } from '@Domain/models/account';

export interface IAuthenticationParams {
  email: string;
  password: string;
}

export interface IAuthentication {
  auth(params: IAuthenticationParams): Promise<IAccount>;
}
