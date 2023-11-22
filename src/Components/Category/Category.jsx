
const Category = ({ category }) => {
    const { logo, id, category_name, availability } = category;
    return (
        <div className="bg-green-50 pl-8 pr-20 pt-4 pb-4 mt-4 rounded-lg space-y-4">
            <img src={logo} alt="" />
            <h2 className="text-2xl font-bold">{category_name}</h2>
            <p className="text-base">{availability}</p>
        </div>
    );
};

export default Category;