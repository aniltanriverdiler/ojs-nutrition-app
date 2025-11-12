import { redirect } from "next/navigation";

const MainAuthPage = () => {
  // Redirect main /auth route to login
  redirect("/auth/login");
}

export default MainAuthPage;