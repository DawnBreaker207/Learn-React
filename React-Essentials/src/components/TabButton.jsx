export default function TabButton({
  // label
  children,

  isSelected,
  ...props
}) {
  return (
    <li>
      <button className={isSelected ? 'active' : ''} {...props}>
        {
          // label
          children
        }
      </button>
    </li>
  );
}
