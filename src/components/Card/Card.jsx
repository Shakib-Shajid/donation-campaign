import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { id, img, category, title, color } = card;
    return (
        <div>
            <Link to={`/Cards/${id}`}>
                <div className="card w-72">
                    <figure><img src={img} alt={title} /></figure>
                    <div className="card-body p-4" style={{ backgroundColor: color["background-color"] }}>
                        <h2 className="mx-auto ml-0 px-3 py-1 card-title text-sm font-medium" style={{ backgroundColor: color["category-color"], color: color['category-title-color'] }}>{category}</h2>
                        <p className="text-lg font-semibold" style={{ color: color["category-title-color"] }}>{title}</p>
                    </div>

                </div>
            </Link>
        </div >
    );
};

export default Card;