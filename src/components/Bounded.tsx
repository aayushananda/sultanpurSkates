import { CSSProperties, ElementType, ReactNode } from "react";
import clsx from "clsx";

type BoundedProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: ElementType<any>;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Comp as any;
  return (
    <Component
      className={clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Component>
  );
}
