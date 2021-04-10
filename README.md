# Nathan's site

Hosted on [Vercel](https://vercel.com/dashboard) using [Cosmic](https://app.cosmicjs.com/projects) as a headless CMS

### Set up environment variables

Go to the **Settings** menu at the sidebar and click **Basic Settings**.

Next, copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `COSMIC_BUCKET_SLUG` should be the **Bucket slug** key under **Basic Settings**.
- `COSMIC_READ_KEY` should be the **Read Key** under **API Access**.
- `COSMIC_PREVIEW_SECRET` can be any random string (but avoid spaces) - this is used for [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode).

Your `.env.local` file should look like this:

```bash
COSMIC_BUCKET_SLUG=...
COSMIC_READ_KEY=...
COSMIC_PREVIEW_SECRET=...
```

### Step 4. in development mode

```bash

yarn install
yarn dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

### Step 5. Try preview mode

To add the ability to preview content from your Cosmic dashboard go to **Posts > Edit Settings** and scroll down to the "Preview Link" section. (Screenshot below)

![Image](https://cdn.cosmicjs.com/14e6c0f0-a07b-11ea-829b-5b458b05d525-preview-link.png)

Add your live URL or localhost development URL which includes your chosen preview secret and `[object_slug]` shortcode. It should look like the following:

```
http://localhost:3000/api/preview?secret=<secret>&slug=[object_slug]
```

- `<secret>` is the string you entered for `COSMIC_PREVIEW_SECRET`.
- `[object_slug]` shortcode will automatically be converted to the post's `slug` attribute.

On Cosmic, go to one of the posts you've created and:

- **Update the title**. For example, you can add `[Draft]` in front of the title.
- Click **Save Draft**, but **DO NOT** click **Publish**. By doing this, the post will be in the draft state.

Now, if you go to the post page directly on localhost, you won't see the updated title. However, if you use the **Preview Mode**, you'll be able to see the change ([Documentation](https://nextjs.org/docs/advanced-features/preview-mode)).

Next, click the Preview Link button on the Post to see the updated title. (Screenshot below)

<img src="https://cdn.cosmicjs.com/80f42680-a07a-11ea-829b-5b458b05d525-preview-button.png" width="300" />

To exit preview mode, you can click on **Click here to exit preview mode** at the top.

### Step 6. Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

#### Deploy from Our Template

Alternatively, you can deploy using our template by clicking on the Deploy button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/cms-cosmic&project-name=cms-cosmic&repository-name=cms-cosmic&env=COSMIC_BUCKET_SLUG,COSMIC_READ_KEY,COSMIC_PREVIEW_SECRET&envDescription=Required%20to%20connect%20the%20app%20with%20Cosmic&envLink=https://vercel.link/cms-cosmic-env)

#### Notes to future self

Content lives here
https://app.cosmicjs.com/personal-site-production/dashboard?message=app-installed

#### Task list

- [x] Make git repo
- [x] After initial commit, remove blog stuff for now
- [x] Make simple homepage
- [x] Push up to Github
- [x] Deploy to Vercel
- [x] Update domain hosting to point to Vercel
- [x] Validate new site is working as expected
- [x] Ensure it looks good on mobile
- [x] Archive old site/repo
- [ ] Add 'Things I'm proud of' section
- [x] Add animated circle the simulates scrolling down
