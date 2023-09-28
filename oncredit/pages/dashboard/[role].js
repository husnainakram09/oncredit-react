import DashboardPage from "@/components/dashboard/dashboard";
import { WebLayout } from "@/components/Layout";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();
  // const user = localStorage.getItem("user");
  //   user = JSON.parse(user)[0];
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/login");
    }
  }, []);
  return (
    <DashboardLayout>
      <DashboardPage />
    </DashboardLayout>
  );
};

export default Dashboard;
