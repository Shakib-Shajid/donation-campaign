
const Card = ({ card }) => {
    const { img, category, title, color } = card;
    return (
        <div>
            <div className="card w-72">
                <figure><img src={img} alt={title} /></figure>
                <div className="card-body p-4" style={{ backgroundColor: color["background-color"] }}>
                    <h2 className="mx-auto ml-0 px-3 py-1 card-title text-sm font-medium" style={{ backgroundColor: color["category-color"], color: color['category-title-color'] }}>{category}</h2>
                    <p className="text-lg font-semibold" style={{ color: color["category-title-color"] }}>{title}</p>
                </div>

            </div>
        </div >
    );
};

export default Card;