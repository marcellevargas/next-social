import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link className="font-bold text-xl text-blue-600" href="/">
          Social App
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%]">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2 ">
            <Image
              src="/home.png"
              alt="Homepage Image"
              width={16}
              height={16}
            />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex gap-2 ">
            <Image
              src="/friends.png"
              alt="friendspage Image"
              width={16}
              height={16}
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex gap-2 ">
            <Image
              src="/stories.png"
              alt="storiespage Image"
              width={16}
              height={16}
            />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
