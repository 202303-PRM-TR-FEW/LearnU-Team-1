"use client"
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useContext } from 'react'
import { DarkModeContext } from '../layout'
import getCourses from '@/app/lib/getCourses';
import CourseDescription from '@/app/components/overview/description';
import CourseContent from '@/app/components/overview/content'
import { loadStripe } from '@stripe/stripe-js';
import { setMyLearning } from '@/store/userSlice'
import axios from 'axios'
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
import { Reveal } from '@/app/components/UI/Reveal';

const Overview = () => {
  const [coursesData, setCoursesData] = useState([]);
  const  setyling = {
    container: "preview flex flex-col sm:flex-row font-bold rounded-lg",
    containerDark: " PreviewDark flex flex-col sm:flex-row font-bold rounded-lg",
    preview: "w-full w-full sm:w-screen-1/2 p-5 space-y-7",
    overview: "contentOfOverview w-full sm:w-screen-1/2 h-max p-10 sm:m-5 rounded-lg",
    overviewDark: "OverviewDark w-full sm:w-screen-1/2 h-max p-10 sm:m-5 rounded-lg",
    button: 'bg-transparent hover:bg-blue-500 text-lg text-blue-700 font-semibold hover:text-white px-20 py-1 border border-blue-500 hover:border-transparent rounded-lg ml-4',
  }
  const dispatch = useDispatch();

  const mode = useContext(DarkModeContext)
  const isDark = !mode

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedCourses = await getCourses();
        setCoursesData(fetchedCourses);
      } catch (error) {
        console.error('Error fetching courses data:', error);
      }
    }

    fetchData();
  }, []);

  const user = useSelector((state) => state.user);
  const recommendedData = user.recommendedData;
  const recommendedCourseId = recommendedData?.courseId;
  const savedCoursesId = user.myCourses
  const recommendedCourse = coursesData.find((course) => course.id === recommendedCourseId);
  const isRecommendedCourseSaved = savedCoursesId.some((course) => course.id === recommendedCourseId);
  


  const handleBuy = async (e) => {
    e.preventDefault();
    const stripe = await stripePromise;
    const response = await axios.post('https://learnu.vercel.app/api/checkout_sessions', {
        price,
        title,
        img,
    });
    if (response.status === 200) {
        dispatch(setMyLearning({ id }))
    }
    console.log(response)
    const { sessionId } = response.data;
    const { error } = await stripe.redirectToCheckout({
        sessionId,
    });
}
  return (
    <div className='overv'>
      <Reveal>
      {recommendedCourse && (
        <div className={`${isDark? setyling.containerDark : setyling.container}`}>
          <div className={setyling.preview}>
          <CourseDescription isDark={isDark}  selectedCourse={recommendedCourse} />
          </div>
          
          <div className={`${isDark? setyling.overviewDark : setyling.overview}`}>
            <h1 className='pb-5 font-semibold text-slate-700 dark:text-white undefined'>Course Overview</h1>
            <CourseContent isDark={isDark}/>
            <div className='flex items-center justify-center'>
            {!isRecommendedCourseSaved && (
              <form >
              <button onSubmit={handleBuy} className={setyling.button}>
              Buy Now
            </button>
            </form>
            )}
            </div>
          </div>
        </div>
      )}
      </Reveal>
    </div>
  );
};

export default Overview;
