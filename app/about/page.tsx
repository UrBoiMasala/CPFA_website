'use client';

import React from 'react';
import { Shield, Heart, Target } from "lucide-react";

function AboutPage() {
  const founders = [
    {
      name: "Shanay Gaitonde",
      role: "Co-Founder & COO",
      image: "/shanay_logo.webp",
      bio: "Hello! My name is Shanay Gaitonde and I am one of the co-founders of this nonprofit organization. My goal with this nonprofit is to help educate those who are vulnerable to cybersecurity attacks."
    },
    {
      name: "Siddharth Alluri",
      role: "Co-Founder & CFO",
      image: "/sid.webp",
      bio: "My name is Siddharth Alluri and I am one of the co-founders of the CPFA initiative. As a contributor to this non-profit, I plan to try my very best to spread awareness on cyberattacks to the most vulnerable of people."
    },
    {
      name: "Vivaan Warrier",
      role: "Founder & CEO",
      image: "/vivan.webp",
      bio: "Hey everyone! My name is Vivaan Warrier, and I am the Founder of this Cyber Security Non Profit. Helping our society impede these viruses and cyber security attacks is something that I have always been passionate about and strived to achieve."
    }
  ];

  const teamMembers = {
    marketing: [
      { name: "Abhinav Muddasani", role: "Marketing Lead" },
      { name: "Chet Pothuraju", role: "Marketing Strategist" },
      { name: "Pranav Peethani", role: "Brand Manager" },
      { name: "Kinjal Srivastava", role: "Marketing Coordinator" }
    ],
    cybersecurity: [
      { name: "Arjun Selvakumaran", role: "Security Engineer" },
      { name: "Aditya Shetty", role: "Security Analyst" },
      { name: "Paresh Prabhu Raj", role: "Security Specialist" },
      { name: "Saketh Chakravadhanula", role: "Security Architect" }
    ],
    finance: [
      { name: "Raghav Sinha", role: "Financial Director" },
      { name: "Krishay Kuchimanchi", role: "Financial Analyst" },
      { name: "Nithin Aruswamy", role: "Finance Manager" }
    ],
    webdev: [
      { name: "Pranav Achar", role: "Frontend Developer" },
      { name: "Gavin Katz", role: "Full Stack Developer" },
      { name: "Anirudh Muralidharan", role: "Web Developer" }
    ],
    appdev: [
      { name: "Sahiel Bose", role: "Mobile Developer" },
      { name: "Ashish Bhogasamudram", role: "App Engineer" },
      { name: "Akul Patel", role: "Mobile Developer" }
    ],
    ai: [
      { name: "Sanjana Salkar", role: "AI Engineer" },
      { name: "Ronak Hiremath", role: "ML Specialist" },
      { name: "Varish Doma", role: "AI Developer" },
      { name: "Jayden Pham", role: "AI Researcher" },
      { name: "Chittresh Mitra", role: "AI Engineer" }
    ],
    india: [
      { name: "Akiv Ritesh Shetty", role: "India Team" },
      { name: "Laya Shankar", role: "India Team" },
      { name: "Aryan Lodha", role: "India Team" },
      { name: "Bhuvan Karthikeyan", role: "India Team" },
      { name: "Vishal Surendar", role: "India Team" },
      { name: "Tarun Muralidharan", role: "India Team" },
      { name: "Rishi", role: "India Team" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Meet Our <span className="text-[#4B7BF5]">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 text-center max-w-3xl mx-auto">
            Dedicated professionals working towards a safer digital future.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Founders</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {founders.map((founder) => (
            <div key={founder.name} className="group relative">
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
                <img
                  src={founder.image}
                  alt={`Photo of ${founder.name}`}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: "center top" }}
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold">{founder.name}</h3>
                <p className="text-[#4B7BF5] font-medium mb-4">{founder.role}</p>
                <p className="text-gray-400">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Sections */}
      <div className="container max-w-7xl mx-auto px-4">
        {Object.entries(teamMembers).map(([department, members]) => (
          <section key={department} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#4B7BF5]">
              {department === 'marketing' && 'Marketing & Management Team'}
              {department === 'cybersecurity' && 'Cybersecurity Engineering Team'}
              {department === 'finance' && 'Financial Management Team'}
              {department === 'webdev' && 'Web Development Team'}
              {department === 'appdev' && 'App Development Team'}
              {department === 'ai' && 'AI Engineering Team'}
              {department === 'india' && 'CPFA India Branch'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {members.map((member, index) => (
                <div key={index} className="bg-[#1A1F2E] rounded-lg p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-[#2A2F3E] rounded-full flex items-center justify-center">
                    <span className="text-4xl text-[#4B7BF5]">{member.name[0]}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <span className="inline-block bg-[#4B7BF5]/20 text-[#4B7BF5] px-3 py-1 rounded-full text-sm">
                    {member.role}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Values Section */}
      <section className="container max-w-7xl mx-auto px-4 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#4B7BF5]/10 via-[#4B7BF5]/5 to-[#4B7BF5]/10 p-8 md:p-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <Shield className="h-12 w-12 text-[#4B7BF5] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-400">
                To protect and educate our community about cybersecurity threats.
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-[#4B7BF5] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-400">
                A digitally secure future for everyone in our community.
              </p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-[#4B7BF5] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-400">
                Integrity, education, and community service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
