import { MetadataRoute } from "next";
import {
  SITE_CONFIG,
  CORE_SERVICES,
  ALL_STATES_DATA,
  getAllPrebuiltCities,
  ALABAMA_ALL_CITIES,
} from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/why-us`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = CORE_SERVICES.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const states = Object.keys(ALL_STATES_DATA);
  const stateRoutes: MetadataRoute.Sitemap = [];
  for (const service of CORE_SERVICES) {
    for (const state of states) {
      stateRoutes.push({
        url: `${baseUrl}/${service.slug}/${state}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.85,
      });
    }
  }

  const allCityLocations = getAllPrebuiltCities();
  const cityRoutes: MetadataRoute.Sitemap = [];
  for (const service of CORE_SERVICES) {
    for (const cityData of allCityLocations) {
      cityRoutes.push({
        url: `${baseUrl}/${service.slug}/${cityData.stateSlug}/${cityData.citySlug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
    // Include all 463 Alabama cities for the primary 'hvac' service category
    if (service.slug === "hvac") {
      for (const alCity of ALABAMA_ALL_CITIES) {
        cityRoutes.push({
          url: `${baseUrl}/hvac/alabama/${alCity.slug}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.75,
        });
      }
    }
  }

  return [...staticRoutes, ...serviceRoutes, ...stateRoutes, ...cityRoutes];
}
