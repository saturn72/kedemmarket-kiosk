"use client"
import t from "@/app/locale";
import { Autocomplete, Box, Card, CardContent, CardMedia, IconButton, Stack, TextField, Typography, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image'
import Link from "next/link";
import { createFilterOptions } from '@mui/material/Autocomplete';
import { SearchEntry } from "./types";
import { getSearchEntries } from "./actions";
import { useEffect, useState } from "react";

const renderOption = (props: any, option: SearchEntry) => (
    <Link href={option.slug} key={props.key}>
        <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
            <Image
                src={option.src}
                alt={option.name}
                width={100}
                height={100}
                sizes="100vw"
            />
            <Stack direction="column">
                <Typography
                    component="div"
                    // variant="h5"
                    sx={{ typography: { sm: 'subtitle1', xs: 'subtitle2' } }}>
                    {option.name}
                </Typography>
                <Typography display={{ sm: 'block', xs: 'none' }}
                    variant="subtitle2"
                    color="text.secondary"
                    component="div">
                    {option.description}
                </Typography>
            </Stack >
        </Stack>
    </Link>
)

const filterOptions = createFilterOptions({
    stringify: (option: SearchEntry) => JSON.stringify(option)
});



export default function Searchbar({ ...props }) {
    const [loading, setLoading] = useState<boolean>(true);
    const [options, setOptions] = useState<SearchEntry[]>([]);
    const [renderInputText, setRenderInputText] = useState<string>(t('loading'));

    useEffect(() => {
        setLoading(true);

        getSearchEntries()
            .then(fse => {
                const o = fse.map(o => {
                    return {
                        ...o,
                        groupOrigin: o.group,
                        group: t(o.group)
                    };
                });
                setOptions(o);
                setLoading(false);
            });
    }, [])
    useEffect(() => setRenderInputText(t(loading ? 'loading' : 'search')), [loading]);

    const renderInput = (params: any) => <TextField {...params} label={renderInputText} />;

    return (
        <Autocomplete
            size="small"
            loading={loading}
            id="app-search"
            aria-placeholder="app-search"
            options={options}
            getOptionLabel={o => o.name}
            groupBy={o => o.group}
            renderInput={renderInput}
            getOptionKey={o => o.groupOrigin + o.id}
            renderOption={renderOption}
            sx={{ width: { lg: "80%", xs: "100%", } }}
            autoHighlight
            filterOptions={filterOptions}
        />
    );
}