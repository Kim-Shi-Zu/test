# ui_prompt.md
# UI Prompt: Lesson 2.1 – Networking Fundamentals

> **Purpose:** Define a React component using **shadcn/ui** that renders the lesson Markdown **and** embeds the real-world project component dynamically from its folder.  
>  
> **Render Lesson 2.1 & Project Demo**  
>  
> "Using the Markdown frontmatter and content for **Lesson 2.1**, plus the project in `components/projects/network-topology-explorer`, propose a Next.js page component:  
>  
> 1. Use `<Card>` and `<CardHeader>` for the lesson title. citeturn0search0  
> 2. Render the lesson body via a Markdown-to-JSX renderer styled with shadcn typography.  
> 3. In a separate `<Card>` section titled **Project Demo**, dynamically import and render `NetworkTopologyExplorer` from `components/projects/network-topology-explorer/NetworkTopologyExplorer`.  
> 4. Wrap code blocks in `<CardContent>` with proper `pre` styling.  
> 5. Include a `<Button>` for **Mark as Complete**, and **Prev**/**Next** navigation buttons in `<CardFooter>`.  
> 6. Ensure the project component auto-reloads when its folder’s code is updated (leveraging Next.js Fast Refresh). citeturn0search1  
