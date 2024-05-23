import { AppBar, IconButton, Toolbar } from "@mui/material";
import Logo from "../Logo";
import Searchbar from "../Searchbar/Searchbar";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <AppBar color='default'>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <Searchbar />
                <Logo
                    width="64px"
                    height="64px"
                    sx={{
                        mr: 2,
                        display: { sm: 'block', xs: 'none' },
                    }} />
            </Toolbar >
        </AppBar >
    );
}