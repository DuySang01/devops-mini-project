// Backend server for DevOps project
const express = require('express');
const cors = require('cors'); // QUAN TRỌNG: Phải có cái này để Frontend gọi được API
const dotenv = require('dotenv');

dotenv.config(); 
const app = express();

app.use(cors()); // Cho phép Frontend truy cập
app.use(express.json());

// API thông tin sinh viên (Yêu cầu 3.1)
app.get('/about', (req, res) => {
    res.json({
        ho_ten: "Văn Quý Duy Sang", 
        mssv: "2251220230",
        lop: "22CT5"
    });
});

// API Health Check (Yêu cầu 3.2)
app.get('/health', (req, res) => {
    res.status(200).json({ "status": "ok" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server chạy ở port ${PORT}`));