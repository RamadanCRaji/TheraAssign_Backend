const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

module.exports = {
   authorizer: function (req, res, next) {
      const authHeader = req.header("Authorization");
      if (!authHeader) {
         console.log("Authorization Header is missing");
         return res.status(401).json({ error: "Unauthorized, Access Denied" });
      }

      const [scheme, access_token] = authHeader.split(" ");
      if (scheme !== "Bearer" || !access_token) {
         console.log("Invalid authorization format");
         return res.status(401).json({ error: "Invalid authorization format" });
      }

      try {
         // Verify the token and save it in the variable
         const secret = process.env.SECRET;
         console.log("Secret Key:", secret);

         const decodedToken = jwt.verify(access_token, secret);

         // Attach the decoded token to the request object for further use
         req.user = decodedToken;
         console.log("Decoded Token:", decodedToken);

         next();
      } catch (err) {
         console.error("Token verification failed:", err.message);
         res.status(401).json({ error: "Unauthorized, Access Denied" });
      }
   },
};

// https://juffalow.com/blog/javascript/express-server-with-jwt-authentication
