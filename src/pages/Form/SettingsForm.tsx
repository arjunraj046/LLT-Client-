import React, { useState } from 'react';
import axios from 'axios';
// import Breadcrumb from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { HexColorPicker } from 'react-colorful';

const FormLayout2 = () => {
  const [user, setUser] = useState({
    startRange:'',
    endRange:''
  });

  // const [range, setRange] = useState<{ min: number; max: number }>({
  //   min: 2,
  //   max: 10,
  // });
  const [color, setColor] = useState('#aabbcc');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // const handleRangeChange = (value: number | { min: number; max: number }) => {
  //   // If the value is a number, update only the 'min' property
  //   if (typeof value === 'number') {
  //     setRange((prevRange) => ({
  //       ...prevRange,
  //       min: value,
  //     }));
  //   } else {
  //     // If the value is an object, update the entire 'range' state
  //     setRange(value);
  //   }
  // };

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userWithColor = { ...user, color };

      // Replace the URL with your actual registration endpoint
      const response = await axios.post(
        'http://localhost:5000/api/admin/enitity-rang',
        userWithColor
      );
      console.log(userWithColor);
      console.log('Added successfully:', response.data);
      alert('Added successfully !');
    } catch (error) {
      console.error('Error adding settings:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      {/* <Breadcrumb pageName="Add Settings" /> */}

      <div className="flex flex-col gap-9">
        <div className="rounded-xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Entity Form
            </h3>
          </div>
          <form onSubmit={handleRegistration} className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Start Range
              </label>
              <input
                type="number"
                name="startRange"
                placeholder="Enter the start range"
                value={user.startRange}
                onChange={handleChange}
                className="w-2/3 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                End Range
              </label>
              <input
                type="number"
                name="endRange"
                placeholder="Enter the end range"
                value={user.endRange}
                onChange={handleChange}
                className="w-2/3 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            {/* <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Select Range
              </label>
              <InputRange
                maxValue={20}
                minValue={0}
                value={range}
                onChange={handleRangeChange}
              />
            </div> */}

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Select Color
              </label>
              <HexColorPicker color={color} onChange={setColor} />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="flex justify-center rounded bg-primary p-3 font-medium text-gray ml-50"
              >
                Save
              </button>
              <Link
                to="/settings"
                className="flex justify-center rounded bg-primary p-3 font-medium text-gray ml-3"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormLayout2;
