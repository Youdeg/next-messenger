import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials", 
            credentials: {
                name: { label: "Name", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                
                if (true) {
                  return {name: "f"}
                }

                return null
              }
        })
    ]
}