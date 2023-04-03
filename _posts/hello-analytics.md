---
title: "Open Source Web Development: This Blog and Web Analytics with Next.js and Umami"
excerpt: "How I set up this blog, as well as Umami analytics for all of my websites."
coverImage: "/assets/blog/hello-world/13.webp"
date: "2023-04-02T09:57:07.322Z"
author:
  name: Forest Heims
  picture: "/assets/blog/authors/foxie.png"
ogImage:
  url: "/assets/blog/dynamic-routing/routing.PNG"
---

## My First Next.js App

I used the Blog Starter Kit accessible here: [https://vercel.com/new/templates/next.js/blog-starter-kit](https://vercel.com/new/templates/next.js/blog-starter-kit)

To bootstrap this template, I ran this command in the terminal:

`npx create-next-app --example blog-starter blog-starter-app`

I then updated the content and styles to personal preference.

After pushing this up to GitHub, I made sure everything was going to deploy correctly.Netlify was used to deploy this blog by adding a new site from the dashboard, importing from the GitHub repo, and clicking Deploy site with the default build settings.

After working on this and a few other projects I realized implementing analytics would be a good thing to learn, as well as provide me with some insight into my own websites traffic. These days searching for open source alternatives is one of the first things that comes to mind with web technologies, or any other software.

So that's how I found [Umami](https://umami.is/) Analytics. First step is cloning / forking this repo: [https://github.com/umami-software/umami](https://github.com/umami-software/umami). Following these instructions for [Running on Heroku](https://umami.is/docs/running-on-heroku) in their docs, I was able to get a database setup and the backend server deployed.

After that, signing in as admin, and changing the password, the UI is quite pleasantly simple and intuitive to navigate. Language accessibility and dark mode are also built in, so that's awesome! Adding a new site is done in the settings. Once added, a tracking code script tag is generated and can be copied and placed in the head of the `index.html` or equivalent.

The one not so open source thing I haven't yet decided on an alternative for is using Heroku to host the analytics server and database. I selected the Postgres add-on that costs $9.00/month, but it still falls asleep after 30 minutes of inactivity. This is super noticeable because it ends up taking 20 sec to wake the server up and receive the requested script, which is almost instantaneous when the server is awake.

In order to keep the server awake I ended up going with [UptimeRobot](https://uptimerobot.com/). This was my second attempt at trying to keep my Heroku server awake, both methods I learned of from this blog titled [8 No Brainer Ways to Keep Your Heroku App Awake](https://genicsblog.com/gouravkhunger/8-ways-to-keep-your-heroku-app-awake). Adding a new monitor from the UptimeRobot dashboard is also pretty simple to set up. I used the HTTP(s) Monitor Type, set at every 26 minutes.

For some reason completing this self assigned task felt like taking a first big step as an open source developer. Not sure why this gave me that feeling, but lately, without having a full-time job, I have had a lot of extra time that I try to focus on learning new technologies. Many things have been starting to come together and each days learning and unlearning, I'm gaining confidence in my abilities, while staying humble to how little I know.

Thanks for reading,

-F
