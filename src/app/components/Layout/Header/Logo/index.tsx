import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.png"
        alt="AI SKILL UP Academy"
        width={200}
        height={60}
        style={{ width: "auto", height: "45px" }}
        quality={100}
      />
    </Link>

  );
};

export default Logo;
