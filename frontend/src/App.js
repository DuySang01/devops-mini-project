import React, { useEffect, useState } from 'react';

function App() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Gọi API từ Backend (đảm bảo port 5000 đúng với backend của bạn)
    fetch('http://localhost:5000/about')
      .then(response => response.json())
      .then(data => setStudent(data))
      .catch(err => console.error("Lỗi gọi API:", err));
  }, []);

  if (!student) return <div>Đang tải thông tin...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Thông tin sinh viên</h1>
      <p><strong>Họ tên:</strong> {student.ho_ten}</p>
      <p><strong>MSSV:</strong> {student.mssv}</p>
      <p><strong>Lớp:</strong> {student.lop}</p>
    </div>
  );
}

export default App;