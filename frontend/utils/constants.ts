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

const contacts = [
    {
      id: 1,
      name: 'John Doe',
      avatarSrc: '/avatars/john-doe.png',
      phone: '123-456-7890',
      email: 'john@example.com',
    },
    {
      id: 2,
      name: 'Alice Smith',
      avatarSrc: '/avatars/alice-smith.png',
      phone: '987-654-3210',
      email: 'alice@example.com',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      avatarSrc: '/avatars/bob-johnson.png',
      phone: '555-555-5555',
      email: 'bob@example.com',
    },
    {
      id: 4,
      name: 'Eva Green',
      avatarSrc: '/avatars/eva-green.png',
      phone: '111-222-3333',
      email: 'eva@example.com',
    },
    {
      id: 5,
      name: 'Michael Brown',
      avatarSrc: '/avatars/michael-brown.png',
      phone: '999-888-7777',
      email: 'michael@example.com',
    },
    {
      id: 6,
      name: 'Sarah Lee',
      avatarSrc: '/avatars/sarah-lee.png',
      phone: '777-888-9999',
      email: 'sarah@example.com',
    },
    {
      id: 7,
      name: 'David Wilson',
      avatarSrc: '/avatars/david-wilson.png',
      phone: '333-444-5555',
      email: 'david@example.com',
    },
    {
      id: 8,
      name: 'Olivia Adams',
      avatarSrc: '/avatars/olivia-adams.png',
      phone: '123-987-4567',
      email: 'olivia@example.com',
    },
    {
      id: 9,
      name: 'Daniel White',
      avatarSrc: '/avatars/daniel-white.png',
      phone: '555-666-7777',
      email: 'daniel@example.com',
    },
    {
      id: 10,
      name: 'Sophia King',
      avatarSrc: '/avatars/sophia-king.png',
      phone: '777-666-5555',
      email: 'sophia@example.com',
    },
  ];

export { transactions, contacts };