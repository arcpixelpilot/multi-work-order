# **About Prefix**

**Prefix** is a seed-stage software and services startup offering comprehensive repair and maintenance solutions for restaurant and retail properties nationwide. We’re a **remote-first company**, committed to efficiency, professionalism, and top-quality customer satisfaction. We provide a wide range of services, including **HVAC/R, plumbing, electrical, and general repairs**.

As a growing startup, we manage a large volume of work orders for our clients. Our software platform streamlines this entire process—logging a work order, assigning it to one or more vendors, and tracking status through completion. In this challenge, you’ll get a glimpse of one of our core workflows: the **management of multi-vendor work orders**.

<br>
<br>

# **Overview of the Challenge**

We would like you to build a small application or code sample that demonstrates how you handle **work orders**, **customers**, and **vendors**—core concepts in Prefix’s system—**without needing to implement complete CRUD operations**. Instead, **seed some sample data** (e.g., a set of vendors, customers, and a few initial work orders) so you can show how:

- **A single work order** can be associated with **multiple vendors**.
- You can **reassign** or **reschedule** a work order from one vendor to another.

We want you to **propose your own approach** to modeling and handling multi-vendor assignments. There’s no single “correct” solution—we’re interested in seeing **your** design and reasoning.


## Set Up

- Clone the repo
- Run `yarn` to install dependencies
- Run `yarn prisma db seed` to seed the database
- Run `yarn dev` to start the development server


## Deliverables

- Update `prisma/schema.prisma` to include the necessary tables and relationships to handling multi-vendor assignments. A **work order** can be associated with **multiple** vendors in your data model. Show how you’d achieve this.
    - Run `yarn prisma migrate dev` to apply your changes to the database.
- Create/update `src/server/api/routers` to create a router for multi-vendor assignments to handle CRUD operations. Demonstrate a scenario where a work order is **assigned** and then **reassigned** to vendors.
- Please share your work via a public or private Git repository (GitHub, GitLab, etc.). **Do not push your code back to this repo.**



## Considerations

### **Encouragement to Use AI or Other Tools**

We understand the value of leveraging modern tools to be more efficient. Feel free to use **AI-assisted coding tools** such as **ChatGPT, Claude, Cursor**, or any others that help you achieve this challenge. We only ask that you **tell us which tools you used** and provide a brief explanation of **how** you used them (e.g., prompts, command inputs, or examples of generated code). This helps us understand your workflow and how you approach problem-solving with AI-assisted tools.

### **Questions?**

We encourage you to ask questions! If any part of this challenge is unclear—whether technical details, how our work order lifecycle really works, or how multiple vendor assignments could be handled—please reach out. We’re happy to dive deeper into real-world examples to help you shape your solution.

<br>
<br>
<br>
<br>
<br>

# Boilerplate Create T3 App Readme reference
This repo was created with Create T3 App. We've kept the code to a minimum and pointed to specific files to focus on the challenge, but if you'd like to see how the boilerplate works, you can check out the [Create T3 App](https://create.t3.gg/) documentation.

<br>
<br>
<br>
<br>
<br>

# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
