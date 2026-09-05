import type { CSSProperties } from "react";

type ActionButtonProps = {
  signal: 0 | 1 | 2;
  label: string;
  className: string;
  iconClassName: string;
};

export function ActionButton({
  signal,
  label,
  className,
  iconClassName,
}: ActionButtonProps) {
  const extra = signal === 2 ? { "aria-label": label } : {};
  const style = signal === 1 ? ({ "--note": `"${label}"` } as CSSProperties) : undefined;

  return (
    <button className={className} type="button" style={style} {...extra}>
      <span className={iconClassName} aria-hidden="true" />
    </button>
  );
}
