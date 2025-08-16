import React from "react";

import imageProfile from "../images/stickers/profile-photo.png";

const ProfileInfo = () => {
  return (
    <div className=" text-white p-6 flex flex-col items-center gap-5 rounded-xl max-w-md lg:mx-auto">
      <img
        src={imageProfile}
        alt="Foto com moldura"
        className="w-70 ml-25 h-auto"
      />

      <p className=" text-sm font-medium p-2 pt-1 rounded-sm text-start w-90 ml-30 leading-relaxed border-2 border-white/100  italic text-white">
        Me interesso especialmente por design de interfaces, arquitetura de
        código limpa e construção de experiências completas, desde a estrutura
        de dados até a tela final usada pelas pessoas.
      </p>
    </div>
  );
};

export default ProfileInfo;
