
import connect from "@/utils/db";
import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import User from "@/models/User";

const handler= NextAuth({
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {

                await connect()

                try {
                    const user = await User.findOne({ email: credentials.email });
                    if (user) {
                        const isPassword = await bcrypt.compare(credentials.password, user.password)
                        if (isPassword) {
                            return user
                        } else {
                            throw new Error("Wrong credentials")
                        }
                    } else {
                        throw new Error("User not found")
                    }
                } catch (error) {
                    throw new Error(error)
                }
            }
        })
    ],
    pages: {
        error:"/dashboard/login"
    }
})

export {handler as GET, handler as POST}