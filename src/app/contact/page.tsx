import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Joe's Tech Solutions",
  description: "Get in touch to discuss your mobile app, web platform, or AI infrastructure project.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-white mb-2">Let's Build</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Something Great Together
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
              Schedule a free 30-minute discovery call to discuss your project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-blue-400" />
                </div>
                <CardTitle className="text-white text-2xl">Email</CardTitle>
                <CardDescription className="text-slate-300 text-base">
                  Send us a message and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:joe@joestechsolutions.com"
                  className="text-blue-400 hover:text-blue-300 text-lg font-medium transition-colors"
                >
                  joe@joestechsolutions.com
                </a>
              </CardContent>
            </Card>

            {/* Calendar */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-7 h-7 text-purple-400" />
                </div>
                <CardTitle className="text-white text-2xl">Schedule a Call</CardTitle>
                <CardDescription className="text-slate-300 text-base">
                  Book a free 30-minute discovery call at a time that works for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-4">
                  Coming soon: Direct calendar booking integration
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700" disabled>
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Call (Coming Soon)
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Alternative */}
          <div className="mt-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">Quick Message</CardTitle>
                    <CardDescription className="text-slate-300">
                      Tell us about your project
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300 text-lg mb-6">
                  For now, please email us directly at{" "}
                  <a
                    href="mailto:joe@joestechsolutions.com"
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    joe@joestechsolutions.com
                  </a>
                  {" "}with:
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Brief project description</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Timeline and budget (if known)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Any specific questions or requirements</span>
                  </li>
                </ul>
                <a href="mailto:joe@joestechsolutions.com">
                  <Button className="w-full bg-green-600 hover:bg-green-700 mt-6">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Reminder */}
      <section className="relative py-20 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What We Can Help With
            </h2>
            <p className="text-xl text-slate-400">
              Our core services for growing businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Mobile Apps", desc: "iOS & Android", price: "$25K-150K" },
              { title: "Web Development", desc: "React & Next.js", price: "$30K-250K" },
              { title: "AI Infrastructure", desc: "Private deployment", price: "$9.5K-35K" },
              { title: "Consulting", desc: "Strategy & ops", price: "$175-350/hr" }
            ].map((service, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="pt-6">
                  <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-2">{service.desc}</p>
                  <p className="text-blue-400 font-semibold">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
