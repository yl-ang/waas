'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import PageLayout from '../../components/common/PageLayout';
import PrimaryButton from '@/app/components/ui/PrimaryButton';
import ContactList from '@/app/components/payments/ContactsList';
import { contacts } from '../../../../utils/constants';

export default function Dashboard() {
  const router = useRouter();

  const handleContactSelect = (contactId: number) => {
    router.push(`preview/request/${contactId}`);
  };

  return (
    <PageLayout title="Send Payment">
      <div className="flex flex-col pt-3">
        <div className="flex space-x-4">
          <PrimaryButton
            handler={() => router.push('/payments/pay')}
            loading={false}
            disabled={false}
            width={'full'}
            height={'full'}
          >
            Pay
          </PrimaryButton>
          <PrimaryButton
            handler={() => router.push('/payments/request')}
            loading={false}
            disabled={false}
            width={'full'}
            height={'full'}
          >
            Request
          </PrimaryButton>
        </div>
        <div className="mt-6">
          <ContactList onContactSelect={handleContactSelect} contacts={contacts} />
        </div>
      </div>
    </PageLayout>
  );
}
