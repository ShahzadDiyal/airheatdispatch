import { redirect, notFound } from "next/navigation";
import { CORE_SERVICES } from "@/config/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CORE_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function LegacyServiceSlugRedirect({ params }: PageProps) {
  const { slug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Permanent 308 redirect to clean top-level service URL
  redirect(`/${service.slug}`);
}
