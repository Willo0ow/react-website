interface BaseButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
}
const BaseButton = ({ handleClick, children }: BaseButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="border border-slate-200 hover:bg-opacity-50 text-white px-4 py-2 hover:bg-slate-600 hover:scale-105 transition-all"
    >
      {children}
    </button>
  );
};

export default BaseButton;
