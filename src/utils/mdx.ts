import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const writeupsDirectory = path.join(process.cwd(), "src/content/writeups");

export type WriteupMetadata = {
    title: string;
    date: string;
    category: string;
    tags: string[];
    excerpt: string;
    slug: string;
    readingTime: string;
    image?: string;
};

export function getWriteupSlugs() {
    if (!fs.existsSync(writeupsDirectory)) {
        return [];
    }
    return fs.readdirSync(writeupsDirectory);
}

export function getWriteupBySlug(slug: string) {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = path.join(writeupsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);
    const timeToRead = readingTime(content).text;

    return {
        slug: realSlug,
        metadata: {
            ...data,
            readingTime: timeToRead,
        } as WriteupMetadata,
        content,
    };
}

export function getAllWriteups(): { slug: string; metadata: WriteupMetadata }[] {
    const slugs = getWriteupSlugs();
    const writeups = slugs
        .map((slug) => {
            const { metadata, slug: realSlug } = getWriteupBySlug(slug);
            return {
                slug: realSlug,
                metadata,
            };
        })
        // sort writeups by date in descending order
        .sort((writeup1, writeup2) => (writeup1.metadata.date > writeup2.metadata.date ? -1 : 1));
    return writeups;
}

export function getAllCategories(): string[] {
    const writeups = getAllWriteups();
    const categories = new Set(writeups.map((w) => w.metadata.category));
    return Array.from(categories);
}
