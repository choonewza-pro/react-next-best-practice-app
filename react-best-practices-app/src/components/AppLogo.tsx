import { useState } from "react";

const AppLogo = () => {
  // #5 การตั้งชื่อ State Variables และ Constant Variables ที่ดี
  const [isActive] = useState(false);
  const [hasPermission] = useState(true);
  const NOT_FOUND_MESSAGE = <p>ไม่พบข้อมูล</p>;

  // #6 การตั้งชื่อ Event Handlers ใน React และชื่อฟังก์ชันใน JavaScript
  const handleClick = () => {
    alert("hello #6");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>{" "}
      {isActive ? <p>App Logo</p> : NOT_FOUND_MESSAGE}{" "}
      {hasPermission && <p>Hello Admin</p>}
    </div>
  );
};

export default AppLogo;
