import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/app/lib/clientPromise"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    secret: process.env.NEXT_AUTH_SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
      ]
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}