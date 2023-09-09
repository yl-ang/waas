import React, { useState } from 'react';
import { Contact } from '../../../../utils/types';
import { currencies } from '../../../../utils/constants';
import { formatAsMoney } from '../../../../utils/fomatters';
import PrimaryButton from '../ui/PrimaryButton';
import { useRouter } from 'next/navigation';
import SecondaryButton from '../ui/SecondaryButton';

interface PaymentFormProps {
  onSubmit: (amount: number, recipient: string) => void;
  paymentType: string | string[];
  contact: Contact | undefined;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit, paymentType, contact }) => {
  const router = useRouter();
  const [amount, setAmount] = useState<number>(0);
  const [recipient, setRecipient] = useState<string>('');
  const [currency, setCurrency] = useState<string>('USD');
  const [note, setNote] = useState<string>('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const parsedAmount = parseFloat(inputValue);
    
    if (!isNaN(parsedAmount)) {
      setAmount(parsedAmount);
    } else {
      setAmount(0); // Set to 0 if it's not a valid number
    }
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(amount, recipient);
  };

  return (
    <form className="p-6" onSubmit={handleSubmit}>
      <div className="mb-4">
        <div className="flex justify-center">
          <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              
              fill="currentColor"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
            </svg>
          </div>
          <div className="ml-4">
            <div className="font-semibold text-lg">{contact?.name}</div>
            <div className="text-gray-500">{contact?.email}</div>
          </div>
        </div>
      </div>
      <div className="mb-4 flex flex-row justify-center items-center">
        <div className="flex w-full text-center items-center justify-center">
          <input
            type="number"
            className="outline-none text-3xl text-center"
            placeholder="0.00"
            value={amount}            
            onChange={handleAmountChange}
          />
        </div>
      </div>
      <div className="mb-4 text-center justify-center">
        <select
          className="w-1/7 py-2 pl-2 pr-8 outline-none text-center justify-center"
          value={currency}
          onChange={handleCurrencyChange}
        >
          {currencies.map((currency: string) => (
            <option key={currency} value={currency}>
          {currency}
    </option>
  ))}
        </select>
      </div>
      <div className="mb-4 md:px-20 px-2">
        <textarea
          className="w-full p-2 border rounded-lg outline-none"
          placeholder="What’s this for?"
          value={note}
          onChange={handleNoteChange}
        />
      </div>
      <div className="text-sm text-gray-500 mb-4 md:px-20 px-2">
        For more information, please read our{' '}
        <a
          href="https://www.tiktok.com/legal/privacy-policy-row?lang=en"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Privacy Policy
        </a>
        .
      </div>
      <div className="flex items-center justify-center gap-x-4">
          <PrimaryButton
            handler={() => router.push(`/success`)}
            loading={false}
            disabled={false}
            width={'1/3'}
            height={'full'}
          >
            {paymentType === 'pay' ? 'Pay' : 'Request'}
          </PrimaryButton>
          <SecondaryButton
          handler={() => router.push(`/payments/${paymentType}`)}
          loading={false}
          disabled={false}
          width={'1/3'} 
          logo={undefined}>
            Cancel
          </SecondaryButton>
      </div>
    </form>
  );
};

export default PaymentForm;
