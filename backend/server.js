// 🔗 server.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Charge les variables du fichier .env

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connecté à MongoDB"))
.catch((err) => console.error("❌ Erreur de connexion :", err));
