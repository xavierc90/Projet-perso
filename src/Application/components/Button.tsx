import React, { useEffect } from 'react'; // Importation de React

const ButtonLarge = () => {
  // Fonction pour gérer le clic sur le bouton
  const openBooking = () => {
    console.log('OKAYYYYYY');
  };

  // Ajout d'un écouteur d'événements sur le bouton lorsque le composant est monté
  useEffect(() => {
    const button = document.getElementById('booking');
    if (button instanceof HTMLButtonElement) {
      button.addEventListener('click', openBooking);

      // Nettoyage de l'écouteur d'événements lors du démontage du composant
      return () => {
        button.removeEventListener('click', openBooking);
      };
    }
  }, []); // Dépendance vide signifie que cela ne s'exécutera qu'une seule fois après le montage du composant

  return (
    <button id="booking" className="bg-white text-black text-sm drop-shadow-md uppercase px-3 py-2 rounded-md mr-1">
      Réserver
    </button>
  );
};

export default ButtonLarge;
