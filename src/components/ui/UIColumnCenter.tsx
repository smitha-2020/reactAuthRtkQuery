import type { ReactNode } from "react";

const UIColumnCenter = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: string;
}) => {
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <div className={`col-md-6 d-flex justify-content-center ${style}`}>
      {children}
    </div>
  );
};

export default UIColumnCenter;
