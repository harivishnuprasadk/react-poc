import React from "react";
import "./Landing.css";
import Profile from "./Profile";

function Landing() {
  return (
    <div className="list-profile">
      <h1 className="profile-gate-label">Who's watching?</h1>
      <div className="profile-list">
      <Profile url="https://occ-0-5452-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaFu0k5qNKL47Kn3urrZwvIn1V3IOWM9z3L2Mq4h6ZyoEpKoLvSKfflzA1Mc63xn960AOSlNKIewu2_0jHtaaE8qSqkh1XYs15TF.png?r=5fd" name="HVP"/>
      <Profile  url="https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABR7GBzHNeGCVNky_Hk1aST16wOCCdPJJmbDA81kML6mu60veAEDdhPgJmILK-hlPCDgULvxtEAqegEdHro6gTeMqt4uexdWvp5Ah.png?r=54d" name="Children"/>
      <Profile  url="https://thumb.ac-illust.com/35/35df4f40a8e742121238c0fcd12cd384_t.jpeg" name="Add Profile"/>
      </div>
      <button className="manage-profile">Manage Profiles</button>
    </div>
  );
}

export default Landing;
