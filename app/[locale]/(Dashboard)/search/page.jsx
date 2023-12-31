
"use client";
import React, { useState, useEffect } from "react";
import SearchForm from "@/app/components/search/seachForm";
import getCourses from "@/app/lib/getCourses";
import { Reveal } from "@/app/components/UI/Reveal";
import {useTranslations} from 'next-intl';

function Page() {
  const t = useTranslations('search');

  const styling = {
    container: "ml-10 sm:ml-20",
    textHeader: "text-3xl font-semibold text-slate-700 dark:text-white undefined",
  };

  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedCourses = await getCourses();
        
        setCoursesData(fetchedCourses);
      } catch (error) {
        console.error("Error fetching courses data:", error);
      }
    }

    fetchData();
  }, []);
  

  const filterCourses = (selectedCategory, searchQuery) => {
    return coursesData.filter((course) => {
      const matchesCategory = selectedCategory === "" || course.category === selectedCategory;
      const matchesSearch =
        course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.trainerName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  return (
    <Reveal>
    <div className={styling.container}>
      <h1 className={styling.textHeader}>{t("title1")}</h1>
      <SearchForm filterCourses={filterCourses} />
    </div>
    </Reveal>
  );
}

export default Page;
