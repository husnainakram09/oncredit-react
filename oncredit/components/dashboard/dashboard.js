import {
  Box,
  Flex,
  Grid,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";

const DashboardPage = () => {
  const [user, setuser] = useState({});
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setuser(JSON.parse(data)[0]);
    }
  }, []);
  console.log(user);
  //   user = JSON.parse(user)[0];

  return (
    <div>
      <HStack h={60} w="100%">
        <Text fontSize={20}>SEARCH</Text>

        <Input
          // borderRadius={5}
          w="auto"
          border={"none"}
          borderBottom="2px solid black"
          _focus={{ outline: "none" }}
        />
        <Link href={"/"}>
          <ImSearch style={{ fontSize: 18 }} />
        </Link>
      </HStack>
      <Grid gridTemplateColumns={"repeat(4,1fr)"} columnGap={30}>
        <Box bgColor={"blue"} p={"20px 40px"}>
          <Stack justify={"center"} align="center">
            <h3>New Users</h3>
            <h2>576</h2>
            <h4>Increased by %5.9</h4>
          </Stack>
        </Box>
        <Box bgColor={"blue"} p={"20px 40px"}>
          <Stack justify={"center"} align="center">
            <h3>Total Income</h3>
            <h2>PKR: 500000</h2>
            <h4>Increased by %3.5</h4>
          </Stack>
        </Box>
        <Box bgColor={"blue"} p={"20px 40px"}>
          <Stack justify={"center"} align="center">
            <h3>Total Expense</h3>
            <h2>PKR: 67000</h2>
            <h4>Increased by %7.5</h4>
          </Stack>
        </Box>
        <Box bgColor={"blue"} p={"20px 40px"}>
          <Stack justify={"center"} align="center">
            <h3>Total Order</h3>
            <h2>6784</h2>
            <h4>Increased by %8.5</h4>
          </Stack>
        </Box>
      </Grid>
      <div>
        <h1>Users</h1>
        <table>
          <tbody>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
            <tr>
              <td>
                <a href="#"> 1</a>
              </td>
              <td>
                <a href="#"> Ahmad</a>
              </td>
              <td>
                <a href="#"> Ahmad@oncredit.com</a>
              </td>
              <td>
                <a href="#"> Faisalabad</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#"> 2</a>
              </td>
              <td>
                <a href="#"> Ahsen</a>
              </td>
              <td>
                <a href="#"> Ahsen@oncredit.com</a>
              </td>
              <td>
                <a href="#"> Faisalabad</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#"> 3</a>
              </td>
              <td>
                <a href="#"> Inam</a>
              </td>
              <td>
                <a href="#"> Inam@oncredit.com</a>
              </td>
              <td>
                <a href="#"> Faisalabad</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#"> 4</a>
              </td>
              <td>
                <a href="#"> Hassan</a>
              </td>
              <td>
                <a href="#"> Hassan@oncredit.com</a>
              </td>
              <td>
                <a href="#"> Faisalabad</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#"> 5</a>
              </td>
              <td>
                <a href="#"> Mukkaram</a>
              </td>
              <td>
                <a href="#"> Mukkaram@oncredit.com</a>
              </td>
              <td>
                <a href="#"> Faisalabad</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#"> 6</a>
              </td>
              <td>
                <a href="#"> Anees</a>
              </td>
              <td>
                <a href="#"> Anees@oncredit.com</a>
              </td>
              <td>
                <a href="#"> Faisalabad</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#"> 7</a>
              </td>
              <td>
                <a href="#"> Kamran</a>
              </td>
              <td>
                <a href="#"> Kamran@oncredit.com</a>
              </td>
              <td>
                <a href="#"> Faisalabad</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#"> 8</a>
              </td>
              <td>
                <a href="#"> Bilal</a>
              </td>
              <td>
                <a href="#"> Bilal@oncredit.com</a>
              </td>
              <td>
                <a href="#"> Faisalabad</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#"> 9</a>
              </td>
              <td>
                <a href="#"> Sufyan</a>
              </td>
              <td>
                <a href="#"> Sufyan@oncredit.com</a>
              </td>
              <td>
                <a href="#"> Faisalabad</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#"> 10</a>
              </td>
              <td>
                <a href="#"> Aman</a>
              </td>
              <td>
                <a href="#"> Aman@oncredit.com</a>
              </td>
              <td>
                <a href="#"> Faisalabad</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
