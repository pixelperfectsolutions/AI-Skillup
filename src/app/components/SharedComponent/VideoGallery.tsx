"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const videos = [
    {
        id: 1,
        title: "AI Learning Journey",
        description: "Experience our state-of-the-art training methodology and student transformations.",
        url: "/images/Aiskillup final out.mp4",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Career Mentorship",
        description: "Our dedicated guidance program to bridge the gap between classroom and career.",
        url: "/images/Career Guidence.mp4",
        thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=2069&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Curriculum Showcase",
        description: "A deep dive into our modular courses and hands-on project sequences.",
        url: "/images/entire sequence.mp4",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Future of Skills",
        description: "How integrating AI into your skillset ensures future-proof career growth.",
        url: "/images/Final Add Ai Skillup.mp4",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    }
];

const VideoGallery = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="mb-6">Academy <span className="text-primary">Video Library</span></h2>
                    <p className="max-w-2xl mx-auto">Explore our training atmosphere, student success stories, and expert insights in Coimbatore.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {videos.map((v) => (
                        <div 
                            key={v.id} 
                            onClick={() => setSelectedVideo(v.url)}
                            className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 aspect-[9/16] cursor-pointer bg-black transition-all duration-700 hover:-translate-y-4 hover:shadow-primary/20"
                        >
                            {/* Background Video (Cover) */}
                            <video 
                                src={v.url} 
                                className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-700"
                                preload="metadata"
                                muted
                                playsInline
                                onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLVideoElement).pause();
                                    (e.target as HTMLVideoElement).currentTime = 0;
                                }}
                            />

                            {/* Content Overlay - Always visible title, description on hover */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black via-black/30 to-transparent">
                                <div className="mb-6 transform transition-transform duration-700 group-hover:-translate-y-2">
                                    <h3 className="text-2xl font-black text-white mb-3 leading-tight drop-shadow-2xl">{v.title}</h3>
                                    <div className="h-0.5 w-12 bg-primary mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
                                    <p className="text-white/90 text-sm font-semibold leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-6 group-hover:translate-y-0">
                                        {v.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.2em] text-[10px]">
                                    <span className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center shadow-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                                        <Icon icon="solar:play-bold" width={24} />
                                    </span>
                                    EXPLORE NOW
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal (Library View with padding) */}
            {selectedVideo && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 md:p-12 lg:p-16">
                    <div className="absolute inset-0 bg-black/98 backdrop-blur-2xl" onClick={() => setSelectedVideo(null)}>
                        <button className="absolute top-6 right-6 md:top-10 md:right-10 p-3 rounded-full bg-white/10 text-white hover:bg-primary hover:rotate-90 transition-all duration-500">
                            <Icon icon="solar:close-circle-bold" width={40} />
                        </button>
                    </div>
                    <div className="relative w-full max-w-lg max-h-full flex items-center justify-center animate__animated animate__fadeInUp">
                        <div className="w-full bg-black rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 p-2">
                            <video 
                                src={selectedVideo} 
                                controls 
                                autoPlay 
                                playsInline
                                className="w-full h-auto max-h-[80vh] block mx-auto rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default VideoGallery;
