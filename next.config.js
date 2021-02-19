const { createSecureHeaders } = require("next-secure-headers");
module.exports = {  
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
      
          referrerPolicy: "same-origin",
          xssProtection: "block-rendering",
        }),
      },
    ];
  },
};
