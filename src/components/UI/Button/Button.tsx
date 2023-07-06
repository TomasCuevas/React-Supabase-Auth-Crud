//* BUTTON INTERFACE *//
interface Props {
  text: string;
  type: "button" | "submit" | "reset";
  className?: string;
  isDisabled?: boolean;
  loader?: React.ComponentType;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

//* BUTTON HOC *//
const ButtonHoc: React.FC<Props> = ({
  text,
  type,
  className,
  isDisabled = false,
  loader: Loader,
  loading = false,
  onClick,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={(event) => (onClick ? onClick(event) : () => {})}
      type={type}
      className={className}
    >
      {loading ? Loader && <Loader /> : text}
    </button>
  );
};

//* BUTTON VARIANTS INTERFACE *//
interface ButtonVariants {
  Red: React.FC<Props>;
  Blue: React.FC<Props>;
  Green: React.FC<Props>;
  Alternative: React.FC<Props>;
}

//* BUTTON VARIANTS *//
export const Button: ButtonVariants = {
  Red: ({ className, ...props }) => (
    <ButtonHoc
      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      {...props}
    />
  ),
  Blue: ({ className, ...props }) => (
    <ButtonHoc
      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      {...props}
    />
  ),
  Green: ({ className, ...props }) => (
    <ButtonHoc
      className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      {...props}
    />
  ),
  Alternative: ({ className, ...props }) => (
    <ButtonHoc
      className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      {...props}
    />
  ),
};
