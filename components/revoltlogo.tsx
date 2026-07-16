// components/ReVoltLogo.tsx

import Image from "next/image";
import Link from "next/link";

export default function ReVoltLogo() {
  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src="/revoltai_logo.png"
        alt="ReVolt AI"
        width={220}
        height={70}
        priority
        className="h-12 w-auto object-contain"
      />
    </Link>
  );
}