"use client";

import { Heart, Target, Users, Award, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "We put our customers at the heart of everything we do. Your satisfaction is our success.",
    },
    {
      icon: Target,
      title: "Quality Driven",
      description:
        "We carefully curate products to ensure the highest quality standards for our platform.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "We constantly innovate to provide you with the best shopping experience possible.",
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description:
        "Fast shipping, quick support, and seamless transactions are our commitment to you.",
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      avatar: "👨‍💼",
      bio: "10+ years in e-commerce industry",
    },
    {
      name: "Maria Garcia",
      role: "Head of Operations",
      avatar: "👩‍💼",
      bio: "Supply chain expert with global experience",
    },
    {
      name: "David Chen",
      role: "CTO",
      avatar: "👨‍💻",
      bio: "Full-stack developer, tech enthusiast",
    },
    {
      name: "Sarah Williams",
      role: "Customer Success Lead",
      avatar: "👩‍🎓",
      bio: "Dedicated to making customers happy",
    },
  ];

  const milestones = [
    { year: "2020", milestone: "NextCart Founded" },
    { year: "2021", milestone: "100K+ Products Listed" },
    { year: "2022", milestone: "1M+ Happy Customers" },
    { year: "2023", milestone: "Expanded to 50+ Countries" },
    { year: "2024", milestone: "10M+ Monthly Users" },
    { year: "2026", milestone: "Global Market Leader" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      {/* <nav className="bg-slate-950 bg-opacity-80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-white hover:text-blue-400 transition"
          >
            NextCart
          </Link>
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-slate-300 hover:text-white transition"
            >
              Home
            </Link>
            <Link href="/about" className="text-blue-400 font-semibold">
              About
            </Link>
            <a href="#" className="text-slate-300 hover:text-white transition">
              Contact
            </a>
          </div>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="px-4 py-2 text-slate-300 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav> */}
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            About
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              {" "}
              NextCart
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We're building the future of e-commerce with a simple mission: make
            shopping faster, easier, and more enjoyable for everyone.
          </p>
        </div>
      </section>
      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">Our Story</h2>
            <p className="text-lg text-slate-300">
              NextCart was born from a simple idea: everyone deserves access to
              quality products at great prices, with excellent customer service.
            </p>
            <p className="text-lg text-slate-300">
              Founded in 2020, we started as a small team of passionate
              entrepreneurs with a vision to revolutionize online shopping.
              Today, we've grown to serve millions of customers worldwide.
            </p>
            <p className="text-lg text-slate-300">
              Our commitment to innovation, quality, and customer satisfaction
              has made us one of the fastest-growing e-commerce platforms in the
              world.
            </p>
          </div>
          <div className="bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl p-1">
            <div className="bg-slate-800 rounded-xl p-12 flex items-center justify-center">
              <div className="text-9xl">📈</div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-10 hover:border-blue-500 transition">
            <Target className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-300">
              To provide a seamless, secure, and enjoyable shopping experience
              for customers worldwide while supporting small businesses and
              entrepreneurs to reach global markets.
            </p>
          </div>
          <div className="bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-10 hover:border-cyan-500 transition">
            <Award className="w-12 h-12 text-cyan-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-slate-300">
              To be the world's most trusted and customer-centric e-commerce
              platform, setting new standards for online retail and creating
              lasting value for all stakeholders.
            </p>
          </div>
        </div>
      </section>
      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-slate-400">
            These principles guide every decision we make
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 bg-opacity-50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition"
              >
                <Icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-400">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
          <p className="text-xl text-slate-400">
            From startup to industry leader
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="relative bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {index + 1}
              </div>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 mb-2">
                {milestone.year}
              </p>
              <p className="text-lg text-slate-300">{milestone.milestone}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-slate-400">
            Talented individuals passionate about e-commerce
          </p>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-slate-800 bg-opacity-50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500 transition transform hover:scale-105"
            >
              <div className="bg-linear-to-br from-blue-500 to-cyan-500 h-40 flex items-center justify-center text-6xl">
                {member.avatar}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-400 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-slate-400 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-linear-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-12 md:p-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Why Choose NextCart?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    Trusted by Millions
                  </h3>
                  <p className="text-slate-400">
                    Over 10 million monthly active users trust us with their
                    shopping needs
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    Best Prices Guaranteed
                  </h3>
                  <p className="text-slate-400">
                    We compete on price to ensure you always get the best deal
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-bold text-white mb-1">Fast Shipping</h3>
                  <p className="text-slate-400">
                    Most orders ship within 24 hours to your doorstep
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-bold text-white mb-1">Secure Shopping</h3>
                  <p className="text-slate-400">
                    Military-grade encryption protects your personal and payment
                    information
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-bold text-white mb-1">24/7 Support</h3>
                  <p className="text-slate-400">
                    Our dedicated team is always ready to help you anytime
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    30-Day Guarantee
                  </h3>
                  <p className="text-slate-400">
                    Not satisfied? Return it within 30 days, no questions asked
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of a global community of millions of satisfied customers.
            Start shopping with NextCart today!
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-bold transition transform hover:scale-105"
          >
            Get Started Now →
          </Link>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-950 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-white mb-4">NextCart</div>
              <p className="text-slate-400">
                Your trusted online shopping destination
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-center text-slate-400">
              © 2026 NextCart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
