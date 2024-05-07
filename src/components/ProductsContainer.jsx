import ProductGrid from './ProductGrid'
import ProductsList from './ProductsList'
import { useState } from 'react'
import { BsFillGearFill, BsList } from 'react-icons/bs'
import { useLoaderData } from 'react-router-dom'

function ProductsContainer() {
    const { meta } = useLoaderData()
    const totalProducts = meta.pagination.total
    const [layout, setLayout] = useState("grid")

    const setActiveStyle = (pattern) => {
        return `text-xl btn btn-circle btn-sm ${pattern == layout ? 'btn-primary text-primary-content' : 'btn-ghost text-base-content'}`
    }
    return (
        <>
            <div className='flex  justify-between items-center mt-8 border-b border-base-300 pb-5'>
                <h4 className="font-medium text-medium">
                    {totalProducts} product{totalProducts > 1 && "s"}
                </h4>
                <div className="flex gap-x-2">
                    <button onClick={() => {setLayout('grid')}} className={setActiveStyle('grid')}><BsFillGearFill/></button>
                    <button onClick={() => {setLayout('list')}} className={setActiveStyle('list')}><BsList/></button>
                </div>
            </div>
            <div>
                {totalProducts === 0 ? <h5>Sorry,no product matched your search...</h5> : layout == 'grid' ? <ProductGrid /> : <ProductsList />}
            </div>
        </>
    )
}

export default ProductsContainer