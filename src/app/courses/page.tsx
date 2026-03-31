import HeroSub from "@/app/components/SharedComponent/HeroSub";
import Courses from "@/app/components/Home/Courses";
import Placement from "@/app/components/Home/Placement";
import { Metadata } from "next";
import VideoGallery from "../components/SharedComponent/VideoGallery";

export const metadata: Metadata = {
    title: "All Courses | AI SKILL UP",
};

const AllCoursesPage = () => {
    return (
        <>
            <HeroSub
                title="Our Courses"
                subtitle="Explore our industry-relevant AI and tech courses designed for real-world careers."
                breadcrumbs={[{ label: 'Courses', href: '/courses' }]}
            />
            <div className="py-20">
                <Courses />
            </div>

            <VideoGallery />

            <Placement />
        </>
    );
};

export default AllCoursesPage;
