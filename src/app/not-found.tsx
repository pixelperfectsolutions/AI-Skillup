import HeroSub from "@/app/components/SharedComponent/HeroSub";
import NotFound from "@/app/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | AI SKILL UP",
};

const ErrorPage = () => {
  return (
    <>
      <HeroSub
        title="404 - Page Not Found"
        subtitle="The page you are looking for might have been moved or doesn't exist."
        breadcrumbs={[{ label: '404' }]}
      />
      <NotFound />
    </>
  );
};

export default ErrorPage;
