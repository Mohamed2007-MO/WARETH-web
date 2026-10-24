import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Logo from "./Logo";

export default function Layout() {
  return (
   <div className="relative min-h-dvh text-offwhite">
      <Logo />
      <Menu />
      <main>
        <Outlet />
      </main>
    </div>
  );
}