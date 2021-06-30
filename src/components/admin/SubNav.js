import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-left: -25px;
  margin-top: 10px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 16px;
  transition: all .5s ease;
  &:hover {
    background-color: #d20a0a;
    color: #e1e9fc;
    text-decoration: none;

    
  }
`;

const SidebarLabel = styled.span`
  
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 2rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 16px;
  transition: all .5s ease;
  &:hover {
    background-color: #d20a0a;
    color: #e1e9fc;
    text-decoration: none;
    transform: translateY(0);
  }
`;

const SubNav = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SidebarLink>
            {subnav &&
            item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                );
            })}
        </>
    );
};

export default SubNav;

