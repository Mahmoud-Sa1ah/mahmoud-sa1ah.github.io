import { getAllWriteups, getAllCategories } from "@/utils/mdx";
import WriteupsClient from "./WriteupsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Writeups",
    description: "Cybersecurity CTF writeups, research, and deep dives.",
};

export default function WriteupsPage() {
    const writeups = getAllWriteups();
    const categories = getAllCategories();

    return <WriteupsClient writeups={writeups} categories={categories} />;
}

