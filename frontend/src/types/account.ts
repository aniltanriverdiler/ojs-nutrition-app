export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  phone?: string;
  phoneCountryCode?: string;
}

export interface Address {
  id: string;
  title: string; 
  name: string;
  surname: string;
  address: string;
  city: string;
  district: string;
  phone?: string;
  phoneCountryCode?: string;
}

export interface AccountInfo {
  user: User;
  addresses: Address[];
}
