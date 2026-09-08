type ActionButtonProps = {
  accessibleName?: string;
  className: string;
  iconClassName: string;
};

export function ActionButton({
  accessibleName,
  className,
  iconClassName,
}: ActionButtonProps) {
  return (
    <button className={className} type="button" aria-label={accessibleName}>
      <span className={iconClassName} aria-hidden="true" />
    </button>
  );
}
