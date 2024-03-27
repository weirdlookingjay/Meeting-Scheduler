import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="hidden lg:block">
        <Image
          src="/profile1.jpg"
          alt="Profile"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute right-36"
        />
        <Image
          src="/profile3.jpg"
          alt="Profile"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute top-48 left-16"
        />
        <Image
          src="/profile2.jpg"
          alt="Profile"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute bottom-20 left-36"
        />
        <Image
          src="/profile4.jpg"
          alt="Profile"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute bottom-32 right-16"
        />
      </div>
      <div className="text-center max-w-3xl">
        <h2 className="font-bold text-[60px] text-slate-700">
          Easy scheduling ahead
        </h2>
        <h2 className="text-xl mt-5 text-slate-500">
          Scheduly is your scheduling automation platform for eliminating the
          back-and-forth emails to find the perfect time -- and so much more.
        </h2>
        <div className="flex gap-4 flex-col mt-5">
          <h3 className="text-sm">Sign Up free with Gogle and Github</h3>
          <div className="flex justify-center gap-8">
            <Button className="p-7 flex gap-4">
              <Image src="/google.png" alt="Google" width={30} height={30} />
              Sign up with Google
            </Button>
            <Button className="p-7 flex gap-4">
              <Image src="/github.png" alt="Github" width={30} height={30} />
              Sign up with Github
            </Button>
          </div>
          <hr />
          <h2>
            <Link href="" className="text-primary">
              Sign up Free with Email.
            </Link>{" "}
            No Credit card required.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
