import React, { useState } from 'react';

interface PaymentFormProps {
  onSubmit: (amount: number, recipient: string, type: 'send' | 'request') => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
  const [amount, setAmount] = useState<number>(0);
  const [recipient, setRecipient] = useState<string>('');
  const [paymentType, setPaymentType] = useState<'send' | 'request'>('send');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(amount, recipient, paymentType);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-600">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="recipient" className="block text-gray-600">
          Recipient:
        </label>
        <input
          type="text"
          id="recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Payment Type:</label>
        <select
          value={paymentType}
          onChange={(e) => setPaymentType(e.target.value as 'send' | 'request')}
          className="w-full p-2 border rounded-md"
        >
          <option value="send">Send Payment</option>
          <option value="request">Request Payment</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        {paymentType === 'send' ? 'Send' : 'Request'}
      </button>
    </form>
  );
};

export default PaymentForm;
