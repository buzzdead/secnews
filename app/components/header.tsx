import Navbar from "./navbar";
import prisma from "../../lib/prisma";
import MobileNav from "./mobilenav";

const navbarItems = async () => {
  return await prisma.tag.findMany();
};

const Header = async () => {
  const tags = await navbarItems();
  return (
    <div className='transition-all'>
      <Navbar
        tags={tags}
        containerStyles="hidden md:flex mx-auto px-4 py-2 justify-center"
      />
      <MobileNav tags={tags} containerStyles="md:hidden" />
    </div>
  );
};

export default Header;
