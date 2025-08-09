// src/components/layouts/header.jsx
import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Grid } from "antd";
import Logo from "../ui/logo";
import Button from "../ui/button";
import DrawerMenu from "./drawer.jsx";

const { Header: AntHeader } = Layout;
const { useBreakpoint } = Grid;

const Header = ({ activeNavItem = "HOME" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.lg;
  const isTablet = screens.md && !screens.lg;
  const isSmallMobile = !screens.sm;

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <AntHeader
      style={{
        backgroundColor: "#232121ff",
        borderBottom: "1px solid #333",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: 0,
        height: "auto",
        width: "100%",
      }}
    >
      <Row
        justify="space-between"
        align="middle"
        style={{
          height: isSmallMobile
            ? "70px"
            : isMobile
            ? "80px"
            : isTablet
            ? "90px"
            : "100px",
          width: "100%",
          margin: 0,
          padding: isSmallMobile
            ? "0 4px 0 2px"
            : isMobile
            ? "0 8px 0 2px"
            : isTablet
            ? "0 16px 0 2px"
            : "0 24px 0 2px",
        }}
      >
        <Col flex="none">
          <Logo
            size={isSmallMobile ? "small" : isMobile ? "small" : "default"}
          />
        </Col>
        {!isMobile && (
          <Col
            flex="auto"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {[
                "HOME",
                "ABOUT",
                "SPACE OUTREACH",
                "SPACE EDUCATION",
                "CAPACITY BUILDING",
                "RESOURCES",
              ].map((label) => (
                <a
                  key={label}
                  href={
                    label === "HOME"
                      ? "/"
                      : `/${label.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className={`header-nav-item ${
                    activeNavItem === label ? "active" : ""
                  }`}
                  style={{
                    color: activeNavItem === label ? "#FFFFFF" : "#D1D5DB",
                    textDecoration: "none",
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontWeight: activeNavItem === label ? "700" : "600",
                    letterSpacing: "0.3px",
                    whiteSpace: "nowrap",
                    borderBottom:
                      activeNavItem === label
                        ? "2px solid #F97316"
                        : "2px solid transparent",
                    paddingBottom: "4px",
                    marginRight: "20px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {label}
                </a>
              ))}
              <Button
                text="CONTACT US"
                variant="primary"
                size={screens.xl ? "medium" : "small"}
              />
            </div>
          </Col>
        )}
        {isMobile && (
          <Col flex="none">
            <DrawerMenu
              activeKey={activeNavItem}
              onSelect={(key) => {
                window.location.href =
                  key === "HOME"
                    ? "/"
                    : key === "ABOUT"
                    ? "/about"
                    : key === "SPACE_OUTREACH"
                    ? "/space-outreach"
                    : key === "SPACE_EDUCATION"
                    ? "/space-education"
                    : key === "CAPACITY_BUILDING"
                    ? "/capacity-building"
                    : key === "RESOURCES"
                    ? "/resources"
                    : "/";
              }}
            />
          </Col>
        )}
      </Row>
    </AntHeader>
  );
};

export default Header;
