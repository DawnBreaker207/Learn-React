export default function TabButton({
  // label
  children,
  onSelect,
  isSelected,
}) {
  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onSelect}>
        {
          // label
          children
        }
      </button>
    </li>
  );
}
