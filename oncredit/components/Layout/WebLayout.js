import { Box, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../footer";

const WebLayout = ({ children }) => {
  const [isUser, setisUser] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setisUser(true);
    } else {
      setisUser(false);
    }
  }, []);
  const signOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <>
      <div
        className="weblayout"
        style={{
          backgroundImage: "url(/img/672.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Box p="0 80px" bgColor={"rgb(0, 0, 0, 0.5)"}>
          <HStack justify={"space-between"}>
            <Box className="icon">
              <h2 className="logo">OnCredit</h2>
            </Box>
            <HStack columnGap={20}>
              <Link href={"/"} style={{ fontSize: 18, color: "white" }}>
                HOME
              </Link>
              <Link href={"/about"} style={{ fontSize: 18, color: "white" }}>
                ABOUT
              </Link>
              <Link href={"/contact"} style={{ fontSize: 18, color: "white" }}>
                CONTACT
              </Link>
              {isUser ? (
                <Box>
                  <Button
                    bg={"transparent"}
                    colorScheme="teal"
                    variant="ghost"
                    onClick={signOut}
                    // bg="transparent"
                    fontSize={18}
                  >
                    Sign Out
                  </Button>
                </Box>
              ) : (
                <Link href={"/login"} style={{ fontSize: 18, color: "white" }}>
                  LOGIN
                </Link>
              )}
            </HStack>
          </HStack>
        </Box>
        <Box>{children}</Box>
      </div>
      <Footer />
    </>
  );
};

export default WebLayout;
