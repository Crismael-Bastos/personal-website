const CloseIcon = props => (
  <svg
    style={{ display: 'flex', justifyContent: 'flex-end' }}
    xmlns="https://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    className={`IconCloseModal ${props.theme}`}
    {...props}
  >
    <path
      fill="#0707077b"
      fillRule="evenodd"
      d="M22 3.761 20.239 2 12 10.207 3.761 2 2 3.761 10.207 12 2 20.239 3.761 22 12 13.793 20.239 22 22 20.239 13.793 12 22 3.761Z"
      clipRule="evenodd"
    />
  </svg>
);
export default CloseIcon;
