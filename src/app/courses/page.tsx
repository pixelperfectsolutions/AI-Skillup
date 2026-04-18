import HeroSub from "@/app/components/SharedComponent/HeroSub";
import CoursesGrid from "@/app/components/Home/Courses/CoursesGrid";
import Placement from "@/app/components/Home/Placement";
import { Metadata } from "next";
import VideoGallery from "../components/SharedComponent/VideoGallery";

export const metadata: Metadata = {
    title: "All Courses in Coimbatore | AI SKILL UP Academy",
    description: "Explore all AI-powered courses at AI SKILL UP Academy in Coimbatore — Python, Data Science, Full Stack, UI/UX, Mobile App, Digital Marketing & more.",
};

const AllCoursesPage = () => {
    return (
        <>
            <HeroSub
                title="All Courses in Coimbatore"
                subtitle="Explore our full range of AI-powered, industry-relevant tech courses designed to launch real-world careers."
                breadcrumbs={[{ label: 'Courses', href: '/courses' }]}
            />
            <div className="py-20">
                <CoursesGrid />
            </div>

            <VideoGallery />

            <Placement />
        </>
    );
};

export default AllCoursesPage;
