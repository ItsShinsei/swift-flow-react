import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Building2, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium shadow-soft">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Platform Magang & Bursa Kerja Khusus SMK
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
  Hubungkan Siswa dengan
  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> Peluang Karir
  </span>
</h1>


          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            SIPINTER-KLAS memudahkan proses penerimaan siswa magang dan penempatan kerja
            dengan sistem terintegrasi untuk sekolah, siswa, dan perusahaan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" asChild className="min-w-[200px]">
              <Link to="/register">
                Mulai Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="min-w-[200px]">
              <Link to="/tentang">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
            {[
              { icon: Users, label: "Siswa Aktif", value: "500+" },
              { icon: Building2, label: "Perusahaan Partner", value: "150+" },
              { icon: Briefcase, label: "Lowongan Tersedia", value: "200+" },
              { icon: GraduationCap, label: "Lulusan Terserap", value: "85%" },
            ].map((stat, index) => (
              <div
                key={index}
                className="gradient-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
