
const Category = ({ category }) => {
    const { logo, id, category_name, availability } = category;
    return (
        <div>
            <img src={logo} alt="" />
            <h2 className="text-4xl">{category_name}</h2>
            <p className="text-3xl">{availability}</p>
        </div>
    );
};

export default Category;