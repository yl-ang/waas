import React from 'react';
import { Transaction } from '../../../../utils/types';
import { isTransactionFromCurrentUser } from '../../../../utils/fomatters';
import { transactions } from '../../../../utils/constants';

const TransactionHistory: React.FC = () => {
  
  return (
    <div className="w-full overflow-y-auto" style={{ maxHeight: '400px' }}>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="bg-white rounded-lg shadow p-4 mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 overflow-hidden rounded-full">
              <img src={transaction.avatarSrc} alt="User" className="object-cover w-full h-full" />
            </div>
            <div className="ml-4">
              <div className="text-lg font-semibold">{isTransactionFromCurrentUser(transaction, 'YourUsername') ? 'Incoming Payment' : transaction.to_user}</div>
              <div className="text-xs text-gray-500">
                <span className="mr-1">{transaction.date.toDateString()}</span>
                <span className="mr-1">·</span>
                {transaction.transactionType}
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
          <div className={`text-xl ${isTransactionFromCurrentUser(transaction, 'YourUsername') ? 'text-green-500' : 'text-red-500'}`}>
              {isTransactionFromCurrentUser(transaction, 'YourUsername') ? '' : '− '} ${Math.abs(transaction.amount)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;
