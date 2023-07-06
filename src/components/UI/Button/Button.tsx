//* COMPONENT *//
import { Icon } from "../../";

//* BUTTON HOC INTERFACE *//
interface Props {
  text: string;
  type: "button" | "submit" | "reset";
  children?: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

//* BUTTON HOC *//
const ButtonHoc: React.FC<Props> = ({
  text,
  type,
  children,
  className,
  isDisabled = false,
  isLoading = false,
  onClick,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={(event) => (onClick ? onClick(event) : () => {})}
      type={type}
      className={className}
    >
      {children}
      {isLoading ? <Icon.Loader className="h-full" /> : text}
    </button>
  );
};

//* BUTTON VARIANTS INTERFACE *//
interface ButtonVariants {
  Red: React.FC<Props>;
  Blue: React.FC<Props>;
  Green: React.FC<Props>;
  Alternative: React.FC<Props>;
  Google: React.FC<Props>;
}

//* BUTTON VARIANTS *//
export const Button: ButtonVariants = {
  Red: ({ className, ...props }) => (
    <ButtonHoc
      className="h-11 w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium flex justify-center items-center rounded-lg text-base px-5 py-2.5 text-center"
      {...props}
    />
  ),
  Blue: ({ className, ...props }) => (
    <ButtonHoc
      className="h-11 w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 flex justify-center items-center font-medium rounded-lg text-base px-5 py-2.5 text-center"
      {...props}
    />
  ),
  Green: ({ className, ...props }) => (
    <ButtonHoc
      className="h-11 w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg flex justify-center items-center dark:shadow-green-800/80 font-medium rounded-lg text-base px-5 py-2.5 text-center"
      {...props}
    />
  ),
  Alternative: ({ className, ...props }) => (
    <ButtonHoc
      className="h-11 w-full py-2.5 px-5 flex justify-center items-center text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      {...props}
    />
  ),
  Google: ({ className, children, ...props }) => (
    <ButtonHoc
      className="h-11 w-full text-black bg-[#fff] hover:bg-[#fff]/90 focus:ring-4 focus:outline-none focus:ring-[#fff]/50 font-bold justify-center gap-3 rounded-lg text-base px-5 py-2.5 text-center flex items-center dark:focus:ring-[#4285F4]/55"
      {...props}
    >
      <Icon.Google className="h-full" />
    </ButtonHoc>
  ),
};
