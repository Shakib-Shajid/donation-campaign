import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {

    const [donateCard, setDonateCard] = useState([]);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonateCard(data));
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {
                donateCard.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;