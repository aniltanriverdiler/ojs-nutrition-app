"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPageText = () => {
  const certificates = [
    "/images/certficate-1.png",
    "/images/certficate-2.png",
    "/images/certficate-3.png",
    "/images/certficate-4.png",
    "/images/certficate-5.png",
    "/images/certficate-6.png",
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      {/* Main Title */}
      <h1 className="text-2xl md:text-3xl font-extrabold text-left mb-8">
        Sağlıklı ve Fit Yaşamayı Zevkli ve Kolay Hale Getirmek İçin Varız
      </h1>

      {/* Mission and Values Paragraphs */}
      <div className="space-y-6 mb-8 text-gray-700 leading-relaxed text-left">
        <p>
          2016 yılından beri sporcu gıdaları, takviye edici gıdalar ve
          fonksiyonel gıdaları üreten bir firma olarak; müşterilerimize en
          kaliteli, lezzetli, tüketilmesi kolay ürünleri sunuyoruz.
        </p>

        <p>
          Müşteri memnuniyeti ve sağlığı her zaman önceliğimiz olmuştur.
          Ürünlerimizde, yüksek kalite standartlarına bağlı olarak, sporcuların
          ve sağlıklı yaşam tutkunlarının ihtiyaçlarına yönelik besleyici
          çözümler sunuyoruz. Ürün yelpazemizdeki protein tozları, aminoasitler,
          vitamin ve mineral takviyeleri ile spor performansınızı desteklemek
          için ideal besin değerlerini sunuyoruz.
        </p>

        <p>
          Sizin için sadece en iyisinin yeterli olduğunu biliyoruz. Bu nedenle,
          inovasyon, kalite, sağlık ve güvenlik ilkelerimizi korurken, sürekli
          olarak ürünlerimizi geliştirmeye ve yenilikçi beslenme çözümleri
          sunmaya devam ediyoruz.
        </p>

        <p>
          Sporcu gıdaları konusunda lider bir marka olarak, sizin sağlığınıza ve
          performansınıza değer veriyoruz. Siz de spor performansınızı en üst
          seviyeye çıkarmak ve sağlıklı yaşam tarzınızı desteklemek
          istiyorsanız, bize katılın ve en besleyici çözümlerimizle tanışın.
          Sağlıklı ve aktif bir yaşam için biz her zaman yanınızdayız.
        </p>
      </div>

      {/* Customer Reach Section */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-left mb-6">
          1.000.000+ den Fazla Mutlu Müşteri
        </h2>
        <p className="text-gray-700 text-left leading-relaxed">
          Sanatçılardan profesyonel sporculara, doktordan öğrencilere hayatın
          her alanında sağlıklı yaşamı ve beslenmeyi hedefleyen
          1.000.000&apos;den fazla kişiye ulaştık.
        </p>
      </div>

      {/* Certifications Section */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-left mb-8">
          Sertifikalarımız
        </h2>

        {/* Policy Links */}
        <div className="space-y-3 mb-8 text-left">
          <p className="text-gray-700">
            Gıda Kalite ve Helal politikamıza ulaşmak için{" "}
            <Link
              href="#"
              className="text-blue-600 hover:text-blue-800 underline font-bold"
            >
              tıklayınız
            </Link>
            .
          </p>
          <p className="text-gray-700">
            İSG ve Çevre politikamıza ulaşmak için{" "}
            <Link
              href="#"
              className="text-blue-600 hover:text-blue-800 underline font-bold"
            >
              tıklayınız
            </Link>
            .
          </p>
          <p className="text-gray-700">
            Etik politikamıza ulaşmak için{" "}
            <Link
              href="#"
              className="text-blue-600 hover:text-blue-800 underline font-bold"
            >
              tıklayınız
            </Link>
            .
          </p>
        </div>

        <p className="text-left text-gray-700 mb-6">
          Firmamızın sahip olduğu sertifikalara görsele tıklayarak
          ulaşabilirsiniz.
        </p>

        {/* Certificate Images */}
        <div className="flex flex-row gap-5">
          {certificates.map((cert, index) => (
            <Link
              key={index}
              href={cert}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image
                src={cert}
                alt={`Sertifika ${index + 1}`}
                width={100}
                height={100}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPageText;
