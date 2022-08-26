import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import logo from '@/images/logo.svg';
const { Sider } = Layout;
import routes from '@/router/menu';
import { useState } from 'react';
export default () => {
  const goToNav = (e: any) => {
    e?.item?.props?.path && useNavigate()(e.item.props.path);
  };
  const [collapsible, setCollapsible] = useState(true);
  return (
    <Sider trigger={<div>22</div>} theme={'light'} collapsed={collapsible}>
      <img src={logo} alt="" />
      <button onClick={() => setCollapsible(!collapsible)}>按钮</button>
      <Menu onClick={goToNav} mode="inline" items={routes} />
    </Sider>
  );
};
