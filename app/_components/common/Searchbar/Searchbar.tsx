"use client"
import t from "@/app/locale";
import { Autocomplete, Stack, TextField, Typography, } from "@mui/material";
import Image from 'next/image'
import Link from "next/link";
import { createFilterOptions } from '@mui/material/Autocomplete';
import { SearchEntry } from "@/app/api/search/types";
import { useEffect, useState } from "react";

type SearchEntryModel = SearchEntry & { groupOrigin: string; }

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
                // sizes="100vw"
                sizes="(max-width: 125px) 100vw"
            />
            <Stack direction="column">
                <Typography
                    component="div"
                    // variant="h5"
                    sx={{ typography: { sm: 'subtitle1', xs: 'subtitle2' } }}>
                    {option.name}
                </Typography>
                <Typography
                    display={{ sm: 'block', xs: 'none' }}
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
    stringify: (option: SearchEntryModel) => JSON.stringify(option)
});

function truncateString(source: string | undefined, maxLength: number, suffix: string = "...") {
    return !source || source.length < maxLength ?
        source :
        source.substring(0, maxLength - suffix.length) + suffix;
}

export default function Searchbar({ ...props }) {
    const [loading, setLoading] = useState<boolean>(true);
    const [options, setOptions] = useState<SearchEntryModel[]>([]);
    const [renderInputText, setRenderInputText] = useState<string>(t('loading'));

    useEffect(() => {
        setLoading(true);

        fetch('/api/search')
            .then((res) => res.json())
            .then(({ entries }: { entries: SearchEntry[] }) => {
                const o: SearchEntryModel[] = entries.map((e: SearchEntry) => {
                    return {
                        ...e,
                        description: truncateString(e.description, 25),
                        groupOrigin: e.group,
                        group: t(e.group)
                    };
                });
                setOptions(o);
                setLoading(false);
            })
    }, []);
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