import React from "react";
import localeMapping from '../../libs/localeMapping';

const HeaderNavigation = ({
  locale = "zh-HK",
  localizedMetadata = [],
  headerNavigations = [],
}: HeaderNavigationProps): React.ReactElement => {
  const [openMenuBar, setOpenMenuBar] = React.useState(false);
  const [openMobileGlobe, setOpenMobileGlobe] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = React.useState(new Array(headerNavigations.length).fill(false));

  const changeOpenSubMenu = (index) => {
    const newSubMenu = openSubMenu;
    newSubMenu[index] = !newSubMenu[index];
    setOpenSubMenu([...newSubMenu]);
  }

  const localeMap = {
    'zh-HK': { prefix: "hk", title: "🇭🇰 繁體中文" },
    'en-US': { prefix: "en", title: "🇺🇸 English" },
    'zh-CN': { prefix: "cn", title: "🇨🇳 简体中文" }
  };

  const parseNavigationLink = (pathname, locale) => {
    const shortLocale = localeMapping(locale);

    return `/${shortLocale}/${pathname}`;
  }

  return (
    <div className="h-sm-header-bar lg:h-header-bar w-full fixed top-0 z-50 bg-white header-bar-bottom-decoration">
      <div className="h-full w-11/12 mx-auto flex flex-row justify-between items-center">
        <a href="/">
          <img
            alt="chiron-logo"
            src="https://cdn.chiron.care/cms/general/icons/header/chiron-logo.svg"
            className="w-chiron-header-bar-logo lg:w-lg-chiron-header-bar-logo"
          />
        </a>
        <div className="flex-row items-center w-fit-content hidden lg:flex">
          {
            headerNavigations.map((navigation, navigationIndex) => (
              navigation.links.length === 0 ? (
                <a
                  key={`navigation-${navigationIndex}`}
                  href={ parseNavigationLink(navigation.page?.pathname, locale) }>
                  <h2
                    key={`navigation-${navigationIndex}`}
                    className={`xl:text-lg-navbar leading-24px mx-6 text-custom-grey-400 cursor-pointer`}
                  >
                    { navigation.title }
                  </h2>
                </a>
              ) : (
                <div
                  key={`navigation-${navigationIndex}`}
                  className="relative sublinks-active">
                  <h2 className={`xl:text-lg-navbar h-full leading-24px mx-6 text-custom-grey-400 cursor-pointer`}>
                    { navigation.title }
                  </h2>
                  <div className={`shadow-header-bar-sublinks absolute top-header-bar-sublinks min-w-header-bar-sublinks py-lg-card invisible opacity-0 left-horizontal-header-bar-sublinks header-bar-sublinks bg-white rounded-md`}
                  >
                    {
                      navigation.links.sort((a, b) => a.rank - b.rank).map((link) => (
                        <a
                          key={ link.title }
                          href={ parseNavigationLink(link.page?.pathname, locale) }>
                          <h4 className="text-custom-grey-400 text-lg-navbar tracking-widest py-2 px-lg-card hover:font-bold transition-all ease-linear duration-150">
                            { link.title }
                          </h4>
                        </a>
                      ))
                    }
                  </div>
                </div>
              )
            ))
          }
        </div>
        <div className="flex flex-row items-center">
          <div className="mr-sm-card lg:m-0 sublinks-active relative hidden lg:block">
            <img
              alt="globe"
              src="https://cdn.chiron.care/cms/general/icons/header/globe.svg"
              className="lg:w-5 lg:h-5" />
            <div className="shadow-header-bar-sublinks absolute top-header-bar-sublinks min-w-header-bar-sublinks py-lg-card invisible opacity-0 right-0 header-bar-sublinks bg-white rounded-md">
              {
                localizedMetadata.map((info) => (
                  <a
                    key={`locale-prefix-${info.locale}`}
                    href={ parseNavigationLink(info.pathname, info.locale) }>
                    <h4 className="text-custom-grey-400 text-lg-navbar tracking-widest py-2 px-lg-card hover:font-bold">
                      { localeMap[info.locale].title }
                    </h4>
                  </a>
                ))
              }
            </div>
          </div>
          <button
            className="focus:outline-none"
            onClick={() => { setOpenMobileGlobe(!openMobileGlobe); setOpenMenuBar(false); }}
          >
            <img
              alt="globe"
              src="https://cdn.chiron.care/cms/general/icons/header/globe.svg"
              className="w-5 h-5 mr-lg-card lg:hidden" />
          </button>
          <button
            className="cursor-pointer lg:hidden focus:outline-none"
            onClick={() => { setOpenMenuBar(!openMenuBar); setOpenMobileGlobe(false); }}
          >
            <img
              alt="menu"
              src="https://cdn.chiron.care/cms/general/icons/header/menu.svg"
              className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div
        style={{ transition: "height 0.2s" }}
        className={`absolute w-full bg-black overflow-y-auto
          ${openMobileGlobe ? "h-sm-navbar-translation lg:hidden py-sm-card" : "h-0"}
        `}
      >
        <ul>
          {
            localizedMetadata.map((info) => (
              <li
                key={`locale-mobile-prefix-${info.locale}`}
                className={`flex flex-col justify-center h-navbar-item ${!openMobileGlobe ? "hidden" : "lg:hidden"}`}>
                <a
                  href={ parseNavigationLink(info.pathname, info.locale) }>
                  <h2 className={`text-sm-h3-card text-white ml-sm-subtopic`}>
                    { localeMap[info.locale].title }
                  </h2>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
      <div
        style={{ transition: "height 0.2s" }}
        className={`absolute w-full bg-black overflow-y-auto ${openMenuBar ? "h-navbar-menu py-sm-card" : "h-0"}
      `}>
        <ul>
        {
          headerNavigations.map((navigation, navigationIndex) => (
            navigation.links.length === 0 ? (
              <li key={navigation.title} className={`flex flex-col justify-center h-navbar-item ${!openMenuBar ? "hidden" : ""}`}>
                <a href={ navigation.link }>
                  <h2
                    key={`navigation-${navigationIndex}`}
                    className={`text-sm-h3-card text-white ml-sm-subtopic`}>
                    { navigation.title }
                  </h2>
                </a>
              </li>
            ) : (
              <React.Fragment key={navigationIndex}>
                <li
                  className={`flex flex-row items-center justify-between px-sm-subtopic h-navbar-item ${!openMenuBar ? "hidden" : ""}`}
                  onClick={() => navigation.links && changeOpenSubMenu(navigationIndex)}
                >
                  <h2
                    key={`navigation-${navigationIndex}`}
                    className={`text-sm-h3-card text-white`}
                  >
                    { navigation.title }
                  </h2>
                  <img
                    alt="dropdown"
                    src="https://cdn.chiron.care/cms/general/icons/arrow-right-white.svg"
                    style={{ transform: "rotate(90deg)" }}
                    className={`w-4 h-4 ${!openSubMenu[navigationIndex] ? "" : "hidden"}`} />
                  <img
                    alt="dropdown"
                    src="https://cdn.chiron.care/cms/general/icons/arrow-right-white.svg"
                    style={{ transform: "rotate(-90deg)" }}
                    className={`w-4 h-4 ${!openSubMenu[navigationIndex] ? "hidden" : ""}`} />
                </li>
                {
                  navigation.links.length && (
                    <ul className={`ml-sm-card ${!openSubMenu[navigationIndex] ? "hidden" : ""}`}>
                      {
                        navigation.links.map((link) => (
                          <li key={link.title} className="flex flex-col justify-center h-navbar-item">
                            <a href={ link.link }>
                              <h2
                                key={`navigation-${navigationIndex}`}
                                className={`text-sm-h3-card text-white ml-sm-subtopic`}
                              >
                                { link.title }
                              </h2>
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
              </React.Fragment>
            )
          ))
        }
        </ul>
      </div>
    </div>
  );
};

export interface HeaderNavigationProps {
  locale: string
  localizedMetadata: any
  headerNavigations: any
}

export default React.memo(HeaderNavigation);
