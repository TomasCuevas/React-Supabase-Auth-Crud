//* INTERFACE *//
interface Props {
  type: "button" | "submit" | "reset";
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({ text, type, onClick }) => {
  return (
    <button
      onClick={(event) => (onClick ? onClick(event) : () => {})}
      type={type}
      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {text}
    </button>
  );
};
