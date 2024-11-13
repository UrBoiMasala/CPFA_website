import { Button } from "@/components/ui/button"
import { Shield, Users, BookOpen, Lock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Features from "@/components/features"
import CTA from "@/components/cta"

const DONATE_URL = "https://www.gofundme.com/f/501c3-nonprofit-cpfa-provide-supplies-for-kids"
const SLACK_URL = "https://cybersecurity-ers9756.slack.com/ssb/redirect"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 mb-8 rounded-full bg-gradient-to-r from-muted/50 via-muted to-muted/50">
            <Shield className="h-5 w-5 mr-2 text-primary" />
            <span className="text-sm font-medium">501c3 Certified Non-Profit</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Cybersecurity</span> Protection{" "}
            <span className="gradient-text">For All</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Striving to teach seniors and young students vital cybersecurity lessons in an increasingly digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SLACK_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                Join Community
              </Button>
            </a>
            <Link href="/solutions">
              <Button size="lg" variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Workshop Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/89.webp"
              alt="Cybersecurity Workshop"
              width={1600}
              height={1200}
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Interactive Workshops</h3>
              <p className="text-lg text-white/90">Hands-on learning experiences for all ages</p>
            </div>
          </div>

          {/* Community Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/78.webp"
              alt="Community Support"
              width={1600}
              height={1200}
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Community Support</h3>
              <p className="text-lg text-white/90">Building a safer digital future together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">The Problem</h2>
          <p className="text-lg text-muted-foreground">
            In an increasing digital world, it is vital that robust security measures are taken to ensure the safety of personal data that can leave not only the district, but the people living within it vulnerable.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container section-padding">
        <div className="rounded-3xl bg-muted/50 p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">What We Do?</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              CPFA is dedicated to taking proactive steps towards protecting our community. Through frequent interactive meetings and workshops, tailored for both children and seniors, we offer hands-on projects and realistic mock hack demonstrations focused on specific breach scenarios.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border bg-background p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4">Workshops & Hackathons</h3>
                <p className="text-muted-foreground">
                  We organize interactive workshops and hackathons to drive collaborative problem-solving efforts, focusing on real-world cybersecurity challenges.
                </p>
              </div>
              <div className="rounded-xl border bg-background p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4">VPN Solutions</h3>
                <p className="text-muted-foreground">
                  We're developing a robust VPN solution, accessible at low cost to residents of Dublin, ensuring secure and private internet access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Newsletter Section */}
      <section className="container section-padding">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to receive updates about our workshops, events, and cybersecurity tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full px-6 py-3 border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 rounded-full px-8">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  )
}