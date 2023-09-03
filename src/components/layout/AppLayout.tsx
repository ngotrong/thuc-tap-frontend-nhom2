import { PropsWithChildren } from "react";

const AppLayout = ({children}: PropsWithChildren) => {
  return <div className="max-w-6xl mx-auto min-h-[calc(100vh_-_340px)]">{children}</div>;
};

export default AppLayout;
