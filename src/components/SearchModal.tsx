// Define the props type interface with appropriate type annotations
interface SearchModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLElement).id !== "searchbar") onClose();
  };

  return (
    <div
      className="modal-wrapper | fixed inset-0 backdrop-blur-md flex justify-center"
      onClick={handleClose}
    >
      <div className="searchbar | relative w-[80vw]  md:w-[50vw] text-white top-[15%]">
        <input
          id="searchbar"
          className="border-2 border-white bg-black rounded-lg px-[1rem] py-[1.25rem] w-full"
          type="search"
          placeholder="Найти пост..."
        />
      </div>
    </div>
  );
};

export default SearchModal;
