"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, useSession, signOut } from 'next-auth/react';
import styles from '../page.module.css'

const Admin = () => {
    const {data: session, status, } = useSession();
    
    return (
        <div className={styles.main} >
        <h1>Admin</h1>
        {status === "authenticated" ?
        <div>
        <div>logged in</div>
        <button onClick={() => signOut()}>Sign out</button>
        </div>
        :
        <button onClick={() => signIn('github')}>Sign in</button>
        
    }
        </div>
    );
    }

export default Admin;