import React, { useState } from 'react';
import { Drawer, Button, Menu, Grid } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { useBreakpoint } = Grid;

const menuItems = [
  { key: 'HOME', label: 'Home' },
  { key: 'ABOUT', label: 'About' },
  { key: 'SPACE_OUTREACH', label: 'Space Outreach' },
  { key: 'SPACE_EDUCATION', label: 'Space Education' },
  { key: 'CAPACITY_BUILDING', label: 'Capacity Building' },
  { key: 'RESOURCES', label: 'Resources' },
  { key: 'CONTACT_US', label: 'Contact Us', noHighlight: true },
];

const DrawerMenu = ({ activeKey = 'HOME', onSelect }) => {
  // ...existing code...

  const screens = useBreakpoint();
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Drawer
        placement="left"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        bodyStyle={{ backgroundColor: '#232121', padding: 0 }}
        width={240}
      >
        <Menu
          mode="vertical"
          selectedKeys={[activeKey]}
          onClick={({ key }) => {
            if (onSelect) onSelect(key);
            setVisible(false);
          }}
          style={{
            backgroundColor: '#232121',
            color: 'white',
            border: 'none',
          }}
        >
          {menuItems.filter(item => item.key !== 'CONTACT_US').map(({ key, label, noHighlight }) => (
            <Menu.Item
              key={key}
              style={{
                color: 'white',
                backgroundColor:
                  !noHighlight && activeKey === key ? 'rgba(255, 149, 0, 0.2)' : 'transparent',
                fontFamily: 'Inter',
              }}
            >
              {label}
            </Menu.Item>
          ))}
        </Menu>
        <Button
          type="primary"
          style={{
            backgroundColor: '#FF9500',
            color: '#000',
            width: '140px',
            margin: '12px 24px 0 16px',
            fontWeight: 600,
            fontSize: screens.xl ? '16px' : '15px',
            borderRadius: '8px',
            border: 'none',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 0,
            fontFamily: 'Inter',
          }}
          size={screens.xl ? 'middle' : 'small'}
          onClick={() => {
            if (onSelect) onSelect('CONTACT_US');
            setVisible(false);
          }}
        >
          CONTACT US
        </Button>
      </Drawer>
      <Button
        type="text"
        icon={<MenuOutlined style={{ fontSize: 24, color: '#fff' }} />}
        onClick={() => setVisible(true)}
        style={{ marginLeft: 8, color: '#fff', background: 'none', border: 'none' }}
      />
    </>
  );
}

export default DrawerMenu;

