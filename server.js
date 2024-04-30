const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 3000;

// Route untuk mendapatkan semua produk
app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Tidak dapat mengambil data" });
  }
});

// Route untuk mendapatkan produk berdasarkan ID
app.get("/products/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${req.params.id}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Tidak dapat mengambil data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
