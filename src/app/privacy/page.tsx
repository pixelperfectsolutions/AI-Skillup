import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | AI SKILL UP",
};

const PrivacyPage = () => {
    return (
        <>
            <HeroSub
                title="Privacy Policy"
                subtitle="Your privacy matters. Learn how we collect, use, and protect your information."
                breadcrumbs={[{ label: 'Privacy Policy' }]}
            />
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <h3 className="text-3xl font-bold mb-6">Introduction</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            At AI SKILL UP, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Information We Collect</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We may collect personal information such as your name, email address, and phone number when you contact us or register for our courses.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">How We Use Your Information</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Your information is used to provide and improve our services, communicate with you, and ensure a personalized learning experience.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Data Security</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We implement industry-standard security measures to protect your data from unauthorized access or disclosure.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPage;
