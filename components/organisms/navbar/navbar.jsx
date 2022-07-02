import React, { useEffect, useState } from "react";
import Landing from "./landing";
import AuthNav from "./AuthNav";
import { useRouter } from "next/router";
const Navbar = () => {
  const [currentRoute, setCurrentRoute] = useState("/");
  const router = useRouter();
  useEffect(() => {
    let splitRouter = router.asPath.split("/");
    setCurrentRoute(splitRouter[1]);
  }, []);
  return <>{currentRoute !== "user" ? <Landing /> : <AuthNav />}</>;
};

export default Navbar;
