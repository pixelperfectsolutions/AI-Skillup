import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | AI SKILL UP",
};

const TermsPage = () => {
    return (
        <>
            <HeroSub
                title="Terms & Conditions"
                subtitle="Please read these terms carefully before using our services."
                breadcrumbs={[{ label: 'Terms & Conditions' }]}
            />
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <h3 className="text-3xl font-bold mb-6">Terms of Use</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            By accessing or using AI SKILL UP's services, you agree to comply with and be bound by the following terms and conditions.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Course Enrollment</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Enrollment in our courses is subject to availability and specific prerequisites as outlined on each course page.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Intellectual Property</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            All course content, materials, and resources provided by AI SKILL UP are protected by copyright and other intellectual property laws.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Changes to Terms</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We reserve the right to update or modify these terms at any time. Your continued use of the site constitutes acceptance of the revised terms.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TermsPage;
