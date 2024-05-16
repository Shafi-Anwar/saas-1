import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { CardHeader, CardContent, Card } from "@/components/ui/card";

// ButtonLink component for styled link buttons

// CheckIcon component
function CheckIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// WrongIcon component
function WrongIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="28"
      height="24"
      {...props}
    >
      <path
        fill="#F44336"
        d="M21.5 4.5H26.501V43.5H21.5z"
        transform="rotate(45.001 24 24)"
      />
      <path
        fill="#F44336"
        d="M21.5 4.5H26.5V43.501H21.5z"
        transform="rotate(135.008 24 24)"
      />
    </svg>
  );
}

// FeatureCard component to display feature details
function FeatureCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Effortless Landing Pages for Your Business
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400">
                    Create stunning, conversion-optimized landing pages in minutes with{" "}
                    <Link href="/" passHref className="text-blue-600 underline hover:text-blue-800">
                      LaPhElper
                    </Link>{" "}
                    templates and an easy-to-use drag-and-drop builder.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link href="/signup" passHref>
                    <Button variant="link">Get Started</Button>
                  </Link>
                  <Link href="/templates" passHref>
                    <Button variant="link">View Templates</Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[310px] sm:h-auto">
                <Image
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                  layout="fill"
                  src="https://graphicsfamily.com/wp-content/uploads/edd/2022/09/Creative-Landing-Page-Design-for-Website-or-Product-1180x664.jpg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Features of{" "}
                  <Link href="/" className="items-center justify-center text-2x">
                    La<span className="text-emerald-200 font-bold">P</span>hElper
                  </Link>{" "}
                  Offers
                </h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">
                  Explore the powerful features that our SaaS platform offers, including free landing pages, design tools,
                  and a drag-and-drop editor.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Render your feature cards here */}
                <FeatureCard title="Templates of Landing Pages">
                  Create stunning landing pages for your business without any coding experience. Our platform provides a
                  wide range of customizable templates to choose from.
                </FeatureCard>
                <FeatureCard title="Design Templates">
                  Unleash your creativity with our powerful design templates. Use Figma Designs to bring your vision to life.
                </FeatureCard>
                <FeatureCard title="Drag-and-Drop Editor">
                  Our intuitive drag-and-drop editor makes it easy to build and customize your landing pages. No coding
                  required! Simply drag and drop elements to create the perfect layout.
                </FeatureCard>
                <FeatureCard title="Free Code Snippets">
                  Access a library of free code snippets that you can use to enhance your landing pages. From
                  interactive elements to responsive designs, we've got you covered.
                </FeatureCard>
                <FeatureCard title="Connect with Developer for Your Website">
                  If you don't like the templates given, contact us to create your own website.
                </FeatureCard>
                <FeatureCard title="Responsive Design">
                  Our platform ensures that your landing pages look great on any device, from desktops to mobile phones.
                  Responsive design is built-in, so you can focus on creating amazing content.
                </FeatureCard>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="pricing">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Affordable Plans for Businesses of All Sizes
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that best fits your needs and budget. All plans include suitable features of our product.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl">
                <CardHeader>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Starter</h3>
                    <p className="text-4xl font-bold">
                      $56
                      <span className="text-lg font-normal text-gray-500 dark:text-gray-400">/mo</span>
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />Limited Templates
                    </li>
                    <li>
                      <WrongIcon className="mr-2 inline-block h-4 w-4" />Designs templates for you
                    </li>
                    <li>
                    <WrongIcon className="mr-2 inline-block h-4 w-4" />Code for you
</li>

<li>
                    <WrongIcon className="mr-2 inline-block h-4 w-4" />Developer Access</li>

                    <li>
                    <WrongIcon className="mr-2 inline-block h-4 w-4"/> New Designs in market
</li>
             

                  </ul>
                </CardContent>
              </Card>


              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl">
                <CardHeader>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Standard</h3>
                    <p className="text-4xl font-bold">
                      $99
                      <span className="text-lg font-normal text-gray-500 dark:text-gray-400">/mo</span>
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />Limited Templates
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />Designs templates for you
                    </li>
                    <li>
                      <WrongIcon className="mr-2 inline-block h-4 w-4" />Code for you
                    </li>

                    <li>
                      <WrongIcon className="mr-2 inline-block h-4 w-4" />Developer access
</li>
<li>
                    <WrongIcon className="mr-2 inline-block h-4 w-4" />New Market Designs
</li>
                  </ul>
                </CardContent>
              </Card>



              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl">
                <CardHeader>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Premium</h3>
                    <p className="text-4xl font-bold">
                      $170
                      <span className="text-lg font-normal text-gray-500 dark:text-gray-400">/mo</span>
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />Limited Templates
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />Designs templates for you
                      </li>
                      <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />Code for you
</li>
<li>
<WrongIcon className="mr-2 inline-block h-4 w-4" />Developer Access
</li>

<li>
<CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />New Market Designs
</li>

                  </ul>
                </CardContent>
              </Card>


              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl">
                <CardHeader>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Grand</h3>
                    <p className="text-4xl font-bold">
                      $300
                      <span className="text-lg font-normal text-gray-500 dark:text-gray-400">/mo</span>
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />Limited Templates
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />Designs templates for you
                      </li>
                      <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />Code for you
</li>
<li>
<CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />Developer Access
</li>

<li>
<CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />New Market Designs
</li>

                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
