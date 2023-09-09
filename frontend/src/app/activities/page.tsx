'use client'

import Link from "next/link";
import Page from "../components/common/PageLayout";
import React, { useState } from 'react';
import { isTransactionFromCurrentUser } from "../../../utils/fomatters";
import { transactions } from "../../../utils/constants";
import { Transaction } from "../../../utils/types";


export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const filteredTransactions = transactions.filter((transaction: Transaction) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      transaction.transactionType.toLowerCase().includes(searchLower) ||
      transaction.date.toDateString().toLowerCase().includes(searchLower) ||
      transaction.to_user.toLowerCase().includes(searchLower)
    );
  });

  const groupTransactionsByMonth = () => {
    const grouped: { [monthYear: string]: Transaction[] } = {};

    filteredTransactions.forEach((transaction: Transaction) => {
      const monthYear = transaction.date.toLocaleString('default', {
        month: 'long',
        year: 'numeric',
      });

      if (!grouped[monthYear]) {
        grouped[monthYear] = [];
      }

      grouped[monthYear].push(transaction);
    });

    return grouped;
  };

  const groupedTransactions = groupTransactionsByMonth();

  return (
    <>
      <Page title={"Transactions"}>
        <div className='py-4'>
          <input
            type="text"
            placeholder="Search transactions"
            className="w-full px-4 py-2 border rounded-lg mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {Object.entries(groupedTransactions).map(([monthYear, transactions]) => (
            <div key={monthYear}>
              <h2 className="text-xl font-semibold mt-4">{monthYear}</h2>
              <div className="w-full overflow-y-auto max-h-72">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="bg-white rounded-lg shadow p-4 mb-4"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 overflow-hidden rounded-full">
                        <img
                          src={transaction.avatarSrc}
                          alt="User"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-semibold">
                          {isTransactionFromCurrentUser(
                            transaction,
                            'YourUsername'
                          )
                            ? 'Incoming Payment'
                            : transaction.to_user}
                        </div>
                        <div className="text-xs text-gray-500">
                          <span className="mr-1">
                            {transaction.date.toDateString()}
                          </span>
                          <span className="mr-1">·</span>
                          {transaction.transactionType}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div
                        className={`text-xl ${
                          isTransactionFromCurrentUser(
                            transaction,
                            'YourUsername'
                          )
                            ? 'text-green-500'
                            : 'text-red-500'
                        }`}
                      >
                        {isTransactionFromCurrentUser(
                          transaction,
                          'YourUsername'
                        )
                          ? ''
                          : '− '}{' '}
                        ${Math.abs(transaction.amount)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Page>
    </>
  );
}