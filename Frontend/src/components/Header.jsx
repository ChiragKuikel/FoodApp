import { useContext, useMemo, useState } from "react";
import { NavLink } from "react-router";
import { assets } from "../assets/assets";
import { HiddenContext } from "../contexts/HiddenContext";

const Header = () => {
  const hidden = useContext(HiddenContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "HOME", to: "/" },
      { label: "PRODUCTS", to: "/products" },
    ],
    [],
  );

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 text-white"
        style={{
          transform: hidden ? "translateY(-120%)" : "translateY(0)",
          transition: "transform 0.6s ease",
        }}
      >
        <div className="bg-primary/90 backdrop-blur">
          <div className="mx-auto flex w-full max-w-screen-xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md px-3 py-2 font-black md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>

            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 font-black">
              <img className="h-8 w-auto sm:h-10" src={assets.LOGO} alt="Logo" />
            </NavLink>

            {/* Desktop nav */}
            <nav className="ml-auto hidden items-center gap-8 font-bold md:flex">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className="tracking-tight">
                  {item.label}
                </NavLink>
              ))}
              <button className="btn-nav-cta rounded-full bg-pink-400 px-5 py-2 font-black text-sm text-black shadow-sm">
                <span className="inline-flex items-center gap-2">
                  <span className="tracking-tight">CONTACT</span>
                </span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[min(85vw,360px)] bg-primary p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img className="h-9 w-auto" src={assets.LOGO} alt="Logo" />
              </div>
              <button
                type="button"
                className="rounded-md px-3 py-2 font-black"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-3 text-lg font-black">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-3 hover:bg-white/10"
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button className="mt-6 w-full rounded-full bg-pink-400 px-4 py-3 font-black text-black btn-nav-cta">
              <span className="inline-flex w-full items-center justify-center gap-2">
                <span>CONTACT US</span>
                <span aria-hidden="true">↗</span>
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;