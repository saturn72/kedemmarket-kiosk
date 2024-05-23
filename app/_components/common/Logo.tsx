import t from "@/app/locale";
import { Avatar } from "@mui/material";

export default function Logo({ ...props }) {

    return (
        <Avatar src='/logo.png'
            alt={t('kedemMarketLogo')}
            sx={{
                width: "25%",
                maxWidth: 128,
                minWidth: 64,
                height: "25%"
            }}
            {...props}
        />
    );
}