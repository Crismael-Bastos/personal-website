const HamburgerIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={18}
    fill="none"
    className={`IconSandwichRounded ${props.theme}`}
    data-testid="drawerButton"
    {...props}
  >
    <path
      fill="#0707077b"
      fillRule="evenodd"
      d="M.288 1.724a1.19 1.19 0 0 1-.216-.333A1.037 1.037 0 0 1 0 .989C0 .85.024.72.072.598A.89.89 0 0 1 .288.276.94.94 0 0 1 .625.069 1.2 1.2 0 0 1 1.033 0h21.934c.144 0 .28.023.408.069a.94.94 0 0 1 .337.207.89.89 0 0 1 .216.322c.048.122.072.253.072.39 0 .154-.024.288-.072.403-.048.115-.12.226-.216.333a.94.94 0 0 1-.337.207 1.2 1.2 0 0 1-.408.069H1.033a1.2 1.2 0 0 1-.408-.069.94.94 0 0 1-.337-.207Zm0 8a1.19 1.19 0 0 1-.216-.333A1.037 1.037 0 0 1 0 8.989c0-.138.024-.269.072-.391a.89.89 0 0 1 .216-.322.94.94 0 0 1 .337-.207A1.2 1.2 0 0 1 1.033 8h21.934c.144 0 .28.023.408.069a.94.94 0 0 1 .337.207.89.89 0 0 1 .216.322c.048.122.072.253.072.39 0 .154-.024.288-.072.403-.048.115-.12.226-.216.333a.94.94 0 0 1-.337.207 1.2 1.2 0 0 1-.408.07H1.033a1.2 1.2 0 0 1-.408-.07.94.94 0 0 1-.337-.207Zm-.216 7.667c.048.115.12.226.216.333.096.092.208.161.337.207a1.2 1.2 0 0 0 .408.069h21.934a1.2 1.2 0 0 0 .408-.07.94.94 0 0 0 .337-.206c.096-.107.168-.218.216-.333.048-.115.072-.25.072-.403a1.06 1.06 0 0 0-.072-.39.889.889 0 0 0-.216-.322.94.94 0 0 0-.337-.207 1.2 1.2 0 0 0-.408-.07H1.033a1.2 1.2 0 0 0-.408.07.94.94 0 0 0-.337.207.89.89 0 0 0-.216.322 1.061 1.061 0 0 0-.072.39c0 .154.024.288.072.403Z"
      clipRule="evenodd"
    />
  </svg>
);
export default HamburgerIcon;
