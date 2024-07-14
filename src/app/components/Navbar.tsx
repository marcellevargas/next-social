import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    return(
        <div className="">
            {/* LEFT */}
            <div className="">
                <Link href="/">Social App</Link>
            </div>
            {/* CENTER */}
            {/* RIGHT */}
            <div className="">
                <MobileMenu/>
            </div>
        </div>
    )
}

export default Navbar;