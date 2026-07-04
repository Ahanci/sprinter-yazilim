import Link from "next/link";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { CTAWhatsApp } from "@/components/sections/cta-whatsapp";

export const metadata = buildMetadata({
  title: "Kullandığımız Teknolojiler | Next.js, .NET, Node.js, AI",
  description:
    "Sprinter'ın modern teknoloji stack'i: Next.js, React, .NET, Node.js, NestJS, PostgreSQL, Docker, Kubernetes, AWS, Azure, OpenAI, Anthropic. Doğru iş için doğru araç.",
  path: "/teknolojiler",
  keywords: [
    "yazılım teknolojileri",
    "next.js",
    "react",
    "node js",
    ".net core",
    "postgresql",
    "docker kubernetes",
    "aws azure",
    "openai entegrasyonu",
  ],
});

interface Tech {
  isim: string;
  aciklama: string;
  ikon: string;
  kullanım: string[];
}

interface TechKategori {
  baslik: string;
  aciklama: string;
  renk: string;
  ikon: string;
  teknolojiler: Tech[];
}

const KATEGORILER: TechKategori[] = [
  {
    baslik: "Frontend",
    aciklama: "Hızlı, SEO uyumlu ve modern arayüzler.",
    renk: "from-blue-500 to-indigo-600",
    ikon: "Layout",
    teknolojiler: [
      { isim: "Next.js", aciklama: "React tabanlı SSR/SSG framework. Tüm kurumsal ve e-ticaret sitelerimizde ana stack.", ikon: "Globe", kullanım: ["SSG / ISR", "App Router", "Edge Runtime"] },
      { isim: "React", aciklama: "Bileşen tabanlı UI kütüphanesi. Next.js ve mobil uygulamalarımızın temeli.", ikon: "Atom", kullanım: ["Server Components", "Hooks", "Suspense"] },
      { isim: "TypeScript", aciklama: "Tip güvenli JavaScript. Tüm projelerimizde varsayılan.", ikon: "Code2", kullanım: ["Strict mode", "Type safety", "DX"] },
      { isim: "Tailwind CSS", aciklama: "Utility-first CSS framework. Hızlı ve tutarlı tasarım sistemi.", ikon: "Palette", kullanım: ["Responsive", "Dark mode", "Design tokens"] },
    ],
  },
  {
    baslik: "Backend",
    aciklama: "Güçlü, ölçeklenebilir sunucu ve API katmanı.",
    renk: "from-emerald-500 to-teal-600",
    ikon: "Server",
    teknolojiler: [
      { isim: "Node.js", aciklama: "JavaScript runtime. Yüksek I/O gerektiren API ve gerçek zamanlı sistemler için.", ikon: "Hexagon", kullanım: ["REST / GraphQL", "WebSocket", "Microservice"] },
      { isim: "NestJS", aciklama: "Kurumsal düzey Node.js framework. Modüler, test edilebilir backend mimarisi.", ikon: "Boxes", kullanım: ["Dependency Injection", "Guards", "Queues"] },
      { isim: ".NET (C#)", aciklama: "Microsoft'un kurumsal framework'i. ERP, finans ve karmaşık iş mantığı için.", ikon: "BrandCpp", kullanım: ["Web API", "EF Core", "Background jobs"] },
      { isim: "PostgreSQL", aciklama: "Güçlü açık kaynak ilişkisel veritabanı. ACID uyumlu, JSON desteği var.", ikon: "Database", kullanım: ["Indexing", "Full-text search", "Replication"] },
      { isim: "Redis", aciklama: "In-memory veri yapısı. Cache, oturum ve kuyruk için.", ikon: "Zap", kullanım: ["Cache", "Pub/Sub", "Rate limiting"] },
    ],
  },
  {
    baslik: "DevOps & Cloud",
    aciklama: "Güvenilir dağıtım, izleme ve ölçeklendirme.",
    renk: "from-orange-500 to-red-500",
    ikon: "Cloud",
    teknolojiler: [
      { isim: "Docker", aciklama: "Konteynerleştirme. Uygulamaların her ortamda aynı çalışmasını sağlar.", ikon: "Container", kullanım: ["Image build", "Multi-stage", "Compose"] },
      { isim: "Kubernetes", aciklama: "Konteyner orkestrasyon. Yüksek erişilebilirlik ve otomatik ölçeklendirme.", ikon: "Boxes", kullanım: ["Auto-scaling", "Rolling update", "Ingress"] },
      { isim: "AWS", aciklama: "Amazon bulut platformu. EC2, S3, RDS, Lambda servisleri.", ikon: "Cloud", kullanım: ["EC2 / RDS", "S3 / CloudFront", "Lambda"] },
      { isim: "Azure", aciklama: "Microsoft bulut platformu. .NET entegrasyonu güçlü.", ikon: "Cloud", kullanım: ["App Service", "SQL Database", "Functions"] },
      { isim: "GitHub Actions", aciklama: "CI/CD pipeline. Her push'ta otomatik test ve deploy.", ikon: "GitBranch", kullanım: ["Test", "Build", "Deploy"] },
    ],
  },
  {
    baslik: "AI & Veri",
    aciklama: "Yapay zekâ entegrasyonu ve akıllı sistemler.",
    renk: "from-violet-500 to-purple-600",
    ikon: "Sparkles",
    teknolojiler: [
      { isim: "OpenAI (GPT)", aciklama: "GPT-4o ve o1 modelleri. Chatbot, içerik üretimi ve AI ajanları için.", ikon: "Bot", kullanım: ["Chatbot", "Function calling", "Vision"] },
      { isim: "Anthropic (Claude)", aciklama: "Claude modelleri. Uzun bağlam ve kod üretimi için.", ikon: "MessageSquare", kullanım: ["RAG", "Summarization", "Analysis"] },
      { isim: "Google Gemini", aciklama: "Çok modelli AI. Metin, görsel ve ses birlikte.", ikon: "Sparkles", kullanım: ["Multimodal", "Embeddings", "Vertex AI"] },
      { isim: "Pinecone / pgvector", aciklama: "Vektör veritabanı. RAG ve anlamsal arama için.", ikon: "Database", kullanım: ["Embeddings", "Similarity search", "RAG"] },
      { isim: "n8n / Make", aciklama: "Düşük kodlu otomasyon. İş süreçleri ve API akışları.", ikon: "Workflow", kullanım: ["RPA", "Webhook", "Integration"] },
    ],
  },
];

