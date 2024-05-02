const PrimaryButton = ({ text }) => {
  return (
    <div>
      <button
        type="button"
        className="rounded-full text-white py-[0.25rem] px-[0.5rem] text-[0.75rem] bg-black"
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
