import React, { useState } from 'react';

function CardFilter() {
    const [searchText, setSearchText] = useState('');
    const cards = [
        { title: "Superman" },
        { title: "Supergirl" },
        { title: "Spiderman" },
        { title: "Superwoman" },
        { title: "Ironman" },
        { title: "Batgirl" },
        { title: "Catwoman" }
    ];

    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const filteredCards = cards.filter(card => card.title.toLowerCase().startsWith(searchText.toLowerCase()));

    return (
        <>
            <input type="text" id="search-bar" placeholder="Search for a card..." value={searchText} onChange={handleSearch} />
            <div id="card-container">
                {filteredCards.map((card, index) => (
                    <div key={index} className="card" data-title={card.title}>{card.title}</div>
                ))}
            </div>
        </>
    );
}

export default CardFilter;
