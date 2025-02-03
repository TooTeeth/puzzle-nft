import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Contract } from "ethers";
import MintNFT from "../lib/MintNFT.json";

function Layout() {
  const [signer, setSigner] = useState();
  const [contract, setContract] = useState();

  useEffect(() => {
    if (!signer) return;

    setContract(new Contract("0xC99F17F8785F9dD9Fd41330Bba593D7693aC0182", MintNFT, signer));
  }, [signer]);

  return (
    <div className=" min-h-screen">
      <Header signer={signer} setSigner={setSigner} />
      <Outlet context={{ signer, contract }} />
    </div>
  );
}

export default Layout;
