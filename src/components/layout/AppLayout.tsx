import { PropsWithChildren } from "react";

const AppLayout = ({children}: PropsWithChildren) => {
  return <div className="max-w-6xl min-h-screen mx-auto">{children}</div>;
};

export default AppLayout;
