'use client'

import routes from '@/routes';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { FC, useState } from 'react'
import t from '@/app/locale';

interface FooterProps { caption: string, uri: string, icon: JSX.Element }
const links = {
  home:
  {
    caption: 'homePage',
    uri: routes.uris.home,
    icon: <HomeOutlinedIcon />
  },
  cart:
  {
    caption: 'cart',
    uri: routes.uris.checkout,
    icon: <ShoppingCartCheckoutOutlinedIcon />
  },
  account:
  {
    caption: 'account',
    uri: routes.uris.account,
    icon: <AccountCircleOutlinedIcon />
  },
}

const FooterButton: FC<FooterProps> = ({ caption, uri, icon }) => {
  return (
    <BottomNavigationAction showLabel={true} label={t(caption)} icon={icon} href={uri} />
  )
};

const Footer: FC = ({ }) => {
  const [value, setValue] = useState(0);
  return (
    <Box
      sx={{
        zIndex: 1000,
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        elavation: 3
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <FooterButton caption={links.cart.caption} uri={links.cart.uri} icon={links.cart.icon} />
        <FooterButton caption={links.account.caption} uri={links.account.uri} icon={links.account.icon} />
        <FooterButton caption={links.home.caption} uri={links.home.uri} icon={links.home.icon} />
      </BottomNavigation>
    </Box>
  );
}

export default Footer; 