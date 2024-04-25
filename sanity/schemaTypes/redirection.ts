import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, type ValidationContext } from "sanity";

export default defineType({
  name: "redirection",
  title: "Redirection",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "source",
      // TODO: slug???
      type: "string",
      title: "Source",
      validation: (rule) =>
        rule
          .required()
          .custom(async (value, context) => await isUnique(value, context)),
    }),
    defineField({
      name: "destination",
      type: "string",
      title: "Destination",
      validation: (rule) => rule.required(),
    }),
  ],
});

const isUnique = async (
  source: string | undefined,
  context: ValidationContext,
) => {
  const { document, getClient } = context;
  if (!document || !source) return true;

  const client = getClient({ apiVersion: "2023-04-24" });
  const id = document._id.replace(/^drafts\./, "");
  const params = {
    draft: `drafts.${id}`,
    published: id,
    source,
    locale: document.locale ?? null,
  };

  const query = `!defined(*[
    _type == "redirection" &&
    !(_id in [$draft, $published]) &&
    source == $source &&
    locale == $locale
  ][0]._id)`;

  try {
    const result = await client.fetch<boolean>(query, params);
    if (!result) throw new Error("This value is already in use");

    return result;
  } catch (err) {
    console.error(err);
    return "This value is already in use";
  }
};
