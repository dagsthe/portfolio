import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"
import * as React from "react"
import {useState, useEffect, useMemo} from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"

import { Bold, TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { Typewriter } from 'react-simple-typewriter'
import Expcard from './components/ui/expcard'
import Page from './components/ui/page'
import Clickbox from './components/ui/clickbox'
import html_logo from './assets/htmllogo.svg'
import css_logo from './assets/csslogo.svg'
import Contactpage from './components/ui/contact'
import Particles from './Particles.tsx'

function App() {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const timer = setTimeout(function(){
      setShowText(true);
    }, 1500)

    return () => clearTimeout(timer);
  })

  function addText(){
    return <Typewriter words={["DEVELOPER"]} 
      typeSpeed={200} 
      cursor={false} 
    />
  }

  function scrollToPage(Id:string){
    var section = document.getElementById(Id);
    if (section){
      section.scrollIntoView({behavior:"smooth"})
    }
  }

  function scrollToTop(){
    window.scrollTo({top:0, left:0, behavior:"smooth"})
  }

  return (
    <>
      <div className = "top w-[100%] fixed z-10">
        <Menubar>
          <MenubarMenu> {/* Creates the Navigation button */}
            <MenubarTrigger>Navigation</MenubarTrigger>
          
            <MenubarContent>
              <MenubarItem onClick={scrollToTop}>
                Landing Page
              </MenubarItem>
              <MenubarSeparator />

              <MenubarItem onClick={() => scrollToPage("experience")}>Experience</MenubarItem>
              <MenubarItem onClick={() => scrollToPage("skill")}>Skills</MenubarItem>

              <MenubarItem>Projects</MenubarItem>
              <MenubarSeparator />

              <MenubarItem onClick={() => scrollToPage("contact")}>Contact Me</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu> {/* Creates the social button */}
          <MenubarTrigger>Social</MenubarTrigger>
            <MenubarContent>
              <a href="https://www.youtube.com/" target="_blank">
                <MenubarItem >Youtube<img src = "https://www.svgrepo.com/show/13671/youtube.svg" width="20" height="20" alt="YT" style={{marginLeft:'5px'}}/> </MenubarItem>
              </a>
              
              {/* <MenubarItem>Roblox<img src = "https://upload.wikimedia.org/wikipedia/commons/archive/6/6c/20180316040214%21Roblox_Logo.svg" width="20" height="20" alt="YT" style={{marginLeft:'5px'}}/></MenubarItem> */}
              <a href="https://github.com/dagsthe" target="_blank">
                <MenubarItem>GitHub<img src = "https://www.svgrepo.com/show/303615/github-icon-1-logo.svg" width="20" height="20" alt="YT" style={{marginLeft:'5px', filter:'invert(1)'}}/></MenubarItem>
              </a>
              
              <MenubarSeparator />
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>
              <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <ModeToggle></ModeToggle>
                <Particles />
              </ThemeProvider>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>

      <div className="header mt-32">
        <h4 className="dark:text-cyberblue light:text-black font-mono text-lg">Hello, I'm Thedagz. This is my first website using React!</h4>
        <h1 className="font-mono text-5xl">
          <Typewriter words={["Web Developer"]} 
              typeSpeed={100} 
              cursor={true} 
          />
        </h1>

        <div className ="buttons p-5 space-x-2">
          <Button className="bg-slate-300 text-black font-bold">Resume</Button>
          <Button className="bg-slate-800 text-gray-300 font-bold">Contact Me</Button>
        </div>
      </div>

      <Page Name="experience" title="Experience">
        <Expcard 
          Title="Sharkie Federation" 
          Role="Right Fin of Commander Sharkie" 
          Descriptions={[
            "Once led a secret mission to infiltrate a top-secret sushi distributor and stole the secret sushi intel recipe.",
            "Trained for years in the ancient art of doing absolutely nothing. Mastered the ability to sit still for hours, watching Netflix with the dedication of a monk. My expertise includes overthinking every decision I make, procrastinating until the last possible moment, and finding the perfect balance between 'productive' and 'I’ll do it tomorrow.",
            "Professional napper with 72-hour record."
            ]}>
        </Expcard>

        <Expcard 
          Title="Fish Incorporate LLC" 
          Role="Fish Tester 2000 - 2100" 
          Descriptions={[
            "As a professional fish tester, I ensure every fish is up to the task… of satisfying my hunger. Freshness, taste, and seasoning? All get a full review.",
            "Accidentally dropped a fish in the water. Accidentally ate it too. It was part of my testing process"
          ]}>
        </Expcard>

        <Expcard 
          Title="CENTRAL SHARK VAULT" 
          Role="Transaction Manager" 
          Descriptions={[
            "One day, a rival fish gang tried to infiltrate the vault, disguised as harmless tuna. I spotted the odd fin and called in the shark security team just in time to stop their heist. Turns out, tuna really can’t keep secrets!",
            "A high-profile client came in today with a golden treasure chest. Turns out, it wasn’t gold—it was rare, exotic sushi that needed vault protection.",
            "I was just finishing my shift when a surprise shark vault inspection turned into an all-out chase after a slippery crook tried to make off with a bag of sushi. I ended up having to dive into the vault's laser maze to catch the thief."
          ]}>
        </Expcard>
      </Page>

      <Page Name="skill" title="Skills">
        <div className="
          grid gap-y-5 gap-x-5
          sm:grid-cols-1 sm:grid-rows-1
          md:grid-cols-2 md:grid-rows-2
          lg:grid-cols-3 lg:grid-rows-3
        ">
          <Clickbox title="React" img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
          <Clickbox title="Tailwind" img="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />
          <Clickbox title="Typescript" img="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" />
          <Clickbox title="Javascript" img="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" />
          <Clickbox title="Lua" img="https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" />
          <Clickbox title="Liquid" img="https://sissel.gallerycdn.vsassets.io/extensions/sissel/shopify-liquid/4.0.1/1699358936199/Microsoft.VisualStudio.Services.Icons.Default" />
          <Clickbox title="C#" img="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg" />
          <Clickbox title="HTML" img={html_logo} />
          <Clickbox title="CSS" img={css_logo} />
        </div>
      </Page>

      <div id="contact">
        <Contactpage></Contactpage>
      </div>
    </>
  )
}

export default App

{
  /*
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 350, mobile: 120 },
    { month: "April", desktop: 425, mobile: 190 },
    { month: "May", desktop: 500, mobile: 80 },
    { month: "June", desktop: 800, mobile: 10 },
  ]
  const chartConfig = {
    desktop: {
      label: "Femboy",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Female",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

        <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />

<Card>
  <CardHeader>
    <CardTitle>Femboy Superior - Chart</CardTitle>
    <CardDescription>
      Showing femboy popularity for the last 6 months
    </CardDescription>
  </CardHeader>
  <CardContent>
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Area
          dataKey="mobile"
          type="natural"
          fill="var(--color-mobile)"
          fillOpacity={0.4}
          stroke="var(--color-mobile)"
          stackId="a"
        />
        <Area
          dataKey="desktop"
          type="natural"
          fill="var(--color-desktop)"
          fillOpacity={0.4}
          stroke="var(--color-desktop)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  </CardContent>
  <CardFooter>
    <div className="flex w-full items-start gap-2 text-sm">
      <div className="grid gap-2">
        <div className="flex items-center gap-2 font-medium leading-none text-pink-300">
          Trending up by 69% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
      </div>
    </div>
  </CardFooter>
</Card>
  */
}
