import { getReadingTime } from "./readingTime";
import type { UnifiedItem, DisplayMeta, DisplayLink } from "../types/display";

export function getUnifiedItem(entry: any, customCollection?: string): UnifiedItem {
    const d = entry.data;
    const collection = (customCollection && customCollection !== "all") ? customCollection : entry.collection;
    const id = entry.id;

    const common = {
        id,
        collection,
        title: d.title,
        description: d.description,
        tags: d.tags || d.tech || [],
        featured: !!d.featured,
    };

    switch (collection) {
        case "publications":
            const pubDate = d.publicationDate?.toLocaleDateString("en-US", { year: "numeric", month: "long" });
            return {
                ...common,
                href: `/publications/${id}`,
                backLabel: "Publications",
                backHref: "/publications",
                metaLine1: pubDate,
                metaLine2: d.authors?.join(", "),
                meta: [
                    { label: "Journal", value: d.journal },
                    { value: d.authors?.join(", ") },
                    { value: pubDate },
                ].filter(m => !!m.value),
                links: [
                    d.external_url && { href: d.external_url, label: "View" },
                    d.doi && { href: `https://doi.org/${d.doi}`, label: "DOI" },
                    d.pdf && { href: d.pdf, label: "PDF" },
                    d.url && { href: d.url, label: "Publisher" },
                ].filter((l): l is DisplayLink => !!l),
            };

        case "talks":
            const talkDate = d.date?.toLocaleDateString("en-US", { year: "numeric", month: "long" });
            return {
                ...common,
                href: `/talks/${id}`,
                backLabel: "Talks",
                backHref: "/talks",
                metaLine1: talkDate,
                metaLine2: `${d.event} • ${d.location}`,
                meta: [
                    { label: "Event", value: d.event },
                    { label: "Location", value: d.location },
                    { value: talkDate },
                ].filter(m => !!m.value),
                links: [
                    d.external_url && { href: d.external_url, label: "View" },
                    d.slides && { href: d.slides, label: "Slides" },
                    d.video && { href: d.video, label: "Video" },
                ].filter((l): l is DisplayLink => !!l),
            };

        case "projects":
            return {
                ...common,
                href: `/projects/${id}`,
                backLabel: "Projects",
                backHref: "/projects",
                metaLine1: "Source & Demo",
                meta: [{ value: d.description }].filter(m => !!m.value),
                links: [
                    d.external_url && { href: d.external_url, label: "View" },
                    d.github && { href: d.github, label: "GitHub" }
                ].filter((l): l is DisplayLink => !!l),
            };

        case "posts":
            const postDate = d.pubDate?.toLocaleDateString("en-US", { year: "numeric", month: "long" });
            const readTime = `${getReadingTime(entry.body || "")} min read`;
            return {
                ...common,
                href: `/blog/${id}`,
                backLabel: "Blog",
                backHref: "/blog",
                metaLine1: `${postDate} • ${readTime}`,
                meta: [
                    { label: "Author", value: d.author },
                    { value: postDate },
                    { value: readTime },
                ].filter(m => !!m.value),
                links: [
                    d.external_url && { href: d.external_url, label: "Read More" },
                ].filter((l): l is DisplayLink => !!l),
            };

        case "teaching":
            return {
                ...common,
                href: `/teaching/${id}`,
                backLabel: "Teaching",
                backHref: "/teaching",
                metaLine1: `${d.role} • ${d.institution}`,
                metaLine2: d.semester,
                meta: [
                    { label: "Role", value: d.role },
                    { label: "Institution", value: d.institution },
                    { label: "Semester", value: d.semester },
                ].filter(m => !!m.value),
                links: [
                    d.external_url && { href: d.external_url, label: "Course Page" },
                ].filter((l): l is DisplayLink => !!l),
            };

        default:
            return {
                ...common,
                href: `/${collection}/${id}`,
                backLabel: "Back",
                backHref: `/${collection}`,
                meta: [],
                links: [],
            };
    }
}
