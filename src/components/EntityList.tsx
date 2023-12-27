import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Person {
  _id: string;
  name: string;
  userName: string;
  colour: string;
  count: string;
  tokenNumber: string;
  email: string;
  contactNumber: string;
  date: string;
}

const TableTwo: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get<any>(
          'http://localhost:5000/api/admin/list-entity',
        );
        setPeople(response.data.list);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);
  console.log(people);
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="mb-4"></div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-7 p-2.5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            Agent Name
          </h5>
          <h5 className="text-sm font-medium uppercase xsm:text-base text-center">
            UserName
          </h5>
          <h5 className="text-sm font-medium uppercase xsm:text-base text-center">
            Token Number
          </h5>
          <h5 className="hidden text-sm font-medium uppercase xsm:text-base text-center sm:block">
            Count
          </h5>
          <h5 className="hidden text-sm font-medium uppercase xsm:text-base text-center sm:block">
            Email
          </h5>
          <h5 className="hidden text-sm font-medium uppercase xsm:text-base text-center sm:block">
            Date
          </h5>
          <h5 className="hidden text-sm font-medium uppercase xsm:text-base text-center sm:block">
            Phone
          </h5>
         
        </div>

        {people.map((person) => (
          <div
            key={person._id}
            className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-7 p-2.5"
          >
            <div className="flex items-center gap-3">
              <p className="text-black dark:text-white">{person.name}</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-black dark:text-white">{person.userName}</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-meta-3">{person.tokenNumber}</p>
            </div>
            <div className="hidden items-center justify-center sm:flex">
              <p className="text-black dark:text-white">{person.count}</p>
            </div>
            <div className="hidden items-center justify-center sm:flex">
              <p className="text-meta-5">{person.email}</p>
            </div>
            <div className="hidden items-center justify-center sm:flex">
              <p className="text-meta-5">{formatDate(person.date)}</p>
            </div>
            <div className="hidden items-center justify-center sm:flex">
              <p className="text-meta-5">{person.contactNumber}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableTwo;
