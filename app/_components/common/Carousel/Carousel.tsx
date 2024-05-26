"use client"

import * as React from 'react';
import Link from 'next/link';
import {
    Box,
    MobileStepper,
    Button
} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

type SlideProps = {
    src: string;
    alt: string;
    href: string;
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = ({ slides }: { slides: SlideProps[] }): React.JSX.Element => {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = slides.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) =>
            prevActiveStep == slides.length - 1 ? 0 : prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) =>
            prevActiveStep == 0 ? slides.length - 1 : prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ width: '100%', flexGrow: 1 }} position="absolute">
            <AutoPlaySwipeableViews
                axis='x-reverse'
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {slides.map((step, index) => (
                    <Link
                        key={step.href}
                        href={step.href}
                    >
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 255,
                                    display: 'block',
                                    // maxWidth: 'auto',
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.src}
                                alt={step.alt}
                            />
                        ) : null}
                    </Link>
                ))}
            </AutoPlaySwipeableViews>

            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button onClick={handleNext}>
                        <KeyboardArrowLeft fontSize='large' />
                    </Button>
                }
                backButton={
                    <Button onClick={handleBack}>
                        <KeyboardArrowRight fontSize='large' />
                    </Button>
                }
            />
        </Box >
    );
}

export default Carousel;