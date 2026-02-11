import React, { useEffect, useState } from "react";
import { ThemeContext } from './ThemeContext';
import { dezThemeSet } from './ThemeDemo';

const ThemeContextProvider = (props) => {
  const [sideBarStyle, setSideBarStyle] = useState({ value: "full", label: "Full", });
  const [sidebarposition, setSidebarposition] = useState({ value: "fixed", label: "Fixed", });
  const [headerposition, setHeaderposition] = useState({ value: "fixed", label: "Fixed", });
  const [sidebarLayout, setSidebarLayout] = useState({ value: "vertical", label: "Vertical", });
  const [direction, setDirection] = useState({ value: "ltr", label: "LTR" });
  const [primaryColor, setPrimaryColor] = useState("color_1");
  const [navigationHader, setNavigationHader] = useState("color_1");
  const [haderColor, setHaderColor] = useState("color_1");
  const [sidebarColor, setSidebarColor] = useState("color_1");
  const [iconHover, setIconHover] = useState(false);
  const [sidebariconHover, setSidebariconHover] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [background, setBackground] = useState({ value: "light", label: "Light", });
  const [containerPosition_, setcontainerPosition_] = useState({ value: "wide-boxed", label: "Wide Boxed", });
  const body = document.querySelector("body");


  // layout
  const layoutOption = [
    { value: "vertical", label: "Vertical" },
    { value: "horizontal", label: "Horizontal" },
  ];
  const sideBarOption = [
    { value: "compact", label: "Compact" },
    { value: "full", label: "Full" },
    { value: "mini", label: "Mini" },
    { value: "modern", label: "Modern" },
    { value: "overlay", label: "Overlay" },
    { value: "icon-hover", label: "Icon-hover" },
  ];
  const backgroundOption = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
  ];
  const sidebarpositions = [
    { value: "fixed", label: "Fixed" },
    { value: "static", label: "Static" },
  ];
  const headerPositions = [
    { value: "fixed", label: "Fixed" },
    { value: "static", label: "Static" },
  ];
  const containerPosition = [
    { value: "wide", label: "Wide" },
    { value: "boxed", label: "Boxed" },
    { value: "wide-boxed", label: "Wide Boxed" },
  ];

  const changeSideBarStyle = (name) => {
    setSideBarStyle(name);
    body.setAttribute("data-sidebar-style", name.value);
  };

  const changeSideBarLayout = (name) => {
    setSidebarLayout(name);
    body.setAttribute("data-layout", name.value);
  };
  const changeDirection = (name) => {
    setDirection(name);
    body.setAttribute("direction", name.value);
  };

  const changePrimaryColor = (name) => {
    setPrimaryColor(name);
    body.setAttribute("data-primary", name);
  };

  const changeNavigationHader = (name) => {
    setNavigationHader(name);
    body.setAttribute("data-nav-headerbg", name);
  };

  const ChangeIconSidebar = () => {
    setIconHover(!iconHover);
  };

  const chnageHaderColor = (name) => {
    setHaderColor(name);
    body.setAttribute("data-headerbg", name);
  };

  const changeDirectionLayout = (name) => {
    setDirection(name);
    body.setAttribute("direction", name.value);
  };

  const chnageSidebarColor = (name) => {
    setSidebarColor(name);
    body.setAttribute("data-sidebarbg", name);
  };

  const ChangeIconSidebarOne = () => {
    setSidebariconHover(!sidebariconHover);
  };

  const ChangeSideBarPostion = (name) => {
    setSidebarposition(name);
    body.setAttribute("data-sidebar-position", name.value);
  };

  const changeSideBarPostion = (name) => {
    setSidebarposition(name);
    body.setAttribute("data-sidebar-position", name.value);
  };

  const changeHeaderPostion = (name) => {
    setHeaderposition(name);
    body.setAttribute("data-header-position", name.value);
  };

  const openMenuToggle = () => {
    sideBarStyle.value === "overly"
      ? setMenuToggle(true)
      : setMenuToggle(false);
  };

  const changeBackground = (name) => {
    body.setAttribute("data-theme-version", name.value);
    setBackground(name);
  };

  const changeContainerPosition = (name) => {
    setcontainerPosition_(name);
    body.setAttribute("data-container", name.value);
    name.value === "boxed" &&
      changeSideBarStyle({ value: "overlay", label: "Overlay" });
  };

  const setDemoTheme = (theme, direction) => {

    var setAttr = {};


    var themeSettings = dezThemeSet[theme];

    body.setAttribute("data-typography", themeSettings.typography);

    setAttr.value = themeSettings.version;
    changeBackground(setAttr);

    setAttr.value = themeSettings.layout;
    changeSideBarLayout(setAttr);

    //setAttr.value = themeSettings.primary;
    changePrimaryColor(themeSettings.primary);

    //setAttr.value = themeSettings.navheaderBg;
    changeNavigationHader(themeSettings.navheaderBg);

    //setAttr.value = themeSettings.headerBg;
    chnageHaderColor(themeSettings.headerBg);

    setAttr.value = themeSettings.sidebarStyle;
    changeSideBarStyle(setAttr);

    //setAttr.value = themeSettings.sidebarBg;
    chnageSidebarColor(themeSettings.sidebarBg);

    setAttr.value = themeSettings.sidebarPosition;
    changeSideBarPostion(setAttr);

    setAttr.value = themeSettings.headerPosition;
    changeHeaderPostion(setAttr);

    setAttr.value = themeSettings.containerLayout;
    changeContainerPosition(setAttr);

    //setAttr.value = themeSettings.direction;
    setAttr.value = direction;
    changeDirectionLayout(setAttr);

  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.setAttribute("data-typography", "poppins");
    body.setAttribute("data-theme-version", "light");
    body.setAttribute("data-layout", "vertical");
    body.setAttribute("data-primary", "color_1");
    body.setAttribute("data-nav-headerbg", "color_1");
    body.setAttribute("data-headerbg", "color_1");
    body.setAttribute("data-sidebar-style", "full");
    body.setAttribute("data-sidebarbg", "color_1");
    body.setAttribute("data-primary", "color_1");
    body.setAttribute("data-sidebar-position", "fixed");
    body.setAttribute("data-header-position", "fixed");
    body.setAttribute("data-container", "wide");
    body.setAttribute("direction", "ltr");
    let resizeWindow = () => {
      body.setAttribute("data-sidebar-style", "full");
    };
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        body,
        sideBarOption,
        layoutOption,
        sideBarStyle,
        changeSideBarStyle,
        changeSideBarLayout,
        sidebarLayout,
        changeDirection,
        direction,
        primaryColor,
        changePrimaryColor,
        navigationHader,
        changeNavigationHader,
        haderColor,
        chnageHaderColor,
        sidebarColor,
        chnageSidebarColor,
        ChangeSideBarPostion,
        changeSideBarPostion,
        sidebarposition,
        headerposition,
        changeHeaderPostion,
        sidebarpositions,
        headerPositions,
        iconHover,
        ChangeIconSidebar,
        containerPosition,
        containerPosition_,
        backgroundOption,
        ChangeIconSidebarOne,
        sidebariconHover,
        menuToggle,
        openMenuToggle,
        changeBackground,
        background,
        setDemoTheme,
      }}
    >

      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
