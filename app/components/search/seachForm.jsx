"use client"

import React from 'react';
import { useState } from 'react';
import MapContainer from './ratingAndLevel'

// Define the object with class names
const classNames = {
  maxContainer: ' my-10 container',
  buttonsContainer: 'md:flex md:flex-wrap grid grid-cols-2 gap-4 my-10 ' ,
  form: 'flex items-center sm:max-w-2xl lg:max-w-2xl   ',
  input: 'bg-gray-50 px-6 py-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
  button: 'bg-transparent hover:bg-blue-500 text-lg text-blue-700 font-semibold hover:text-white px-7 py-2 border border-blue-500 hover:border-transparent rounded-lg ml-4',
  SearchCatButtons: 'item max-w-xs px-6 py-3 mr-2 text-lg  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
  categoryContainerText: "w-330 h-13 flex-grow-1 m-0 overflow-hidden text-sm font-semibold uppercase text-left tracking-normal leading-4 whitespace-pre-line opacity-100 visible font-sans",
  checkContainer: 'my-5 container ',
  itemsResponsivnes: "md:flex md:flex-wrap grid grid-cols-2 gap-4"
};

function SearchForm() {
  const [checkedItems, setCheckedItems] = useState({});

  const marketingTopics = [
    'Marketing Strategy',
    'UX design',
    'Excel',
    'Adobe Photoshop',
    'CRM',
    'Photography',
    'Content Marketing',
  ];


  const options = [
    'sales', 
    'HR', 
    'drawing', 
    'Big Data', 
    'Design'
  ];

  
  

  const handleCheckboxChange = (event) => {
    const { id } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const checkboxes = options.map((option, index) => (
    <label htmlFor={`checkboxLabel${index}`} className="item max-w-10 border border-transparent flex cursor-pointer select-none items-center mb-3 sm:mb-6 mr-7" key={index}>
      <div className="relative">
        <input
          type="checkbox"
          id={`checkboxLabel${index}`}
          className="sr-only sm: "
          checked={checkedItems[`checkboxLabel${index}`] || false}
          onChange={handleCheckboxChange}
        />
        <div className="box mr-2 flex h-7 w-7 items-center justify-center rounded-lg border">
          <span className={`opacity-${checkedItems[`checkboxLabel${index}`] ? '100' : '0'}`}>
            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                fill="#3056D3"
                stroke="#3056D3"
                strokeWidth="0.4"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      {option}
    </label>
  ));
  
  
  
    const buttons = marketingTopics.map((topic, index) => (
      <button type='button' className={classNames.SearchCatButtons} key={index} name={topic}>{topic}</button>
    ));

   

  return (
    <div className=''>

      <div className={classNames.maxContainer}>
        <form className={classNames.form}>
          <input
            type="text"
            id="simple-search"
            className={classNames.input}
            placeholder="Search categories"
            required
          />
          <button
            type="submit"
            className={classNames.button}
          >
          <span>search</span>
          </button>
        </form>
      </div>

      <hr className="w-11/12 mb-3" />
      <span className={classNames.categoryContainerText}>TOP SEARCHES</span>

      <div className={classNames.maxContainer}>
          <div className={classNames.buttonsContainer}>
            {buttons}
          </div>
      </div>
      
      <hr className="w-11/12 mb-3"/>
      <span className={classNames.categoryContainerText}>CATEGORIES</span>

      <div className={classNames.checkContainer}>
        <div className={classNames.itemsResponsivnes}>
        {checkboxes}
        </div>
      </div>

      <hr className="w-11/12 mb-3"/>
        <div className='md:flex md:flex-wrap grid grid-cols-1 '>

          <div className=''>
             <span className={classNames.categoryContainerText}>RATING</span>
           <div className={classNames.maxContainer}>
             <MapContainer />
           </div>
          </div>

          <div className=''>
            <span className={classNames.categoryContainerText}>LEVEL</span>
          </div>

        </div>
    </div>
  );
}

export default SearchForm;
