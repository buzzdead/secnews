"use client"
import React from 'react';
import { signIn, useSession, signOut } from 'next-auth/react';

const Admin = () => {
    const {data: session, status, } = useSession();
    
    return (
        <div >
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