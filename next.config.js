const { createSecureHeaders } = require("next-secure-headers");
module.exports = {  
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
        
          forceHTTPSRedirect: [
            true,
            { maxAge: 63072000, includeSubDomains: true },
          ],
          referrerPolicy: "same-origin",
          xssProtection: "block-rendering",
          frameGuard: "sameorigin"
        }),
      },
    ];
  },
};
