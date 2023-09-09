import React, { useState } from 'react';
import { Contact } from '../../../../utils/types';

type ContactListProps = {
  contacts: Contact[];
  onContactSelect: (contactId: number) => void;
};

const ContactList: React.FC<ContactListProps> = ({ contacts, onContactSelect }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContactClick = (contactId: number) => {
    onContactSelect(contactId);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <input
        type="text"
        placeholder="Search contacts"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="py-3 px-4 bg-[rgba(22, 24, 35, 0.06)] rounded-full relative overflow-hidden z-10"
      />

      <div className="w-full flex-col flex gap-y-4 overflow-y-auto h-[400px]" style={{ maxHeight: '400px' }}>
        <ul className="grid grid-cols-1 gap-4">
          {filteredContacts.map((contact) => (
            <li
              key={contact.id}
              onClick={() => handleContactClick(contact.id)}
              className="bg-white p-4 rounded-lg flex flex-row items-center cursor-pointer hover:bg-gray-200"
            >
              <div className="relative rounded-full overflow-hidden w-20 h-20 m-4">
                <img
                  src={contact.avatarSrc}
                  alt={contact.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-start flex flex-col">
                <p className="font-semibold">{contact.name}</p>
                <p className="text-gray-500 text-sm">{contact.phone}</p>
                <p className="text-gray-500 text-sm">{contact.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;
