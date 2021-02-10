import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        {
          id: "nextjs_spike",
          name: "Eiffel",
          type: "oauth",
          version: "2.0", 
          scope: 'openid',
          params: { grant_type: 'authorization_code' },
          accessTokenUrl: ``,
          authorizationUrl: ``,
          profileUrl: ``,
          clientId: '',
          clientSecret: '',
          profile: (profile) => {
            return { ...profile, id: profile.sub }
          },
          
        } 
    ],
};

export default (req,res) => NextAuth(req, res, options);