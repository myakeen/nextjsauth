import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
    providers: [
        {
          id: process.env.CLIENT_ID,
          name: process.env.ENV_NAME,
          type: "oauth",
          version: "2.0", 
          scope: 'openid',
          params: { grant_type: 'authorization_code' },
          accessTokenUrl: process.env.ACCESSTOKEN_URL,
          authorizationUrl: process.env.AUTHORIZATION_URL,
          profileUrl: process.env.PROFILE_URL,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          profile: (profile) => {
            return { ...profile, id: profile.sub }
          },
          
        } 
    ],
};

export default (req,res) => NextAuth(req, res, options);