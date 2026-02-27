import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { Documentation } from "@/app/components/Documentation/Documentation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Documentation | AI SKILL UP",
};

export default function Page() {
    return (
        <>
            <HeroSub
                title="Documentation"
                subtitle="Everything you need to know about our platform and courses."
                breadcrumbs={[{ label: 'Documentation' }]}
            />
            <Documentation />
        </>
    );
};
