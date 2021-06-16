import React from "react";

export default function Profile() {
  return (
    //   Profile Page
    <div className="profile">
      {/* Header */}
      <div className="profile-header">
        <div className="profile-header__info">
          <div className="profile-bio">
            <h4>Bio:</h4>
            <p>
              This is an example bio. There will be a character limit. Nuts and
              Bolts.
            </p>
            <h4 className="profile-bio__pronouns">Pronouns: He/Him</h4>
            <h4 className="profile-bio__age">Age: 21+</h4>
          </div>
          <div className="profile-pic-container">
            <img
              src="https://i.insider.com/60817ec5354dde0018c06960?width=700"
              alt=""
              className="profile-pic"
            />
          </div>
          <div className="profile-banner"></div>
        </div>
      </div>
    </div>
    // End of Header
    // End of Profile Page
  );
}
