import { notFound } from "next/navigation";
import { DynamicProductsData } from "../../../../public/assets/images/productdata/dynamicproducts";
import ProductDetailView from "@/components/products/ProductsDetailView";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return DynamicProductsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const product = DynamicProductsData.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} | Skyon Innovation`,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }: Props) {
  const product = DynamicProductsData.find((p) => p.slug === params.slug);
  if (!product) notFound();
  return <ProductDetailView product={product} />;
}