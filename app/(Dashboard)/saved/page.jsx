"use client"
import React from 'react';
import { useContext } from 'react'
import { useSelector } from "react-redux";


const MyComponent = () => {

    const user = useSelector((state) => state.user);
    const savedCoursesId = user.savedCourses
    

  
  console.log(savedCoursesId)
  return (
    <div>
    </div>
  );
};

export default MyComponent;
