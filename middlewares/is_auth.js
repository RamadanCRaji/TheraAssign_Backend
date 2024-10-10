const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });

module.exports = {
   authorizer: function (req, res, next) {
      console.log("i made it here");
      const authHeader = req.header("Authorization");
      console.log({ authHeader });
      if (!authHeader) {
         return res.status(401).json({ error: "Unauthorized, Access Denied" });
      }

      const access_token = authHeader.split(" ")[1];

      try {
         // Verify the token and save it in the variable
         const secret = process.env.SECRET;
         const decodedToken = jwt.verify(access_token, secret);

         // Attach the decoded token to the request object for further use
         req.user = decodedToken;
         console.log({ decodedToken });

         next();
      } catch (err) {
         console.error("Token verification failed:", err.message);
         res.status(401).json({ error: "Unauthorized, Access Denied" });
      }
   },
};

// https://juffalow.com/blog/javascript/express-server-with-jwt-authentication
