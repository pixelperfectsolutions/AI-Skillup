import { Metadata } from "next";
import ContactView from "./ContactView";

export const metadata: Metadata = {
    title: "Contact Us | AI SKILL UP Academy",
    description: "Get in touch with AI SKILL UP Academy for AI powered design and development courses in Coimbatore.",
};

const ContactPage = () => {
    return (
        <ContactView />
    );
};

export default ContactPage;
