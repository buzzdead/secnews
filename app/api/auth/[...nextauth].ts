// imports
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth"
import prisma from '../../../lib/prisma';

// importing providers
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next/types";

const authHandler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};