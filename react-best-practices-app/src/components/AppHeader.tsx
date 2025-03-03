// #10 ใช้ Props เพื่อทำให้ Component ใช้ซ้ำได้

import AppButton from "./AppButton";

// #11 ใช้ TypeScript เพื่อตรวจสอบ Props
type AppHeaderProps = {
    fullname: string; 
    age?: number;
}

const AppHeader = ({ fullname, age = 0 }: AppHeaderProps) => { // #14 ใช้ Destructuring ในการรับ Props
  return (
    <>
      <h1>Hello {fullname} {age}</h1>
      <AppButton label="Click Me" onClick={() => { alert('#15') }} />
    </>
  )
}

export default AppHeader