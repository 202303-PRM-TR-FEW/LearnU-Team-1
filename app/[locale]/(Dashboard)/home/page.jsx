import getCourses from "@/app/[locale]/lib/getCourses";
import CoursesCard from "@/app/[locale]/components/home/CoursesCard";
import Title from "@/app/[locale]/components/UI/Title";
import CategoryCard from "@/app/[locale]/components/home/CategoryCard";
import { TbWorld } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { BsLightbulbFill } from "react-icons/bs";
import LearningCard from "@/app/[locale]/components/home/LearningCard";
import { useSelector } from "react-redux";
import Link from "next/link";
export default async function page() {
    const courses = await getCourses();
    const myLearning = useSelector(state => state.user.myCourses);


    return (
        <div className="flex flex-col w-full h-full">
            <Title title="Featured Courses" />
            <div className="grid gap-2 mb-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {courses.map((course) => (
                    <CoursesCard key={course.id} id={course.id} title={course.courseName} img={course.img} mins={course.duration.mins} hours={course.duration.hours} rating={course.rating} price={course.price} trainer={course.trainerName} />
                ))}
            </div>
            <Title title="Categories" />
            <div className="flex flex-wrap items-center gap-4 mb-12 lg:flex-nowrap">
                <CategoryCard title="Web" Icon={TbWorld} />
                <CategoryCard title="Design" Icon={MdOutlineDesignServices} />
                <CategoryCard title="Wireframing" Icon={SiMaterialdesignicons} />
                <CategoryCard title="Marketing" Icon={BsLightbulbFill} />
                <CategoryCard title="Wireframing" Icon={SiMaterialdesignicons} />
                <CategoryCard title="Web" Icon={TbWorld} />
                <CategoryCard title="Marketing" Icon={BsLightbulbFill} />
                <CategoryCard title="Wireframing" Icon={SiMaterialdesignicons} />
            </div>
            <Title title="My Learning" />
            <div className="grid gap-4 lg:grid-cols-2">
                {myLearning.slice(0,2).map((course) => (
                    <LearningCard completed={70} key={course.id} id={course.id} title={course.courseName} img={course.img} trainer={course.trainerName} />
                ))}
                {myLearning.length > 2 && (
                    <Link href="/courses" className="flex items-center justify-center w-full h-32 p-4 text-2xl font-bold text-center text-white bg-slate-600 rounded-3xl">View All</Link>
                )}
            </div>
        </div>

    )
}