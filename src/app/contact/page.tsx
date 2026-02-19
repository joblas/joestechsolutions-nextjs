import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

export const metadata: Metadata = {
  title: "Contact | Joe's Tech Solutions",
  description: "Book a free discovery call to discuss private AI setup, agent systems, or custom software. No pitch, no pressure — just a straight conversation.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact | Joe's Tech Solutions",
    description: "Book a free discovery call to discuss private AI setup, agent systems, or custom software.",
    url: 'https://joestechsolutions.com/contact',
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0EA5E9] rounded-full blur-[120px] animate-glow" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-3">Let&apos;s Talk</span>
                <span className="block text-[#0EA5E9]">
                  Real Talk.
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl sm:text-2xl text-white/80 leading-relaxed font-light">
                Free 30-minute discovery call. No pitch, no pressure — just a straight conversation about what you need and whether JTS is the right fit.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.2}>
            {/* Email */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 group h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Image src="/icons/mail-dynamic/premium.png" alt="Email" width={32} height={32} className="object-contain" />
                    </div>
                    <CardTitle className="text-white text-2xl font-space-grotesk">Email</CardTitle>
                    <CardDescription className="text-white/70 text-base leading-relaxed">
                      Send us a message and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:joe@joestechsolutions.com"
                      className="text-[#0EA5E9] hover:text-[#0284c7] text-lg font-medium transition-colors"
                    >
                      joe@joestechsolutions.com
                    </a>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            {/* Calendar */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#06B6D4]/50 transition-all duration-500 group h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#06B6D4]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Image src="/icons/calender-dynamic/premium.png" alt="Calendar" width={32} height={32} className="object-contain" />
                    </div>
                    <CardTitle className="text-white text-2xl font-space-grotesk">Schedule a Call</CardTitle>
                    <CardDescription className="text-white/70 text-base leading-relaxed">
                      Book a free 30-minute discovery call at a time that works for you
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-4">
                      Pick a time that works for you and let's chat about your project.
                    </p>
                    <Button asChild className="bg-[#06B6D4] hover:bg-[#0891b2] text-white rounded-full">
                      <a href="https://calendly.com/joe-joestechsolutions/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/calender-dynamic/premium.png" alt="" width={16} height={16} className="mr-2 object-contain" />
                        Book a Call
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>

          {/* Contact Form Alternative */}
          <FadeIn delay={0.4}>
            <div className="mt-12">
              <Card className="bg-[#1c1c26] border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center">
                      <Image src="/icons/chat-bubble-dynamic/premium.png" alt="Message" width={32} height={32} className="object-contain" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-2xl font-space-grotesk">Quick Message</CardTitle>
                      <CardDescription className="text-white/70">
                        Tell us about your project
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-white/80 text-lg">
                    For now, please email us directly at{" "}
                    <a
                      href="mailto:joe@joestechsolutions.com"
                      className="text-[#0EA5E9] hover:text-[#0284c7] font-medium transition-colors"
                    >
                      joe@joestechsolutions.com
                    </a>
                    {" "}with:
                  </p>
                  <ul className="space-y-4 text-white/80">
                    <li className="flex items-start">
                      <span className="text-[#0EA5E9] mr-3 text-xl">•</span>
                      <span>Brief project description</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0EA5E9] mr-3 text-xl">•</span>
                      <span>Timeline and budget (if known)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0EA5E9] mr-3 text-xl">•</span>
                      <span>Any specific questions or requirements</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-[#0EA5E9] hover:bg-[#0284c7] text-white mt-6 rounded-full shadow-lg shadow-[#0EA5E9]/20">
                    <a href="mailto:joe@joestechsolutions.com?subject=Project%20Inquiry&body=Hi%20Joe%2C%0A%0AI%27m%20interested%20in%20discussing%20a%20project.%0A%0AProject%20description%3A%0A%0ATimeline%2Fbudget%3A%0A%0AQuestions%3A">
                      <Image src="/icons/mail-dynamic/premium.png" alt="" width={16} height={16} className="mr-2 object-contain" />
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Reminder */}
      <section className="relative py-24 sm:py-32 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-space-grotesk">
                What We Can Help With
              </h2>
              <p className="text-xl text-white/70 font-light">
                Private AI to full agent systems — pick your starting point
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              { title: "Joe's AI Server", desc: "Private AI on your hardware", price: "from $199", color: "#0EA5E9" },
              { title: "Agent Systems", desc: "24/7 automated operations", price: "Contact", color: "#06B6D4" },
              { title: "Custom AI Teams", desc: "Multi-agent architectures", price: "Contact", color: "#8B5CF6" },
              { title: "Custom Software", desc: "Apps, web, APIs", price: "Contact", color: "#0EA5E9" }
            ].map((service, index) => (
              <StaggerItem key={index}>
                <AnimatedCard>
                  <Card className="bg-[#1c1c26] border-white/10 hover:border-white/20 transition-all duration-500 text-center h-full group">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-white font-bold text-xl mb-3 font-space-grotesk">{service.title}</h3>
                      <p className="text-white/70 text-sm mb-3">{service.desc}</p>
                      <p style={{color: service.color}} className="font-semibold text-base">{service.price}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
