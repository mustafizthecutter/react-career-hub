import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch(`categories.json`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="mb-4">

            <h2 className="text-5xl text-center mb-2" >Job Category List</h2>
            <p className="text-2xl text-center ">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex space-between gap-8">
                {
                    categories.map(category => <Category category={category} key={category.id}></Category>)
                }
            </div>

        </div>
    );
};

export default CategoryList;