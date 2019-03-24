export interface User {
  email: string; // <--
  password: string; // <--
  company?: string;
  country_code?: string; // <--
  first_name?: string; // <--
  last_name?: string; // <--
  mcc_id?: string;
  source?: string;
  website?: string;
}
