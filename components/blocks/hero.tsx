"use client";
import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksHero } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import Image from "next/image";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import { Actions } from "./actions";
import MermaidElement from "../mermaid-renderer";

export const Hero = ({ data }: { data: PageBlocksHero }) => {
  return (
    <Section color={data.color} className="flex min-h-screen">
      {/* Left section - Image (30% width) */}
      {data.image && (
        <div className="w-1/3 relative">
          <Image
            data-tina-field={tinaField(data.image, "src")}
            className="object-cover w-full h-full"
            src={data.image.src}
            alt={data.image.alt || "Hero Image"}
            layout="fill"
            objectFit="cover"
          />
          {/* Overlay gradient for better readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-40"></div>
        </div>
      )}

      {/* Right section - Markdown content from Tina (70% width) */}
      <div className="w-2/3 p-8 overflow-y-auto">
        {/* Headline (Large Title) */}
        {data.headline && (
          <h1
            data-tina-field={tinaField(data, "headline")}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {data.headline}
          </h1>
        )}

        {/* Tagline (Small Subtitle) */}
        {data.tagline && (
          <p
            data-tina-field={tinaField(data, "tagline")}
            className="text-xl mb-6 text-gray-700 dark:text-gray-300"
          >
            {data.tagline}
          </p>
        )}

        {/* Markdown Content */}
        {data.text && (
          <div
            data-tina-field={tinaField(data, "text")}
            className="prose prose-lg dark:prose-dark mb-6"
          >
            <TinaMarkdown content={data.text} />
          </div>
        )}

        {/* Call to Action (Buttons from Tina) */}
        {data.actions && (
          <div>
            <Actions
              className="justify-start"
              parentColor={data.color}
              actions={data.actions}
            />
          </div>
        )}

        {/* "Why Choose Us" Section */}
        <section className="bg-gray-100 p-6 rounded-lg mb-12">
          <h2
            className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center"
          >
            {data.whyChooseUsTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.whyChooseUs?.map((feature, index) => (
              <div
                key={index}
                data-tina-field={tinaField(feature, "title")}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Section>
  );
};


export const heroBlockSchema: Template = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
      whyChooseUsTitle: "Why Choose Us?",
      whyChooseUs: [
        { title: "Expert Technicians", description: "Our team is highly trained and experienced in all types of printers." },
        { title: "Quick Turnaround", description: "We understand the importance of your printer and work efficiently." },
        { title: "Affordable Rates", description: "Quality repair services at competitive prices." },
      ],
    },
  },
  fields: [
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text",
    },
    {
      label: "Actions",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          link: "/",
        },
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" },
          ],
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Primary", value: "primary" },
        { label: "Tint", value: "tint" },
      ],
    },
    {
      type: "string",
      label: "Why Choose Us Title",
      name: "whyChooseUsTitle",
    },
    {
      label: "Why Choose Us Features",
      name: "whyChooseUs",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          title: "Feature Title",
          description: "Feature Description",
        },
      },
      fields: [
        {
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Description",
          name: "description",
          type: "string",
        },
      ],
    },
  ],
};
