import Auth from '../utils/auth'

export default function LoggedNavbar() {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link fs-3" href="/dashboard">
          Collection
        </a>
      </li>
      <li className="nav-item fs-3 " onClick={Auth.logout}>
        <a className="nav-link logout" href="/login">
          Logout
        </a>
      </li>
    </>
  );
}
