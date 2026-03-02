import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI for Your Industry | Private AI Setup | Joe's Tech Solutions",
  description: "9 pre-configured private AI assistants for Healthcare, Legal, Financial, Therapy, Education, Real Estate, Construction, Creative, and Small Business. Compliance-ready.",
  alternates: {
    canonical: '/private-ai-setup/industries',
  },
  openGraph: {
    title: "AI for Your Industry | Joe's Tech Solutions",
    description: "Private AI assistants pre-configured for 9 industries. HIPAA-ready healthcare, privilege-protected legal, and more.",
    url: 'https://joestechsolutions.com/private-ai-setup/industries',
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
