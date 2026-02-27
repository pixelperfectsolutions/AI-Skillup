import Signin from "@/app/components/Auth/SignIn";
import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | AI SKILL UP",
};

const SigninPage = () => {
  return (
    <>
      <HeroSub
        title="Sign In"
        subtitle="Access your account to continue your AI learning journey."
        breadcrumbs={[{ label: 'Sign In' }]}
      />
      <Signin />
    </>
  );
};

export default SigninPage;
