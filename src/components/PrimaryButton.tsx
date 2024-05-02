const PrimaryButton = ({ text }) => {
  return (
    <div>
      <button
        type="button"
        className="rounded-full text-[#1388DD] cofo-sans-medium py-[0.25rem] px-[0.5rem] text-[0.75rem] bg-white"
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
