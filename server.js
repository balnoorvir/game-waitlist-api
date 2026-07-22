const express = require("express");

const app = express();

app.use(express.json());

const waitlistRoutes = require("./routes/waitlist");

app.use("/api/waitlist", waitlistRoutes);
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});