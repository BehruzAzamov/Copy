import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";

function ProductGrid() {
    const { products } = useLoaderData();
    console.log(products);

    return (
        <div className="pt-12 grid gap-4 mf:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
                const { title, price, image } = product.attributes;
                const dollarAmount = formatPrice(price);
                return (
                    <Link
                        to={`/products/${product.id}`}
                        key={product.id}
                        className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
                    >
                        <figure className="px-4 pt-4">
                            <img
                                className="rounded-xl h-64 md:h-48 w-full object-cover"
                                src={image}
                                alt={image}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title capitalize tracking-wider">{title}</h2>
                            <p className="text-secondary">{dollarAmount}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default ProductGrid;
