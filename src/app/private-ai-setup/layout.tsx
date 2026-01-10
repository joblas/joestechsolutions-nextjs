import { Metadata } from 'next';
import { FAQSchema, SoftwareProductSchema } from '@/components/seo/JsonLd';
import { privateAiFaqs } from './faqs';

export const metadata: Metadata = {
  title: "Private AI Setup | Joe's Tech Solutions",
  description: "Secure, private AI infrastructure for your business. Run ChatGPT-level models locally or on your own VPS. No data leaks, no subscriptions.",
  alternates: {
    canonical: '/private-ai-setup',
  },
  openGraph: {
    title: "Private AI Setup | Joe's Tech Solutions",
    description: "Your own private AI workspace. Secure, no data leaks, no monthly fees.",
    url: 'https://joestechsolutions.com/private-ai-setup',
    images: ['/images/tech-monitors-development.jpg'],
  },
};

export default function PrivateAiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SoftwareProductSchema />
      <FAQSchema faqs={privateAiFaqs} />
      {children}
    </>
  );
}
