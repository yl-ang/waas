export type Transaction = {
  id: number;
  avatarSrc: string;
  to_user: string;
  from_user: string;
  date: Date;
  transactionType: string;
  amount: number;
};


export interface Contact {
  id: number;
  name: string;
  avatarSrc: string;
  phone: string;
  email: string;
}