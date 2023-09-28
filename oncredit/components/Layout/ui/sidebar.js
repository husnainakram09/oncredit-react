import { Box, Button, Text, Stack, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  const signOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <Box bgColor="black" h={"100vh"} p={20} pos="relative">
      <Flex
        w={"100%"}
        h="15vh"
        justify={"center"}
        align="center"
        mb={40}
        bgColor={"#5e5e5e"}
        //   bgColor={"rgb(0,0,0,0.5)"}
      >
        <Text fontSize={24}>onCredit</Text>
      </Flex>
      <Stack rowGap={10}>
        <Box>
          <Link href={"/dashboard/"}>
            <Text fontSize={18}>Dashboard</Text>
          </Link>
        </Box>
        <Box>
          <Link href={"/dashboard/"}>
            <Text fontSize={18}>Users</Text>
          </Link>
        </Box>
        <Box>
          <Link href={"/dashboard/"}>
            <Text fontSize={18}>Balance</Text>
          </Link>
        </Box>
        <Box>
          <Link href={"/dashboard/"}>
            <Text fontSize={18}>Messages</Text>
          </Link>
        </Box>
        <Box>
          <Link href={"/dashboard/"}>
            <Text fontSize={18}>Settings</Text>
          </Link>
        </Box>
      </Stack>
      <Box position={"absolute"} bottom={30} left={30}>
        <Button
          onClick={signOut}
          borderRadius={5}
          bgColor="white"
          color={"black"}
          p="5px 20px"
          fontSize={18}
          variant="ghost"
          border={"none"}
        >
          Log Out
        </Button>
      </Box>
    </Box>
  );
};

export default SideBar;
