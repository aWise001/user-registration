import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-password"
                }
            },
            async authorize(credentials) {
                const user = { id: "1", name: "Axel", password: process.env.ADMIN_PASSWORD};
                if(credentials.username === user.name && credentials.password === user.password) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ]
};