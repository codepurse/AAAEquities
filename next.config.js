const { createSecureHeaders } = require("next-secure-headers");
module.exports = {  
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              frameSrc: "'none'",
              imgSrc: "*",
              scriptSrc: "*",
            },
          },
          forceHTTPSRedirect: [
            true,
            { maxAge: 63072000, includeSubDomains: true },
          ],
          referrerPolicy: "same-origin",
          xssProtection: "block-rendering",
        }),
      },
    ];
  },
};
