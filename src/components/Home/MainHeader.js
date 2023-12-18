import React, { useState } from "react";
import "./MainHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useDispatch } from "react-redux";
import authSlice, { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function MainHeader() {
  const [isHovered, setIsHovered] = useState(false);
const dispatch = useDispatch();
const navigate=useNavigate();
  const logoutHandler=()=>{
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className="main-header">
      <a href="/">
        <svg
          viewBox="0 0 111 30"
          data-uia="netflix-logo"
          className="svg-icon svg-icon-netflix-logo svg-nfLogo"
          aria-hidden="true"
          focusable="false"
        >
          <g id="netflix-logo">
            <path
              d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
              id="Fill-14"
            ></path>
          </g>
        </svg>
      </a>

      <ul className="tabbed-primary-navigation">
        <li className="navigation-menu">
          <a
            className="menu-trigger"
            role="button"
            aria-haspopup="true"
            href="/browse"
            tabIndex="0"
          >
            Browse
          </a>
        </li>
        <li className="navigation-tab">
          <a href="/browse" className="current active">
            Home
          </a>
        </li>
        <li className="navigation-tab">
          <a href="/browse/genre/83">TV Shows</a>
        </li>
        <li className="navigation-tab">
          <a href="/browse/genre/34399">Movies</a>
        </li>
        <li className="navigation-tab">
          <a href="/latest">New &amp; Popular</a>
        </li>
        <li className="navigation-tab">
          <a href="/browse/my-list">My List</a>
        </li>
        <li className="navigation-tab">
          <a href="/browse/original-audio">Browse by Languages</a>
        </li>
      </ul>
      <div className="secondary-navigation">
        <button
          class="searchTab"
          tabindex="0"
          aria-label="Search"
          data-uia="search-box-launcher"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="search-icon ltr-4z3qvp e1svuwfo1"
            data-name="MagnifyingGlass"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
              fill="white"
            ></path>
          </svg>
        </button>
        <span>
          <p style={{ color: "white" }}>Children</p>
        </span>
        <button
          class="notifications-menu"
          aria-haspopup="true"
          aria-expanded="false"
          aria-label="Notifications"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ltr-4z3qvp e1svuwfo1"
            data-name="Bell"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
              fill="white"
            ></path>
          </svg>
        </button>

        <div class="account-menu-item">
          <div
            className={`dropdown-container ${isHovered ? "active" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered && (
              <div className="dropdown-content">
                <p>Children</p>
                <p>Manage Profile</p>
                <p onClick={logoutHandler}>Logout</p>
              </div>
            )}
            <a
              href="/YourAccount"
              role="button"
              tabindex="0"
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="Hari Vishnu Prasad – Account &amp; Settings"
            >
              <span class="profile-link" role="presentation">
                <img
                  class="profile-icon-header"
                  src="https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYlCQUJop12EwNzPyzZEMz9iHu7_KrRv-TRwKI_wSP9sikQYwDtxP_7HXiOrnGPAXScYx3PxRic7l-IPcvAsGIqUXUExW8g.png?r=5fd"
                  alt=""
                ></img>
              </span>
            </a>
            <span className="caret" role="presentation"></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
