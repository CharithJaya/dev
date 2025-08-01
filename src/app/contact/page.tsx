'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';


const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Our Store',
    details: ['8A 1/1', 'Stanley Thilakarathne Mawatha, Nugegoda', 'Sri Lanka'],
    color: 'text-blue-600 bg-blue-100'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['077 038 8698', '071 537 6981', 'Mon-Fri: 9AM-6PM'],
    color: 'text-green-600 bg-green-100'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@cricstore.com', 'support@cricstore.com', 'sales@cricstore.com'],
    color: 'text-purple-600 bg-purple-100'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9AM - 9PM', 'Saturday: 10AM - 9PM', 'Sunday: Closed'],
    color: 'text-orange-600 bg-orange-100'
  }
];

const faqs = [
  {
    question: 'i will add 1st question?',
    answer: 'i will add 1st answer.'
  },
  {
    question: 'i will add 1st question?',
    answer: 'i will add 1st answer.'
  },
  {
    question: 'How can I track my order?',
    answer: 'pending.'
  },
  {
    question: 'i will add this?',
    answer: 'i will add later.'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
    

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Have questions about our products or need expert advice? We're here to help you find
            the perfect cricket equipment for your needs.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${info.color}`}>
                    <info.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-1"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

          {/* Map & Additional Info */}
<div className="space-y-6">
  <Card>
    <CardHeader>
      <CardTitle>Find Our Store</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      
      {/* Map Block */}
      <div className="rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.1234567890!2d79.9381234!3d6.8412345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2598abcde1234%3A0xabcdef1234567890!2sUniversity%20of%20Sri%20Jayewardenepura!5e0!3m2!1sen!2slk!4v1623456789012!5m2!1sen!2slk"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Store Info */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
          <div>
            <p className="font-medium">Address</p>
            <p className="text-gray-600 text-sm">
              8A 1/1, Stanley Thilakarathne Mawatha, Nugegoda, Sri Lanka
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-green-600 mt-0.5" />
          <div>
            <p className="font-medium">Store Hours</p>
            <p className="text-gray-600 text-sm">Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</p>
          </div>
        </div>
      </div>

      {/* Get Directions Button */}
      <div className="pt-4">
        <a
          href="https://maps.app.goo.gl/ecVMZRSUvLuC1aDg8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
            Get Directions
          </Button>
        </a>
      </div>

    </CardContent>
  </Card>
</div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find quick answers to common questions about our products and services
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
    <p className="text-green-100 mb-8 text-lg">
      Our cricket experts are standing by to help you find the perfect equipment
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      
      {/* Call Now Button */}
      <a href="tel:+94715376981">
        <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-semibold">
          <Phone className="h-4 w-4 mr-2" />
          Call Now
        </Button>
      </a>

      {/* Email Us Button */}
      <a href="mailto:charithjc97@gmail.com?subject=Help%20with%20Cricket%20Gear&body=Hi%2C%20I%20have%20a%20question%20about...">
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
          <Mail className="h-4 w-4 mr-2" />
          Email Us
        </Button>
      </a>
      
    </div>
  </div>
</section>
    </div>
  );
}
