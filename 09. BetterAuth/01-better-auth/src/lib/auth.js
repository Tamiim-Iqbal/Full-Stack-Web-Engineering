import { betterAuth } from "better-auth";
import { Resend } from 'resend';
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const db = client.db();
const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    // Forgot Password
    sendResetPassword: async({user, url, token}) => {
      console.log("User:", user.email);
      console.log("Reset Password URL:", url);

      void resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: user.email,
        subject: "Reset your password",
        html: `
        <h1>Reset your password</h1>
        <p>Click <a href="${url}"> here </a> to reset your password.</p>
        <p>Ignore this email if you didn't request a password reset.</p>
        `,
      });
    }
  },
  // Email Verification
  emailVerification: {
    sendVerificationEmail:  async({user, url}) => {
      console.log("Email:", user.email);
      console.log("Verification URL:", url);

      void resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: user.email,
        subject: "Verify your email address",
        html: `
        <h1>Please verify your email address</h1>
        <p>Click <a href="${url}"> here </a> to verify your email.</p>
        `,
      });
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 24*7*3600     // 7 days
  },
  // Social Login : Google, Github
  socialProviders: {
    google: {
      clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET,
    },
    github: { 
            clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID, 
            clientSecret: process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET, 
        }, 
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});
