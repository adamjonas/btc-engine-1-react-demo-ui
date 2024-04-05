import useIsInitialStateWithoutFilter from "@/hooks/useIsInitialStateWithoutFilter";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AppMenu } from "../appMenu";
import AppsIcon from "../svgs/AppsIcon";
import DayIcon from "../svgs/DayIcon";
import NightIcon from "../svgs/NightIcon";
import { SearchBox } from "@elastic/react-search-ui";
import SearchBoxView from "../customSearchboxView/SearchBoxView";
import Link from "next/link";
import { useTheme } from "@/context/Theme";
import { Tooltip } from "@chakra-ui/react";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";
  const switchStyle = `flex basis-1/2 items-center justify-center rounded-lg transition-[background-color] duration-500`;

  return (
    <div className="relative w-20 2xl:w-24">
      <div className="relative flex overflow-hidden rounded-lg w-20 h-9 2xl:w-24 2xl:h-12 border border-custom-stroke bg-custom-background">
        <button
          onClick={toggleTheme}
          className={`${switchStyle} ${isLight ? "bg-custom-hover-state" : ""}`}
        >
          <DayIcon className="text-custom-accent dark:text-custom-primary-text" />
        </button>
        <button
          onClick={toggleTheme}
          className={`${switchStyle} ${
            !isLight ? "bg-custom-hover-state" : ""
          }`}
        >
          <NightIcon className="text-custom-accent dark:text-custom-primary-text" />
        </button>
      </div>
      <div
        className={`rounded-lg top-0 absolute w-1/2 h-full border border-custom-brightOrange-100 dark:border-custom-stroke transition-all duration-300 ${
          isLight ? "left-0" : "left-10 2xl:left-12"
        }`}
      />
    </div>
  );
}

const MenuSwitcher = () => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <button ref={buttonRef} onClick={() => setIsOpen((v) => !v)} className="group">
      <Tooltip
        hasArrow
        label="All Tools by the Bitcoin Dev Project"
        className="bg-custom-lightGrey dark:bg-custom-hover-state text-white dark:text-custom-primary-text text-center text-sm"
        padding="16px"
        borderRadius="8px"
        maxW="157px"
        mx="4px"
      >
        <div
          className={`flex flex-col rounded-lg border border-custom-brightOrange-100 dark:border-custom-stroke  w-9 h-9 2xl:w-12 2xl:h-12 items-center justify-center transition-[background-color] duration-200 ${
            open
              ? "bg-custom-hover-state shadow-custom-sm"
              : "bg-custom-background"
          }`}
        >
          <div>
            <AppsIcon />
          </div>
          {open && (
            <div
              ref={popoverRef}
              className="absolute top-0 right-0 mt-16 md:mt-20 xl:mt-24 mr-3 md:mr-5 2xl:mr-7"
            >
              <AppMenu />
            </div>
          )}
        </div>
      </Tooltip>
    </button>
  );
};

const NavBar = () => {
  const { hiddenHomeFacet } = useIsInitialStateWithoutFilter();

  return (
    <nav
      className={`fixed top-0  text-left md:text-center w-full text-xs md:text-base 2xl:text-xl leading-normal z-10 ${
        hiddenHomeFacet ? "bg-custom-hover-state shadow-md" : ""
      }`}
    >
      <div
        className={`flex items-center justify-between p-3 md:p-5 2xl:p-7 w-full max-w-[1920px] m-auto ${
          !hiddenHomeFacet ? "flex-row-reverse" : ""
        }`}
      >
        <Link className={hiddenHomeFacet ? "" : "hidden"} href="/">
          <Image
            src="/btc-main.png"
            className="max-w-[140px] lg:max-w-[240px] 2xl:max-w-[300px] "
            alt="bitcoin logo"
            width={459}
            height={69}
            priority
          />
        </Link>
        {hiddenHomeFacet && (
          <div className="hidden md:block w-[45vw]">
            <SearchBox
              autocompleteMinimumCharacters={3}
              view={SearchBoxView}
              autocompleteSuggestions={true}
              debounceLength={0}
              onSubmit={() => {}}
              className="w-auto mx-10"
              onSelectAutocomplete={() => {}}
            />
          </div>
        )}
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <MenuSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
