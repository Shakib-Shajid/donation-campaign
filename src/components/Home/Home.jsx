import Cards from "../Cards/Cards";

const Home = () => {
    return (
        <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-center mt-6 lg:mt-36 mb-9">I Grow By Helping People In Need </h2>
            <div className="join flex justify-center">
                <input className="input input-bordered join-item w-1/3" placeholder="Search here.... " />
                <button className="btn bg-[#FF444A] text-white font-semibold px-4 py-4 join-item rounded-r-lg">Search</button>
            </div>
            <Cards></Cards>
        </div>
    );
};

export default Home;