import SignUp from "@/app/components/Auth/SignUp";
import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | AI SKILL UP",
};

const SignupPage = () => {
  return (
    <>
      <HeroSub
        title="Sign Up"
        subtitle="Join AI SKILL UP and start building future-ready skills today."
        breadcrumbs={[{ label: 'Sign Up' }]}
      />
      <SignUp />
    </>
  );
};

export default SignupPage;
