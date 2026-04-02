const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API thông tin sinh viên (Đây là nơi bạn đổi thông tin)
app.get('/about', (req, res) => {
  res.json({
    ho_ten: "Lê Đình Nguyên", // Đổi tên bạn ở đây
    mssv: "2251220246",      // Đổi MSSV ở đây
    lop: "22CT5"              // Đổi lớp ở đây
  });
});

app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});