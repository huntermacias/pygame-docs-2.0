import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  title: string;
  description: string;
  icon: ReactNode;
  buttonLabel?: string;
  buttonLink?: string;
};

const TextBox = ({
  title,
  description,
  icon,
  buttonLabel,
  buttonLink,
}: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md px-8 py-6">
      <div className="flex items-center mb-6">
        <div className="bg-gray-600 rounded-full p-4">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-800 ml-6">{title}</h2>
      </div>

      <p className="text-gray-600 text-lg leading-7 mb-8">{description}</p>

      {buttonLabel && buttonLink && (
        <a
          href={buttonLink}
          className="bg-gray-600 text-white py-2 px-4 rounded-md inline-flex items-center hover:bg-gray-700 transition-colors duration-200"
        >
          {buttonLabel}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2 text-white text-lg"
          />
        </a>
      )}
    </div>
  );
};

export default TextBox;
