import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import SideBar from "./ui/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <Box bgColor={"white"} minHeight="100vh">
      <HStack align={"flex-start"}>
        <Box w={"15vw"}>
          <SideBar />
        </Box>
        <Box w={"83vw"}>{children}</Box>
      </HStack>
    </Box>
  );
};

export default DashboardLayout;
