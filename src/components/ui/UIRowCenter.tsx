import type { ReactNode } from "react";

const UIRowCenter = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: string;
}) => {
  return (
    <div className={`d-flex flex-row justify-content-center ${style}`}>
      {children}
    </div>
  );
};

export default UIRowCenter;
