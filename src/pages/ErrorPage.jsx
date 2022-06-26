import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="mt-10 text-5xl text-VeryDarkBlueTXT dark:text-whiteTXT text-center">
      <h1 className="font-extrabold">404</h1>
      <p className="text-4xl mt-4">This page could not be found.</p>
      <Link to="/">
        <button type="button" className="mt-16 px-6 py-2 rounded text-2xl bg-whiteTXT shadow-md dark:bg-darkBlue">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
