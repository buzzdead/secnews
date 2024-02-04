import React from 'react';
import prisma from '../../lib/prisma';
import styles from '../page.module.css'

const navbarItems = async () => {
    return await prisma.tag.findMany()
}

const Navbar: React.FC = async () => {
    const tags = await navbarItems()
    return (
        <nav>
            <ul className={styles.navbar}>
                {tags.map((tag, index) => (
                    <li key={index} >
                        <a href="#" >{tag.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;