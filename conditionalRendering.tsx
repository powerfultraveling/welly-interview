interface TitleProps {
  label: string;
}
  
function Title({ label }: TitleProps) {
  return <div>{label}</div>;
}
  
interface PageTitleProps {
  isLoggedIn: boolean;
}

function PageTitle({ isLoggedIn }: PageTitleProps) {
  if (isLoggedIn) {
      return <Title label="已登入" />;
  }

  return <Title label="未登入" />;
}

export default PageTitle;
