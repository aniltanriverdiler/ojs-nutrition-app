"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FileTextIcon, PackageIcon, TruckIcon, MailIcon } from "lucide-react";
import { getFaqByCategory } from "@/lib/dummy/faqs";
import ContactForm from "@/components/shared/ContactForm";

const FaqContent = () => {
  const genelFaqs = getFaqByCategory("genel");
  const urunlerFaqs = getFaqByCategory("urunler");
  const kargoFaqs = getFaqByCategory("kargo");

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
        Sıkça Sorulan Sorular
      </h1>

      <Tabs defaultValue="genel" className="w-full">
        <TabsList className="grid w-full lg:w-[800px] mx-auto grid-cols-3 mb-6 bg-gray-100 h-10">
          <TabsTrigger
            value="genel"
            className="data-[state=active]:bg-gray-200 data-[state=active]:text-black cursor-pointer"
          >
            <FileTextIcon className="w-6 h-6" />
            Genel
          </TabsTrigger>
          <TabsTrigger
            value="urunler"
            className="data-[state=active]:bg-gray-200 data-[state=active]:text-black cursor-pointer"
          >
            <PackageIcon className="w-6 h-6" />
            Ürünler
          </TabsTrigger>
          <TabsTrigger
            value="kargo"
            className="data-[state=active]:bg-gray-200 data-[state=active]:text-black cursor-pointer"
          >
            <TruckIcon className="w-6 h-6" />
            Kargo
          </TabsTrigger>
        </TabsList>

        <TabsContent value="genel" className="mt-6">
          <div className="flex items-center gap-2 mb-6">
            <FileTextIcon className="w-6 h-6" />
            <h2 className="text-2xl font-bold uppercase">GENEL</h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {genelFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-gray-100 rounded-md px-4 border border-gray-200 mb-2 hover:bg-gray-200 transition-all duration-300"
              >
                <AccordionTrigger className="font-semibold hover:no-underline [&>svg]:text-gray-600 [&>svg]:size-5 cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="urunler" className="mt-6">
          <div className="flex items-center gap-2 mb-6">
            <PackageIcon className="w-6 h-6" />
            <h2 className="text-2xl font-bold uppercase">ÜRÜNLER</h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {urunlerFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-gray-100 rounded-md px-4 border border-gray-200 mb-2 hover:bg-gray-200 transition-all duration-300"
              >
                <AccordionTrigger className="font-semibold hover:no-underline [&>svg]:text-gray-600 [&>svg]:size-5 cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="kargo" className="mt-6">
          <div className="flex items-center gap-2 mb-6">
            <TruckIcon className="w-6 h-6" />
            <h2 className="text-2xl font-bold uppercase">KARGO</h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {kargoFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-gray-100 rounded-md px-4 border border-gray-200 mb-2 hover:bg-gray-200 transition-all duration-300"
              >
                <AccordionTrigger className="font-semibold hover:no-underline [&>svg]:text-gray-600 [&>svg]:size-5 cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>

      {/* Contact Form Accordion */}
      <div className="mt-12">
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem
            value="contact-form"
            className="bg-gray-100 rounded-md px-4 border border-gray-200 hover:bg-gray-200 transition-all duration-300"
          >
            <AccordionTrigger className="font-semibold hover:no-underline [&>svg]:text-gray-600 [&>svg]:size-5 cursor-pointer">
              <div className="flex items-center gap-2">
                <MailIcon className="w-6 h-6" />
                <span>İletişim Formu</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-6 pb-4">
              <div className="max-w-3xl mx-auto">
                <ContactForm />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqContent;
