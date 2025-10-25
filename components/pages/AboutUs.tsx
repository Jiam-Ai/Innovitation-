import React, { useContext } from 'react';
import { AppContext } from '../../App';

export const AboutUs: React.FC = () => {
    const context = useContext(AppContext);
    if (!context) return null;
    const { translations } = context;

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 border-b dark:border-gray-700 pb-4">{translations.about_us}</h1>
                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p className="text-lg">
                        Welcome to Innovative Gadget, your premier destination for the latest in tech and electronics. We're dedicated to bringing you the very best of the gadget world, with a focus on quality, innovation, and outstanding customer service.
                    </p>
                    <p>
                        Founded in {new Date().getFullYear()}, Innovative Gadget was born from a passion for technology and a desire to make cutting-edge devices accessible to everyone. We now serve tech enthusiasts all over the world and are thrilled to be a part of the ever-evolving electronics industry.
                    </p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                        <div className="bg-lightgray dark:bg-gray-700/50 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold text-primary dark:text-blue-400 mb-3">Our Mission</h2>
                            <p>To curate a world-class selection of innovative gadgets that enhance and simplify modern life, connecting our customers with the technology of tomorrow, today.</p>
                        </div>
                        <div className="bg-lightgray dark:bg-gray-700/50 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold text-secondary mb-3">Our Vision</h2>
                            <p>To be the most trusted and exciting e-commerce platform for gadget lovers, renowned for our unique products, competitive prices, and expert support.</p>
                        </div>
                    </div>
                    <p>
                        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                    </p>
                    <p className="font-semibold">
                        Sincerely,<br/>
                        The Innovative Gadget Team
                    </p>
                </div>
            </div>
        </main>
    );
};