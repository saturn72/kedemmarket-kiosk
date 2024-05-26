'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import {
    Box,
    Button,
    Container,
    Stack,
    Typography
} from '@mui/material';

const Hero: () => React.JSX.Element  = () => {
    
const [img, setImg] = React.useState<string>('/assets/home-hero-light.png');
return (
    <Box
        sx={{
            bgcolor: 'var(--mui-palette-neutral-950)',
            color: 'var(--mui-palette-common-white)',
            overflow: 'hidden',
            position: 'relative',
        }}
    >
        <Box
            sx={{
                alignItems: 'center',
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                left: 0,
                position: 'absolute',
                right: 0,
                top: 0,
                zIndex: 0,
            }}
        >
            <Box 
            component="img" 
            src="/assets/home-cosmic.svg" 
            sx={{ height: 'auto', width: 'auto' }} /> 
        </Box>
        <Box
            sx={{
                alignItems: 'center',
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                left: 0,
                position: 'absolute',
                right: 0,
                top: 0,
                zIndex: 1,
            }}
            >
            <Box 
                component="img"
                src="/assets/home-rectangles.svg" 
                sx={{ height: 'auto', width: '1900px' }} />
        </Box>
        <Container maxWidth="md" sx={{ position: 'relative', py: '120px', zIndex: 3 }}>
            <Stack spacing={4}>
                <Stack spacing={2}>
                    <Typography 
                    sx={{ 
                        fontSize: '3.1rem', 
                        fontWeight: 550, 
                        lineHeight: 1.2, 
                        textAlign: 'center'
                    }}>
                    קדם מרקט{' '}
                    <Typography 
                        color="primary.main" 
                        component="span" 
                        variant="inherit">מכירות קבוצתיות</Typography>{' '}to us.
                    </Typography>
                    <Typography color="neutral.300" sx={{ fontWeight: 400, textAlign: 'center' }} variant="h5">
                    Premium template designed to accelerate app development with a stunning design and powerful pre-built
                        Material UI components.
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                    <Button component={RouterLink} href={'/'} variant="contained">
                        Dashboard
                    </Button>
                    <Button
                        component={RouterLink}
                        href={'/'}
                        sx={{
                            color: 'var(--mui-palette-common-white)',
                            '&:hover': { bgcolor: 'var(--mui-palette-action-hover)' },
                        }}
                    >
                        Components
                    </Button>
                </Stack>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'center ' }}>
                    {/* <AvatarGroup sx={{ '& .MuiAvatar-root': { border: '2px solid var(--mui-palette-neutral-950)' } }}>
                        <Avatar alt="User 5" src="/assets/avatar-5.png" />
                        <Avatar alt="User 1" src="/assets/avatar-1.png" />
                        <Avatar alt="User 2" src="/assets/avatar-2.png" />
                    </AvatarGroup>  */}
                    <Typography color="neutral.300" sx={{ whiteSpace: 'nowrap' }} variant="caption">
                    <Typography color="inherit" component="span" sx={{ fontWeight: 700 }} variant="inherit">
                            4.7/5
                        </Typography>{' '}
                        based on (100+ reviews)
                    </Typography>
            </Stack> 
        </Stack>
        </Container>

         <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Box sx={{ bottom: 0, left: 0, position: 'absolute', px: '24px', right: 0, top: 0, zIndex: 0 }}>
            <Box
            sx={{ bgcolor: 'var(--mui-palette-neutral-950)', borderRadius: '28px', height: '100%', width: '100%' }}
                />
            </Box>
            <Box
                sx={{
                    bgcolor: '#8057f4',
                    filter: 'blur(50px)',
                    height: '30px',
                    left: '50%',
                    position: 'absolute',
                    top: 0,
                    transform: 'translateX(-50%)',
                    width: '80%',
                    zIndex: 1,
                }}
                />
            <Box
                component="img"
                src={img}
                sx={{ display: 'block', height: 'auto', position: 'relative', width: '100%', zIndex: 2 }}
            />
        </Container>
    </Box>
);
}

export default  Hero;
// "use client"

// import React from 'react'
// import { EmblaOptionsType } from 'embla-carousel'
// import { DotButton, useDotButton } from './CarouselDotButton'
// import {
    //     PrevButton,
//     NextButton,
//     usePrevNextButtons
// } from './CarouselArrowButtons'
// import useEmblaCarousel from 'embla-carousel-react'

// type HeroProps = {
    //     src: string;
    //     alt: string;
    //     href: string;
    // }
    
// type PropType = {
//     heros: HeroProps[]
//     options?: EmblaOptionsType
// }

// const EmblaCarousel: React.FC<PropType> = (props) => {
//     const { heros: slides, options } = props
//     const [emblaRef, emblaApi] = useEmblaCarousel(options)

//     const { selectedIndex, scrollSnaps, onDotButtonClick } =
//         useDotButton(emblaApi)

//     const {
//         prevBtnDisabled,
//         nextBtnDisabled,
//         onPrevButtonClick,
//         onNextButtonClick
//     } = usePrevNextButtons(emblaApi)

//     return (
//         <section className="embla">
//             <div className="embla__viewport" ref={emblaRef}>
//                 <div className="embla__container">
//                     {slides.map((_, index) => (
//                         <div className="embla__slide" key={index}>
//                             <div className="embla__slide__number">{index + 1}</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="embla__controls">
//                 <div className="embla__buttons">
//                     <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//                     <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//                 </div>

//                 <div className="embla__dots">
//                     {scrollSnaps.map((_, index) => (
//                         <DotButton
//                             key={index}
//                             onClick={() => onDotButtonClick(index)}
//                             className={'embla__dot'.concat(
//                                 index === selectedIndex ? ' embla__dot--selected' : ''
//                             )}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default EmblaCarousel
