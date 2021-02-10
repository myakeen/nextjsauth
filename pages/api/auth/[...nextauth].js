import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
/*         Providers.IdentityServer4({ 
            name: "Eiffel", 
            scope: "openid", 
            domain:  "myncarb.dev.ncarb.dev/Login/issue/oidc/authorize",
            clientId: "nextjs_spike",
            response_type: "code",
            response_mode: "form_post",
            redirect_uri: "",
            clientSecret: "556e33f8926f48bbb7ab333bb87f5411"
          }), */
        {
          id: "nextjs_spike",
          name: "Eiffel", 
          scope: 'openid',
          params: { grant_type: 'authorization_code' },
          accessTokenUrl: `https://myncarb.dev.ncarb.dev/Login/issue/oidc/token`,
          authorizationUrl: `https://myncarb.dev.ncarb.dev/Login/issue/oidc/token?response_type=code`,
          profileUrl: `https://myncarb.dev.ncarb.dev/Login/issue/oidc/userinfo`,
          profile: (profile) => {
            return { ...profile, id: profile.sub }
          },
          
        } 
/*         Providers.Twitter({
            clientId: "",
            clientSecret: ""
        }),
        Providers.Email({
            server: {
                host: "",
                port: "",
                auth: {
                    user: "",
                    pass: ""
                }
            },
            from: "",
        }),
        {
            id: "google",
            name: "Google",
            type: "oauth",
            version: "2.0",
            scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
            params: { grant_type: "authorization_code" },
            accessTokenUrl: "https://accounts.google.com/o/oauth2/token",
            requestTokenUrl: "https://accounts.google.com/o/oauth2/auth",
            authorizationUrl: "https://accounts.google.com/o/oauth2/auth?response_type=code",
            profileUrl: "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
            async profile(profile) {
              return {
                id: profile.id,
                name: profile.name,
                email: profile.email,
                image: profile.picture
              }
            },
            clientId: "",
            clientSecret: ""
          } */
    ],
};

export default (req,res) => NextAuth(req, res, options);