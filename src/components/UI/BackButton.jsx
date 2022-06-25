import { Link } from 'react-router-dom';
import { Back } from './Icons';

const BackButton = () => {
  return (
    <Link to="/">
      <button
        type="button"
        className="mt-10 py-2 px-8 rounded text-VeryDarkBlueTXT dark:text-whiteTXT bg-whiteTXT shadow-md dark:bg-darkBlue flex gap-3"
      >
        <Back /> Back
      </button>
    </Link>
  );
};

export default BackButton;
