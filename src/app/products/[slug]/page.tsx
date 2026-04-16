import { notFound } from "next/navigation";
import { DynamicProductsData } from "../../../../public/assets/images/productdata/dynamicproducts";
import ProductDetailView from "@/components/products/ProductsDetailView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DynamicProductsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = DynamicProductsData.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Skyon Innovation`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = DynamicProductsData.find((p) => p.slug === slug);
  if (!product) notFound();
  return <ProductDetailView product={product} />;
}