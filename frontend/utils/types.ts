export type Transaction = {
    id: number;
    avatarSrc: string;
    to_user: string;
    from_user: string;
    date: Date;
    transactionType: string;
    amount: number;
  };