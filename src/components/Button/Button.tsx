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
      className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      {text}
    </button>
  );
};
