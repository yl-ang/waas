import { Transaction } from "./types";

const transactions: Transaction[] = [
    {
      id: 1,
      avatarSrc: 'https://pics.paypal.com/00/s/NjU4OWQ2NzQtZWFiZC00Y2U2LWEzZjUtZDZmMGD0NWU2MDc3/file.PNG',
      to_user: 'User1',
      from_user: 'YourUsername',
      date: new Date('2022-05-17'),
      transactionType: 'Automatic Payment',
      amount: 4.99,
    },
    {
      id: 2,
      avatarSrc: 'https://pics.paypal.com/00/s/NjU4OWQ2NzQtZWFiZC00Y2U2LWEzZjUtZDZmMGD0NWU2MDc3/file.PNG',
      to_user: 'User2',
      from_user: 'YourUsername',
      date: new Date('2022-03-18'),
      transactionType: 'Payment',
      amount: 10.99,
    },
    {
      id: 3,
      avatarSrc: 'https://pics.paypal.com/00/s/NjU4OWQ2NzQtZWFiZC00Y2U2LWEzZjUtZDZmMGD0NWU2MDc3/file.PNG',
      to_user: 'YourUsername',
      from_user: 'User3',
      date: new Date('2022-03-19'),
      transactionType: 'Payment Received',
      amount: 15.99,
    },
    {
      id: 4,
      avatarSrc: 'https://pics.paypal.com/00/s/NjU4OWQ2NzQtZWFiZC00Y2U2LWEzZjUtZDZmMGD0NWU2MDc3/file.PNG',
      to_user: 'User4',
      from_user: 'YourUsername',
      date: new Date('2022-06-20'),
      transactionType: 'Payment',
      amount: 8.99,
    },
    {
      id: 5,
      avatarSrc: 'https://pics.paypal.com/00/s/NjU4OWQ2NzQtZWFiZC00Y2U2LWEzZjUtZDZmMGD0NWU2MDc3/file.PNG',
      to_user: 'YourUsername',
      from_user: 'User5',
      date: new Date('2022-06-21'),
      transactionType: 'Payment Received',
      amount: 20.99,
    },
  ];

export { transactions };