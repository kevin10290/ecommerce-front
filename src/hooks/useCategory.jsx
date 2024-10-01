import { useState, useEffect } from "react";

const useGetCategorys = () => {
    const [categorys, setCategorys] = useState([]);
    const [error, setError] = useState([]);
    const getCategorys = async () => {
        await fetch("https://ecommerce-api-4jtx.onrender.com/category/get")
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                setCategorys(data)
                setError("")
            } else {
                setError("No hay categorias")
            }
        })
        .catch(err => {
            setError(err.message)
        })
    };
    useEffect(() => {
        getCategorys();
    },[]);
    return [categorys, error];
}
 
export {
    useGetCategorys
};