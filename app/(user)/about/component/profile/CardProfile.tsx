

import { Card } from "flowbite-react";
import Image from "next/image";

export default function CardProfile() {
  return (
    <Card
      className="w-[170px] flex flex-col items-center " // Added flex and items-center classes to center the content
      renderImage={() => <Image width={100} height={100} src="/profile.jpg" alt="image 1"  className="rounded-full mt-5"/>}
      >
      <h5 className="text-lg tracking-tight text-gray-900 dark:text-white">
        susu
      </h5>
    </Card>
  );
}
