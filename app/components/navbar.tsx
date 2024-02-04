import React from 'react';
import prisma from '../../lib/prisma';
import Link from 'next/link';

const navbarItems = async () => {
    return await prisma.tag.findMany()
}

const Navbar: React.FC = async () => {
    const tags = await navbarItems()
    return (
        <nav className="container mx-auto px-4 py-2 flex justify-center">
            <div className="flex space-x-4">
                {tags.map((tag, index) => (
                    <Link key={index} style={{transition: "background 0.3s"}} className="block py-2 px-4 text-white hover:bg-gray-700" href="#">
                        {tag.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;