import {  Fragment, useContext } from "react"
import CategoryPreivew from "../../components/category-preview/category-preview.component"

import { CategoriesContext } from "../../contexts/categories.context"




const CategoriesPreview =()=>{
    const { categoriesMap } = useContext(CategoriesContext)
    return(
        <Fragment>
            {Object.keys(categoriesMap).map(title =>{
                const products = categoriesMap[title];
                return (
                    <CategoryPreivew key={title} title={title} products={products} />
                )
            })}
        </Fragment>
        )
}

export default CategoriesPreview