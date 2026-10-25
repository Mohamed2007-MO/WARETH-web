import Menu from "./Menu";
import Logo from "./Logo";
import PageTransition from "./PageTransition";

export default function Layout() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden text-offwhite">
      <Logo />
      <Menu />
      <PageTransition />
    </div>
  );
}