import NextAuth from 'next-auth';
import KeycloakProvider from "next-auth/providers/keycloak";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        })
        ,
        KeycloakProvider({
            clientId: process.env.NEXT_PUBLIC_KEYCLOACK_ID!,
            clientSecret: process.env.NEXT_PUBLIC_KEYCLOAK_SECRET!,
            issuer: process.env.NEXT_PUBLIC_KEYCLOAK_ISSUER!
        }),
    ]
})