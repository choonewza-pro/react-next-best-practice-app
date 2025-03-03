import React from "react"

// #15 ใช้ React DOM Attributes Type ของ React 
type AppButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
}
// #16 ใช้ Rest Props เพื่อให้ Component ยืดหยุ่น
const AppButton = ({ label, onClick, ...rest }: AppButtonProps) => {
  return (
    <button style={{color: 'blue'}} onClick={onClick} {...rest}>{label}</button>
  )
}

export default AppButton