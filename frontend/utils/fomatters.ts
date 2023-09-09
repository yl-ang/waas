import { Transaction } from "./types";

export function formatAsMoney(number: number, currencyCode: string = 'USD', locale: string = 'en-US'): string {
  const formattedNumber = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
  }).format(number);

  return formattedNumber;
}

export const isTransactionFromCurrentUser = (transaction: Transaction, currentUser: string) => {
  return transaction.from_user !== currentUser;
};
  