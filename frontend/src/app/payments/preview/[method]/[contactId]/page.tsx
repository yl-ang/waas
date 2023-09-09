'use client'

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import PageLayout from '../../../../components/common/PageLayout';
import { Contact } from '../../../../../../utils/types';
import PaymentForm from '@/app/components/payments/PaymentForm';
import { contacts } from '../../../../../../utils/constants';
import Card from '@/app/components/ui/Card';

export default function PaymentPreview() {
  const params = useParams();

  const [selectedContact, setSelectedContact] = useState<Contact | undefined>(undefined);

  const handlePaymentSubmit = (amount: number) => {
    console.log(`Payment submitted to ${selectedContact?.name} amount: ${amount}`);
  };

  useEffect(() => {
    const contactId = params.contactId;
    const type = params.method;
    const fetchContactDetails = async () => {
      try {
        const response = await fetch(`/api/contact/${contactId}`); //replace this
        if (response.ok) {
          const contactData = await response.json();
          setSelectedContact(contactData);
        } else {
          const foundContact = contacts.find((contact) => contact.id.toString() === contactId);
          setSelectedContact(foundContact);

          console.error('Set as temp contact');
        }
      } catch (error) {
        console.error('Error fetching contact details:', error);
      }
    };

    if (contactId) {
      fetchContactDetails();
    }
  }, [params.contactId]);

  return (
    <PageLayout title="Payment Preview">
      <div className="flex flex-col pt-3">
        <Card title={'Contact Details'}>
          <h2>Contact Details</h2>
            <p>Name: {selectedContact?.name}</p>
            <PaymentForm paymentType={params.method} onSubmit={handlePaymentSubmit} />
        </Card>
      </div>
    </PageLayout>
  );
}
