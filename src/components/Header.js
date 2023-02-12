import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Row, Col } from "reactstrap";
import { isMobile } from 'react-device-detect';

import DropDownLinks from './Dropdown';
import Flower from './Flower';

import * as styles from "../styles/main.module.css";
import * as headerStyles from "../styles/header.module.css";

const Header = () => {

    const [open, setOpen] = React.useState(false);

    const paths = {
        Home: "/",
        Partners: "/partners",
        About: "/about",
    };

    const dropdownPaths = {
        Speakers: "/speakers",
        Workshops: "/workshops",
        Performers: "/performers",
    };

    const links = Object.keys(paths).map(key => {
        return (
            <Link
            key={key}
            to={paths[key]}
            className={`text-reset text-decoration-none ${styles.textShadowPrimary} ${headerStyles.link}`}
            style={{opacity: (open) ? 1:0}}
            >
                {key.toUpperCase()}
            </Link>
        );
    });

    return (
        <div className={headerStyles.headerContainer}>
            <Row className={headerStyles.itemContainer}>
                <Col xs={{size: 0}} md={{size: 3}} className={headerStyles.imageContainer}>
                    <StaticImage src="../images/tedxntua_logo_whitetext.png" alt="TEDxNTUA logo" className={headerStyles.image} />
                </Col>
                    {
                    !isMobile &&
                    <Col style={{display: (!isMobile) ? "flex":"none"}} className={headerStyles.linkContainer}>
                        <>
                            { links[0] }
                            <DropDownLinks paths={dropdownPaths} style={{opacity: (open) ? 1:0}}>
                                <span className={`${styles.textShadowPrimary} ${headerStyles.link}`}>
                                    EVENT&nbsp;
                                    <i className='fa fa-caret-down'></i>
                                </span>
                            </DropDownLinks>
                            { links.slice(1) }
                        </>
                    </Col>
                    }
                <Col xs={{size: 3}} md={{size: 1}} className={headerStyles.mobileMenuContainer}>
                    <Flower
                    onClick={() => setOpen(!open)}
                    style={{ transition: "all .2s", transform: (open) ? "rotate(360deg)":"rotate(0deg)" }}
                    className={headerStyles.toggler}
                    stroke="#F6E9C7"
                    shadow="#C51731"
                    strokeWidth={12}
                    />

                    {
                    isMobile &&
                    <Col style={{display: (isMobile) ? "flex":"none"}} className={headerStyles.mobileLinkContainer}>
                        <>
                            { links[0] }
                            <DropDownLinks
                            paths={dropdownPaths}
                            style={{opacity: (open) ? 1:0}}
                            permanentActive={true}
                            />
                            { links.slice(1) }
                        </>
                    </Col>
                    }

                </Col>
            </Row>
        </div>
    );
}

export default Header;