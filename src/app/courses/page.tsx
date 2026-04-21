import HeroSub from "@/app/components/SharedComponent/HeroSub";
import CoursesGrid from "@/app/components/Home/Courses/CoursesGrid";
import Placement from "@/app/components/Home/Placement";
import { Metadata } from "next";
import VideoGallery from "../components/SharedComponent/VideoGallery";
import { CourseData } from "@/data/siteData";

export const metadata: Metadata = {
    title: "Best Software Training Courses in Coimbatore | AI Skill Up Academy",
    description: "Explore Coimbatore's best software training courses with placement at AI Skill Up Academy. Join our Full Stack, UI/UX, and AI development programs today.",
    alternates: { canonical: 'https://aiskillup.in/courses' }
};

const AllCoursesPage = () => {
    return (
        <>
            <HeroSub
                title="Best Software Training Courses in Coimbatore with Placement"
                subtitle="Join the only AI-native training academy in Coimbatore. Our expert-led courses use real AI tools to prepare you for tomorrow's high-paying IT jobs."
                breadcrumbs={[{ label: 'Courses', href: '/courses' }]}
            />
            
            <div className="container py-12">
                <h2 className="text-3xl font-black text-midnight_text mb-6">Expert-Led IT Training in Coimbatore</h2>
                <p className="text-lg text-black/60 leading-relaxed mb-8 max-w-4xl">
                    Discover the most industry-relevant <strong>software training courses in Coimbatore</strong> at AI Skill Up Academy. 
                    From <strong>full stack development course Coimbatore</strong> to specialized <strong>UI UX design course Coimbatore</strong>, 
                    we offer comprehensive programs designed to bridge the skill gap. 
                    Our curriculum focuses on hands-on learning with 100% placement support, 
                    ensuring you are interview-ready for top tech firms.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-10">
                    {['Full Stack', 'UI/UX', 'No-Code', 'Digital Marketing', 'Data Science'].map((cat) => (
                        <button key={cat} className="px-6 py-2 rounded-full border border-gray-200 font-bold hover:bg-primary hover:text-white transition-all">
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="pb-20">
                <CoursesGrid initialData={CourseData} />
            </div>

            <VideoGallery />

            <Placement />
        </>
    );
};

export default AllCoursesPage;
