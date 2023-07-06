//* BADGE INTERFACE *//
interface Props {
  text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  selected?: boolean;
}

//* BADGE HOC *//
const BadgeHoc: React.FC<Props> = ({
  className,
  onClick,
  text,
  selected = false,
}) => {
  return (
    <span
      style={{ opacity: selected ? 1 : 0.3 }}
      className={className}
      onClick={(event) => (onClick ? onClick(event) : () => {})}
    >
      {text}
    </span>
  );
};

//* BUTTON VARIANTS INTERFACE *//
interface BadgeVariants {
  Blue: React.FC<Props>;
  Gray: React.FC<Props>;
  Green: React.FC<Props>;
  Red: React.FC<Props>;
}

export const Badge: BadgeVariants = {
  Blue: ({ className, ...props }) => (
    <BadgeHoc
      className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 cursor-pointer"
      {...props}
    />
  ),
  Gray: ({ className, ...props }) => (
    <BadgeHoc
      className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 cursor-pointer"
      {...props}
    />
  ),
  Green: ({ className, ...props }) => (
    <BadgeHoc
      className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 cursor-pointer"
      {...props}
    />
  ),
  Red: ({ className, ...props }) => (
    <BadgeHoc
      className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 cursor-pointer"
      {...props}
    />
  ),
};
