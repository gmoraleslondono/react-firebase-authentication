import admin from "../firebaseAdmin.js";

// verify token
export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  console.log("Token from verifyToken:", token);

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    // Verify the token using Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // Attach user info to request object
    next(); // Call the next middleware or route handler
  } catch (error) {
    console.error("Error verifying token:", error.message);
    res.status(401).json({ message: "Unauthorized" });
  }
};
