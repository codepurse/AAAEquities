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
          referrerPolicy: "same-origin",
          xssProtection: "block-rendering",
        }),
      },
    ];
  },
};
