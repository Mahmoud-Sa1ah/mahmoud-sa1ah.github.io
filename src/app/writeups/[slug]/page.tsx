import { getWriteupBySlug, getWriteupSlugs } from "@/utils/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { useMDXComponents } from "@/mdx-components";
import { Metadata } from "next";
import CustomPre from "@/components/mdx/CustomPre";
import ScrollProgress from "@/components/common/ScrollProgress";
import TableOfContents from "@/components/mdx/TableOfContents";

export async function generateStaticParams() {
    const slugs = getWriteupSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata(
    // @ts-ignore
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const resolvedParams = await params;
    const { metadata } = getWriteupBySlug(resolvedParams.slug);
    return {
        title: metadata.title,
        description: metadata.excerpt,
        openGraph: {
            title: metadata.title,
            description: metadata.excerpt,
            type: "article",
            publishedTime: metadata.date,
            authors: ["m0xsa1ah"],
        },
        twitter: {
            card: "summary_large_image",
            title: metadata.title,
            description: metadata.excerpt,
        },
    };
}

const prettyCodeOptions = {
    theme: "github-dark-dimmed", // or 'dracula', 'one-dark-pro', etc.
};

export default async function WriteupPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { metadata, content } = getWriteupBySlug(resolvedParams.slug);

    return (
        <article className="container px-6 max-w-7xl mx-auto py-12 min-h-screen">

            <div className="mb-12 border-b border-border/50 pb-8">
                <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 text-xs font-mono bg-accent-blue/10 text-accent-blue rounded border border-accent-blue/20">
                        {metadata.category}
                    </span>
                    <div className="flex items-center gap-2 text-foreground/50 text-sm font-mono">
                        <Calendar size={14} />
                        <time dateTime={metadata.date}>{metadata.date}</time>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/50 text-sm font-mono">
                        <Clock size={14} />
                        <span>{metadata.readingTime}</span>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    {metadata.title}
                </h1>

                <div className="flex flex-wrap gap-2">
                    {metadata.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1 text-xs font-mono text-accent-blue/80 px-2 py-1 bg-background/50 border border-border/50 rounded">
                            <Tag size={12} />
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-12 relative">
                <div className="prose prose-invert prose-lg max-w-none flex-1 min-w-0 prose-headings:text-foreground prose-h2:scroll-mt-32 prose-h3:scroll-mt-32 prose-a:text-accent-blue hover:prose-a:text-accent-blue prose-a:transition-colors prose-pre:bg-transparent prose-pre:p-0">
                    <MDXRemote
                        source={content}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [remarkGfm],
                                rehypePlugins: [
                                    rehypeSlug,
                                    [rehypePrettyCode, prettyCodeOptions],
                                ]
                            }
                        }}
                        // @ts-ignore
                        components={{ pre: CustomPre }}
                    />
                </div>

                <aside className="hidden xl:block w-64 shrink-0">
                    <TableOfContents />
                </aside>
            </div>

            {/* Progress Bar */}
            <ScrollProgress />
        </article>
    );
}
