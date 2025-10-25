import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { ProductGrid } from '../ProductGrid';

export const WishlistPage: React.FC<{ onOpenProductModal: (product: any) => void }> = ({ onOpenProductModal }) => {
    const context = useContext(AppContext);

    if (!context) return null;

    const { translations, wishlist, products, handleNavigation } = context;

    const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 border-b dark:border-gray-700 pb-4">
                    {translations.my_wishlist}
                </h1>
                
                {wishlistedProducts.length > 0 ? (
                    <ProductGrid products={wishlistedProducts} onOpenProductModal={onOpenProductModal} />
                ) : (
                    <div className="text-center py-16">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <h2 className="mt-4 text-2xl font-bold text-gray-800 dark:text-gray-100">{translations.empty_wishlist}</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">{translations.empty_wishlist_prompt}</p>
                        <button 
                            onClick={() => handleNavigation('shop')}
                            className="mt-6 bg-primary text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-800 transition-colors"
                        >
                            {translations.continue_shopping}
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
};
