import ProductCart from "@/components/aboutProduct/productCard";
import { getAllProducts } from "@/components/services/products";
import { TProduct } from "@/components/types";

const AllPostsPage = async () => {
  const products = await getAllProducts("ssr", true);
  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="text-4xl text-center">
        Latest <span className="text-fuchsia-800">Products</span>
      </h1>
      <p className="text-gray-400 text-center italic w-2/4 mx-auto mt-2">
        Explore, Find, and rate your favorite products. Join a community of
        products lovers and share your best experiences.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {products.map((product: TProduct) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllPostsPage;
