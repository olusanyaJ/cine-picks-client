import { Link, useNavigate } from "react-router-dom";
import "./GetStartedPage.scss";
import avatarOne from "../../assets/avatars/Ellipse1.png";
import avatarTwo from "../../assets/avatars/Ellipse2.png";
import avatarThree from "../../assets/avatars/Ellipse3.png";
import avatarFour from "../../assets/avatars/Ellipse4.png";
import avatarFive from "../../assets/avatars/Ellipse5.png";
import avatarSix from "../../assets/avatars/Ellipse6.png";
import avatarSeven from "../../assets/avatars/Ellipse21.png";
import avatarEight from "../../assets/avatars/Ellipse22.png";
import avatarNine from "../../assets/avatars/Ellipse23.png";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import InputSelect from "../../components/InputSelect/InputSelect";
import { useState } from "react";

const GetStartedPage = () => {
  const [username, setUsername] = useState("");
  const [languageSelected, setLanguageSelected] = useState("");
  const [avatarSelected, setAvatarSelected] = useState(null);

  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguageSelected(event.target.value);
  };

  const handleAvatarSelect = (avatar) => () => {
    setAvatarSelected(avatar);
  };

  const isAvatarSelected = (avatar) => {
    return avatar === avatarSelected;
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (!username) {
      return console.log("Enter a username");
    }
    if (!languageSelected) {
      return console.log("Select a language");
    }
    if (!avatarSelected) {
      return console.log("Select an avatar");
    }
    console.log("Username:", username);
    console.log("Language Selected:", languageSelected);
    console.log("Avatar Selected:", avatarSelected);
    navigate("/");
  };

  return (
    <div className="main">
      <Header />
      <div className="get-started-page">
        <div className="get-started-page__wrapper">
          <p className="get-started-page__title">Get Started</p>
          <Input
            type="text"
            name="username"
            label="Username"
            placeholder="Account Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <InputSelect
            name="Language"
            label="Choose a Language"
            value={languageSelected}
            onChange={handleLanguageChange}
          />
        </div>
        <div className="get-started-page__inner">
          <p className="get-started-page__subtitle">Choose your avatar</p>
          <div className="get-started-page__avatar-container">
            {[
              avatarOne,
              avatarTwo,
              avatarThree,
              avatarFour,
              avatarFive,
              avatarSix,
              avatarSeven,
              avatarEight,
              avatarNine,
            ].map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt="user avatar"
                className={`get-started-page__avatar ${
                  isAvatarSelected(avatar) ? "selected" : ""
                }`}
                onClick={handleAvatarSelect(avatar)}
              />
            ))}
          </div>
        </div>
        <Link to="" className="get-started-page__link" onClick={handleClick}>
          Confirm details
        </Link>
      </div>
    </div>
  );
};

export default GetStartedPage;