export default function TeknolojilerPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
              TEKNOLOJİLER
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
              Doğru iş için <span className="text-gradient">doğru teknoloji</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--body)] leading-relaxed">
              Show değil, çözüm odaklı teknoloji seçiyoruz. Her projenin ihtiyacına göre
              modern, sürdürülebilir ve ölçeklenebilir bir stack oluşturuyoruz. İşte
              uzman olduğumuz teknolojiler.
            </p>
          </div>
        </div>
      </section>

      {KATEGORILER.map((kat) => {
        const KatIcon = (Icons as unknown as Record<string, LucideIcon>)[kat.ikon] ?? Icons.Boxes;
        return (
          <section key={kat.baslik} className="py-16 md:py-20 bg-white border-b border-[var(--border)]">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <div className="flex items-start gap-4 mb-10">
                <div className={`shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br ${kat.renk} text-white flex items-center justify-center shadow-lg`}>
                  <KatIcon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)]">{kat.baslik}</h2>
                  <p className="text-[var(--body)] mt-1">{kat.aciklama}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {kat.teknolojiler.map((tech) => {
                  const Icon = (Icons as unknown as Record<string, LucideIcon>)[tech.ikon] ?? Icons.Code2;
                  return (
                    <div key={tech.isim} className="rounded-2xl border border-[var(--border)] bg-white p-6 hover:shadow-xl hover:border-slate-300 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-lg bg-slate-100 text-[var(--foreground)] flex items-center justify-center">
                          <Icon className="h-5 w-5" strokeWidth={2.2} />
                        </div>
                        <h3 className="text-lg font-bold text-[var(--foreground)]">{tech.isim}</h3>
                      </div>
                      <p className="text-sm text-[var(--body)] leading-relaxed mb-4">{tech.aciklama}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {tech.kullanım.map((k) => (
                          <span key={k} className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16 md:py-20 bg-[var(--background-soft)]">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-6">Neden bu stack?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Modern ve endüstri standardı — geliştirici bulmak kolay",
              "Açık kaynak ağırlıklı — lisans maliyeti düşük",
              "SEO ve hız için optimize (SSG, Edge, CDN)",
              "AI-okunabilir semantik yapı",
              "Mikroservise ölçeklenebilir (monolitikten başlanır)",
              "Bulut-doğal (cloud-native) dağıtım",
            ].map((m) => (
              <div key={m} className="flex items-start gap-3 rounded-xl bg-white border border-[var(--border)] p-4">
                <span className="mt-0.5 h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-[var(--body)]">{m}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/hizmetler" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent-to)]">
              Hizmetleri inceleyin <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTAWhatsApp baslik="Projeniz için en uygun stack'i seçelim" altBaslik="İhtiyacınızı dinleyip doğru teknoloji mimarisini birlikte kuralım. Ücretsiz 30 dakikalık keşif görüşmesi." />
    </>
  );
}
