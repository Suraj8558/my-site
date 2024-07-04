import Link from 'next/link';
import { useEffect, useState } from 'react';
import MainMenu from './MainMenu';
import Logo from '../icons/Logo';
import MobileMenu from './MobileMenu';
import HeaderSearch from './HeaderSearch';
import LanguageSwitcher from '../LanguageSwitcher';

const Header = ({ locales }: any) => {
  const toggleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const searchArea = document.querySelector(".axil-search-area");

    searchArea?.classList.toggle("visible");
  };

  const toggleMobileMenu = () => {
    const body = document.querySelector("body");
    body?.classList.toggle("popup-mobile-manu-visible");
  };

  useEffect(() => {
    const header = document.querySelector("header.ax-header");

    const handleStickyClass = () => {
      if (window.pageYOffset > 250) {
        header?.classList.add("sticky");
      } else {
        header?.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleStickyClass);

    return () => {
      window.removeEventListener("scroll", handleStickyClass);
    };
  }, []);

  useEffect(() => {
    const closeSidenavOnClickOverlay = () => {
      const html = document.querySelector("html"),
        body = document.querySelector("body"),
        sideNav = document.querySelector(".side-nav");

      body?.addEventListener("click", function (e: any) {
        if (e.target.tagName === "BODY") {
          sideNav?.classList.remove("opened");
          html?.classList.remove("side-nav-opened");
        }
      });
    };

    closeSidenavOnClickOverlay();
  }, []);

  return (
    <>
      <header
        className={`ax-header haeder-default light-logo-version header-transparent axil-header-sticky`}
      >
        <div className="header-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-6 col-sm-6 col-8 header-left">
                <div className="logo">
                  <Link href="/">
                    <Logo />
                  </Link>
                </div>
              </div>

              <div className="col-lg-9 col-md-6 col-sm-6 col-4 header-right">
                <div className={`mainmenu-wrapepr`}>
                  <nav className="mainmenu-nav d-none d-lg-block">
                    <MainMenu />
                  </nav>

                  <div className="axil-header-extra d-flex align-items-center">
                    <div className="ax-search-area ml--40 ml_sm--10">
                      <button
                        className="p-0 border-0 search-trigger"
                        onClick={toggleSearch}
                      >
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    className={`ax-menubar popup-navigation-activation d-block d-lg-none ml_sm--20 ml_md--20`}
                  >
                    <div onClick={toggleMobileMenu}>
                      <i></i>
                    </div>
                  </div>

                  <HeaderSearch toggleSearch={toggleSearch} />

                  <LanguageSwitcher locales={locales}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu />
    </>
  );
};

export default Header;
