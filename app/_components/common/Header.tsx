import { Stack } from "@mui/material";
import Logo from "./Logo";
import Searchbar from "./Searchbar/Searchbar";

export default function Header() {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            padding={1}
        >
            <Searchbar />
            <Logo width="64px" height="64px" />
        </Stack>
    );
}