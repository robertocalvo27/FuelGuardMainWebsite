import dynamic from 'next/dynamic';

const HomeContent = dynamic(() => import('./home-content'), {
  ssr: false
});

export default function HomePage() {
  return <HomeContent />;
}