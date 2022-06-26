import { Reload } from './Icons';

const PromiseRejected = () => {
  return (
    <div className="mt-10 text-5xl text-VeryDarkBlueTXT dark:text-whiteTXT text-center">
      <h1 className="font-extrabold">404</h1>
      <p className="text-4xl mt-4">You&apos;re request failed. Try again later!</p>
      <button
        type="button"
        className="mt-16 px-6 py-2 rounded text-2xl shadow-md bg-whiteTXT dark:bg-darkBlue"
        onClick={() => window.location.reload()}
      >
        <Reload /> Reload
      </button>
    </div>
  );
};

export default PromiseRejected;
