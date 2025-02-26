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
    <Section color={data.color} className="py-20 bg-\${data.color}-500 dark:bg-\${data.color}-900">
      <Container
        size="large"
        className="grid grid-cols-1 md:grid-cols-5 gap-14 items-center"
      >
        {data.image && (
          <div className="md:col-span-2 flex justify-center">
            <Image
              data-tina-field={tinaField(data.image, "src")}
              className="rounded-lg shadow-lg"
              src={data.image.src}
              alt={data.image.alt || "Hero Image"}
              width={500}
              height={500}
            />
          </div>
        )}
        <div className="md:col-span-3 text-center md:text-left">
          {data.tagline && (
            <h2
              data-tina-field={tinaField(data, "tagline")}
              className="text-xl font-bold tracking-wide text-gray-700 dark:text-gray-300"
            >
              {data.tagline}
            </h2>
          )}
          {data.headline && (
            <h1
              data-tina-field={tinaField(data, "headline")}
              className="text-5xl font-extrabold text-blue-500 dark:text-blue-400 mt-4"
            >
              {data.headline}
            </h1>
          )}
          {data.text && (
            <div
              data-tina-field={tinaField(data, "text")}
              className="prose prose-lg dark:prose-dark mt-6"
            >
              <TinaMarkdown content={data.text} components={{ mermaid: ({ value }) => <MermaidElement value={value} /> }} />
            </div>
          )}
          {data.actions && (
            <div className="mt-10">
              <Actions
                className="justify-center md:justify-start"
                parentColor={data.color}
                actions={data.actions}
              />
            </div>
          )}
        </div>
      </Container>
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
  ],
};
