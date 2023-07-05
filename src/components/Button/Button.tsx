//* INTERFACE *//
interface Props {
  text: string;
  type: "button" | "submit" | "reset";
  isDisabled?: boolean;
  loader?: React.ComponentType;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({
  text,
  type,
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
      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center"
    >
      {loading ? Loader && <Loader /> : text}
    </button>
  );
};
