'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import PageLayout from '../../components/common/PageLayout';
import PaymentForm from '../../components/payments/PaymentForm';
import PrimaryButton from '@/app/components/ui/PrimaryButton';
import { Router } from 'next/router';

export default function Dashboard() {
  const router = useRouter();

  const handlePaymentSubmit = (amount: number, recipient: string, type: 'send' | 'request') => {
    // Handle payment submission here based on the type (send or request).
  };

  return (
    <PageLayout title="Request Payment">
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
          <PaymentForm onSubmit={handlePaymentSubmit} />
        </div>
      </div>
    </PageLayout>
  );
}
