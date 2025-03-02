type AppHeaderProps = {
    fullname: string; // #10 ใช้ Props เพืื่อทำให้  Component ใช้ซ้ำได้
};

const AppHeader = ({ fullname }: AppHeaderProps) => {
  return <div>Hello, {fullname}</div>;
};

export default AppHeader;
