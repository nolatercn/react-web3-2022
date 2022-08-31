import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '@/images/logo.svg';
const { Sider } = Layout;
import routes from '@/router/menu';
import './index.less';
// qt: router path to key
const menu_add_key = function (arr: any): any {
  return arr.map((item: any) => {
    let children = null;
    if (item?.children?.length) {
      children = menu_add_key(item.children);
    }
    return { ...item, key: item.path, children };
  });
};

export default function MenuComponent() {
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    setMenuList(menu_add_key(routes));
    console.log(useLocation());
  }, []);

  const navigate = useNavigate();

  const goToNav = (e: any) => {
    console.log(e);

    e?.keyPath && navigate(e.key);
  };

  // const [collapsible, setCollapsible] = useState(true);
  return (
    <Sider trigger={<div>22</div>} theme={'light'} style={{ height: '100vh' }}>
      <div className="logo-wrapper">
        <img src={logo} alt="" />
        <h2 style={{ margin: '0 0 0 15px' }}>WEB 3.0</h2>
      </div>
      {/* <button onClick={() => setCollapsible(!collapsible)}>按钮</button> */}
      <Menu onClick={goToNav} mode="inline" items={menuList} />
    </Sider>
  );
}
