'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageHero from '@/components/PackageHero';
import StepsBar from '@/components/build-umrah/StepsBar';
import DurationSelector from '@/components/build-umrah/DurationSelector';
import GroupSizeSelector from '@/components/build-umrah/GroupSizeSelector';

export default function BuildUmrahPage() {
    const [currentStep, setCurrentStep] = useState('duration');

    const handleNext = () => {
        if (currentStep === 'duration') setCurrentStep('group');
        // Add more steps as needed
    };

    const handleBack = () => {
        if (currentStep === 'group') setCurrentStep('duration');
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <PackageHero
                title={<>Build Your Umrah</>}
                subtitle="Begin your spiritual journey with ease and confident"
            />

            {/* Steps Progress Bar */}
            <StepsBar currentStep={currentStep} />

            {/* Main Content Area */}
            <div className="bg-white">
                {currentStep === 'duration' && <DurationSelector onNext={handleNext} />}
                {currentStep === 'group' && <GroupSizeSelector onNext={handleNext} onBack={handleBack} />}
            </div>

            <Footer />
        </main>
    );
}
