import { Metadata } from "next";
import ContactView from "./ContactView";

export const metadata: Metadata = {
    title: "Contact AI Skill Up Academy — Coimbatore AI Training Institute",
    description: "Get in touch with AI Skill Up Academy at Ram Nagar, Coimbatore. Call +91 96554 22511 or visit us for a free demo class today.",
    alternates: { canonical: 'https://www.aiskillup.in/contact' },
    openGraph: {
        title: "Contact AI Skill Up Academy — Coimbatore AI Training Institute",
        description: "Get in touch with AI Skill Up Academy at Ram Nagar, Coimbatore. Call +91 96554 22511 or visit us for a free demo class today.",
        url: 'https://www.aiskillup.in/contact',
        images: [{ url: 'https://www.aiskillup.in/images/aiskillup-banner1.jpeg' }],
    },
};

const ContactPage = () => {
    return (
        <ContactView />
    );
};

export default ContactPage;
