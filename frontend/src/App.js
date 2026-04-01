import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    // Gọi API từ backend (sẽ dùng docker-compose nên để localhost:5000 khi test máy)
    axios.get('http://localhost:5000/info')
      .then(res => setInfo(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Trang thông tin cá nhân</h1>
      <p>Họ tên: {info.hoTen}</p>
      <p>MSSV: {info.mssv}</p>
      <p>Lớp: {info.lop}</p>
    </div>
  );
}
export default App;