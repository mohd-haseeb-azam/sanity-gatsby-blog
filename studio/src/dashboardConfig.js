export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61dda553b61e4b486999a94d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-xsh8p2ac",
                  apiId: "fcd80b55-6754-4444-91d9-0ddc8d6a00cf",
                },
                {
                  buildHookId: "61dda5536d3fb849562e1f76",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-8qjx9gtu",
                  apiId: "b6c18d54-15e6-469d-b5fc-49aaf110fb15",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mohd-haseeb-azam/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-8qjx9gtu.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
