import {Customer} from './customer.model';

export interface AuthData {
  access_token: string;
  customer: Customer;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}

