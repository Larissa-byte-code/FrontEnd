import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p> Ce site e-commerce a été développé avec React pour garantir rapidité, 
                flexibilité et évolutivité. L’architecture modulaire de l’application assure une maintenance 
                fluide et des mises à jour sans friction. Chaque composant a été pensé pour offrir une expérience
                 utilisateur optimale, tant sur desktop que mobile. Nous mettons un point d’honneur à combiner
                  performance, design moderne, et accessibilité. Naviguez en toute confiance grâce à une interface
                   intuitive, un panier interactif, et des pages produit détaillées qui vous mettent en valeur l’essentiel.</p>
            <p> Notre boutique en ligne vous propose une sélection soignée de vêtements et accessoires pour
                 femmes, hommes et enfants. Chaque produit est conçu pour répondre à vos exigences de qualité, d’esthétique et de confort. À travers une interface moderne, fluide et sécurisée, nous vous offrons une expérience d’achat agréable, accompagnée de services fiables tels que le paiement en ligne, la livraison rapide, et un service client à l’écoute. Que vous cherchiez les dernières tendances, des basiques intemporels ou des inspirations stylées pour renouveler votre garde-robe, notre site est pensé pour vous faciliter la vie. Faites confiance 
                à notre savoir-faire, à notre passion pour la mode, et à notre engagement pour votre satisfaction.</p>
        </div>
    </div>
  )
}
export default DescriptionBox