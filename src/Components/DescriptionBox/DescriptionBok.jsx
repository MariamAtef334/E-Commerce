import React from 'react';
import '../DescriptionBox/DescriptionBox.css';
export const DescriptionBok = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>

            </div>
            <div className="descriptionbox-description">
                <p>Ecommerce is one way people buy and sell things in retail.
                    Some companies sell products online only, while other sellers use ecommerce as a part of a broader
                    strategy that includes physical stores and other distribution channels. Either way, ecommerce allows startups,
                    small businesses, and large companies to sell products at scale and reach customers across the world.
                    Businesses might create a branded store experience on a store like Amazon,
                    build their own commerce site on a dedicated domain, or do it all for a multi-channel approach.
                </p>
                <p>Ecommerce works by connecting buyers and sellers using various electronic channels.
                    For example, you need a channel, such as a website or social media, so customers can find products and services to purchase.
                    Then a payment processor enables the exchange of the goods or services.
                    Once the transaction succeeds, the customer receives a confirmation email or SMS, and a printable receipt.</p>


            </div>
        </div>
    )
}
export default DescriptionBok;