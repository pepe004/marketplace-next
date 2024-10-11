import ProductGrid from '@/components/ProductGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import PromoSection from '@/components/PromoSection';
import AffiliateLink from '@/components/AffiliateLink';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Marketplace</h1>
      <FeaturedProducts />
      <PromoSection />
      <ProductGrid />
      <AffiliateLink />
    </div>
  );
}