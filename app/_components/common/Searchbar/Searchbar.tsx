"use client"
import t from "@/app/locale";
import { Autocomplete, Box, Card, CardContent, CardMedia, IconButton, Stack, TextField, Typography, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image'
import Link from "next/link";
import { createFilterOptions } from '@mui/material/Autocomplete';


type SearchOption = {
    id: string;
    description: string;
    name: string;
    src: string;
    slug: string;
    group: string;
    groupOrigin: string;
};

const fromServerOptions = [{
    id: '1',
    group: 'categories',
    name: 'cat_name1',
    slug: '/cat_name1',
    description: 'cat_desc_1',
    src: 'https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE='
}, {
    id: '2',
    group: 'categories',
    name: 'cat_name2',
    slug: '/cat_name2',
    description: 'cat_desc_3',
    src: 'https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE='
}, {
    id: '3',
    group: 'categories',
    name: 'cat_name3',
    slug: '/cat_name3sf',
    description: 'cat_desc_3',
    src: 'https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE='
}, {
    id: '4',
    group: 'categories',
    name: 'cat_name4',
    slug: '/cat_name4',
    description: 'cat_desc_4',
    src: 'https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE='
}, {
    group: 'products',
    id: '1',
    name: 'pro_name1',
    slug: '/pro_name1',
    description: 'cat_desc_1',
    src: 'https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE='
}, {
    group: 'products',
    id: '2',
    name: 'p_name2',
    slug: '/p_name2',
    description: 'cat_desc_2',
    src: 'https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE='
}, {
    group: 'products',
    id: '3',
    name: 'p_name3',
    slug: '/p_name3',
    description: 'cat_desc_3',
    src: 'https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE='
}, {
    group: 'products',
    id: '4',
    name: 'p_name4',
    slug: '/p_name4',
    description: 'cat_desc_4',
    src: 'https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE='
}, {
    group: 'products',
    id: '5',
    name: 'p_name5',
    slug: '/p_name5',
    description: 'cat_desc_5',
    src: 'https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE='
}, {
    group: 'products',
    id: '6',
    name: 'p_name6',
    slug: '/p_name6',
    description: 'cat_desc_6',
    src: 'https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE='
}, {
    group: 'products',
    id: '7',
    name: 'p_name7',
    slug: '/p_name7sf',
    description: 'cat_desc_7',
    src: 'https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE='
}, {
    group: 'products',
    id: '8',
    name: 'p_name8',
    slug: '/p_name8sf',
    description: 'cat_desc_8',
    src: 'https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE='
}] satisfies Omit<SearchOption, "groupOrigin">[]

const renderOption = (props: any, option: SearchOption) => (
    <Link href={option.slug} key={props.key}>
        <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
        >
            <Image
                src={option.src}
                alt={option.name}
                width={100}
                height={100}
                sizes="100vw"
            />
            <Stack direction="column">
                <Typography component="div" variant="h5">
                    {option.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {option.description}
                </Typography>
            </Stack>
        </Stack>
    </Link>
)

const options: SearchOption[] = fromServerOptions.map(o => {
    return {
        ...o,
        groupOrigin: o.group,
        group: t(o.group)
    };
});

const filterOptions = createFilterOptions({
    stringify: (option: SearchOption) => JSON.stringify(option)
});

export default function Searchbar({ ...props }) {
    return (
        <Autocomplete
            id="app-search"
            options={options}
            getOptionLabel={o => o.name}
            groupBy={o => o.group}
            renderInput={(params) => <TextField {...params} label={t('search')} />}
            getOptionKey={o => o.groupOrigin + o.id}
            renderOption={renderOption}
            sx={{ width: '66%' }}
            autoHighlight
            filterOptions={filterOptions}
        />
    );
}