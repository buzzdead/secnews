import React from 'react';
import Link from 'next/link';

interface Props {
    containerStyles: string
    tags: {id: string, name: string}[]
}

const Navbar: React.FC<Props> = async ({containerStyles, tags}: Props) => {
    return (
        <nav className={containerStyles}>
            <div className="flex space-x-4">
                <Link key={'home'}  style={{transition: "background 0.3s"}} className="block py-2 px-4 text-white hover:bg-gray-700" href="../">Hjem</Link>
                {tags.map((tag, index) => (
                    <Link key={index} style={{transition: "background 0.3s"}} className="block py-2 px-4 text-white hover:bg-gray-700" href={`/tags/${tag.name}`}>
                        {tag.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;