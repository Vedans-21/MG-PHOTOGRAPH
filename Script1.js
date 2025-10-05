// JavaScript source code
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Camera, Mail, Phone, MapPin, Instagram, Youtube, Sparkles, TrendingUp, Eye, ArrowRight } from "lucide-react";

const Index = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [lightboxImage, setLightboxImage] = useState < string | null > (null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const categories = ["all", "portrait", "travel", "editorial", "commercial"];

    const galleryImages = [
        { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop", category: "portrait", title: "SOFT LIGHT" },
        { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop", category: "travel", title: "MOUNTAINS" },
        { src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1200&auto=format&fit=crop", category: "editorial", title: "FASHION" },
        { src: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200&auto=format&fit=crop", category: "commercial", title: "PRODUCT" },
        { src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop", category: "portrait", title: "DRAMATIC" },
        { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop", category: "travel", title: "DESERT" },
        { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop", category: "portrait", title: "STUDIO" },
        { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop", category: "travel", title: "NATURE" },
    ];

    const filteredImages = activeFilter === "all"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeFilter);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        if (!name || !email || !message) {
            toast.error("Please fill in all required fields");
            return;
        }

        toast.success("Message sent! We'll get back to you within 48 hours.");
        e.currentTarget.reset();
    };

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-background font-sans overflow-x-hidden">
            {/* Animated gradient mesh background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-50">
                <div
                    className="absolute w-[800px] h-[800px] rounded-full blur-[150px] animate-float"
                    style={{
                        background: "radial-gradient(circle, hsl(165, 100%, 45%) 0%, transparent 70%)",
                        left: `${mousePosition.x * 0.05}px`,
                        top: `${mousePosition.y * 0.05}px`,
                    }}
                />
                <div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[150px] animate-float"
                    style={{
                        background: "radial-gradient(circle, hsl(280, 60%, 30%) 0%, transparent 70%)",
                        right: `${mousePosition.x * 0.03}px`,
                        bottom: `${mousePosition.y * 0.03}px`,
                        animationDelay: "2s",
                    }}
                />
                <div
                    className="absolute w-[500px] h-[500px] rounded-full blur-[150px] animate-float"
                    style={{
                        background: "radial-gradient(circle, hsl(45, 100%, 55%) 0%, transparent 70%)",
                        left: "50%",
                        top: "30%",
                        animationDelay: "4s",
                    }}
                />
            </div>

            <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
                {/* Floating header */}
                <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1400px]">
                    <div className="bg-card/40 backdrop-blur-2xl border border-primary/20 rounded-[2rem] px-6 py-4 shadow-2xl animate-pulse-glow">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary rounded-2xl blur-xl opacity-60 animate-pulse" />
                                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center">
                                        <Camera className="w-7 h-7 text-background" />
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-display tracking-wider text-primary">MG PHOTO</h1>
                                    <p className="text-xs text-muted-foreground tracking-widest">GAUTAM MODHVADIYA</p>
                                </div>
                            </div>
                            <nav className="hidden md:flex gap-1">
                                <Button variant="ghost" size="sm" onClick={() => scrollToSection("work")} className="hover:text-primary hover:bg-primary/10">WORK</Button>
                                <Button variant="ghost" size="sm" onClick={() => scrollToSection("services")} className="hover:text-primary hover:bg-primary/10">SERVICES</Button>
                                <Button variant="ghost" size="sm" onClick={() => scrollToSection("about")} className="hover:text-primary hover:bg-primary/10">ABOUT</Button>
                                <Button
                                    size="sm"
                                    onClick={() => scrollToSection("contact")}
                                    className="bg-primary hover:bg-primary/90 text-background font-bold ml-2"
                                >
                                    CONTACT
                                </Button>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section - Diagonal Split */}
                <section className="min-h-screen flex items-center pt-32 pb-20">
                    <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-slide-up">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-px w-12 bg-primary" />
                                    <Badge variant="outline" className="border-primary text-primary font-bold tracking-widest">
                                        <Sparkles className="w-3 h-3 mr-1" />
                                        AVAILABLE NOW
                                    </Badge>
                                </div>

                                <h2 className="text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-[0.9] tracking-tight">
                                    CAPTURE
                                    <br />
                                    <span className="text-primary">MOMENTS</span>
                                    <br />
                                    THAT LAST
                                </h2>

                                <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                                    Award-winning photography that transforms ordinary moments into extraordinary visual narratives. Specializing in editorial, commercial & portrait work.
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    onClick={() => scrollToSection("contact")}
                                    className="bg-primary hover:bg-primary/90 text-background font-bold text-lg h-14 px-8 group"
                                >
                                    LET'S WORK TOGETHER
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-8">
                                <div className="space-y-2">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-display font-bold text-primary">8</span>
                                        <span className="text-2xl font-display text-muted-foreground">+</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground tracking-widest uppercase">Years Active</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-display font-bold text-accent">500</span>
                                        <span className="text-2xl font-display text-muted-foreground">+</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground tracking-widest uppercase">Projects Done</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-display font-bold text-primary">15</span>
                                        <span className="text-2xl font-display text-muted-foreground">+</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground tracking-widest uppercase">Awards Won</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative perspective-1000 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-[3rem] blur-2xl opacity-30 animate-pulse" />
                                <div className="relative rounded-[3rem] overflow-hidden border-4 border-primary/30 shadow-2xl rotate-y-6 hover:rotate-y-0 transition-transform duration-700">
                                    <img
                                        src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop"
                                        alt="Featured work"
                                        className="w-full h-[700px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <Badge className="bg-primary text-background border-0 mb-4 text-sm font-bold">FEATURED WORK</Badge>
                                        <div className="grid grid-cols-2 gap-3">
                                            <Card className="bg-background/60 backdrop-blur-md border-primary/20">
                                                <CardContent className="p-4 flex items-center gap-3">
                                                    <MapPin className="w-5 h-5 text-primary" />
                                                    <div>
                                                        <p className="text-xs text-muted-foreground">LOCATION</p>
                                                        <p className="font-bold text-sm">JAMNAGAR</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                            <Card className="bg-background/60 backdrop-blur-md border-primary/20">
                                                <CardContent className="p-4 flex items-center gap-3">
                                                    <Eye className="w-5 h-5 text-accent" />
                                                    <div>
                                                        <p className="text-xs text-muted-foreground">STATUS</p>
                                                        <p className="font-bold text-sm">OPEN</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portfolio Grid */}
                <section id="work" className="py-32">
                    <div className="space-y-12">
                        <div className="text-center space-y-6">
                            <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-sm font-bold tracking-widest text-primary">PORTFOLIO</span>
                            </div>
                            <h2 className="text-6xl lg:text-7xl font-display font-bold tracking-tight">
                                SELECTED <span className="text-primary">WORKS</span>
                            </h2>
                        </div>

                        <div className="flex gap-3 flex-wrap justify-center">
                            {categories.map(cat => (
                                <Button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    variant={activeFilter === cat ? "default" : "outline"}
                                    className={`uppercase tracking-widest font-bold rounded-full px-6 transition-all ${activeFilter === cat
                                            ? 'bg-primary hover:bg-primary/90 text-background border-0 scale-110'
                                            : 'border-2 border-primary/30 hover:border-primary hover:text-primary hover:bg-primary/10'
                                        }`}
                                >
                                    {cat}
                                </Button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {filteredImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer border-2 border-border hover:border-primary transition-all duration-500"
                                    onClick={() => setLightboxImage(img.src)}
                                    style={{
                                        animationDelay: `${idx * 0.1}s`,
                                    }}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                                            <Eye className="w-8 h-8 text-background" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <Badge className="bg-primary/90 backdrop-blur-sm text-background border-0 text-base font-display font-bold tracking-wider">
                                            {img.title}
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services - Bento Grid */}
                <section id="services" className="py-32">
                    <div className="space-y-12">
                        <div className="text-center space-y-6">
                            <div className="inline-flex items-center gap-3 px-6 py-2 bg-accent/10 border border-accent/30 rounded-full">
                                <TrendingUp className="w-4 h-4 text-accent" />
                                <span className="text-sm font-bold tracking-widest text-accent">SERVICES</span>
                            </div>
                            <h2 className="text-6xl lg:text-7xl font-display font-bold tracking-tight">
                                WHAT WE <span className="text-accent">OFFER</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "PORTRAIT & HEADSHOTS",
                                    desc: "Professional studio and on-location sessions. Perfect for personal branding and corporate needs.",
                                    color: "primary"
                                },
                                {
                                    title: "COMMERCIAL WORK",
                                    desc: "High-impact product photography and brand campaigns that drive engagement and sales.",
                                    color: "accent"
                                },
                                {
                                    title: "EDITORIAL & TRAVEL",
                                    desc: "Magazine-quality storytelling through stunning editorials and immersive travel photography.",
                                    color: "primary"
                                }
                            ].map((service, idx) => (
                                <Card
                                    key={idx}
                                    className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-500 cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <CardContent className="relative p-8 space-y-6">
                                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <Sparkles className="w-10 h-10 text-background" />
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-display font-bold tracking-wide">{service.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            className="group/btn hover:text-primary hover:bg-primary/10 font-bold"
                                        >
                                            LEARN MORE
                                            <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About - Split */}
                <section id="about" className="py-32">
                    <div className="grid lg:grid-cols-[500px,1fr] gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-accent via-primary to-accent rounded-[3rem] blur-2xl opacity-30 animate-pulse" />
                            <div className="relative rounded-[3rem] overflow-hidden border-4 border-accent/30 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                                    alt="Gautam Modhvadiya"
                                    className="w-full h-[600px] object-cover"
                                />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full">
                                    <Camera className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-bold tracking-widest text-primary">ABOUT ME</span>
                                </div>

                                <h2 className="text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight">
                                    MEET GAUTAM
                                    <br />
                                    <span className="text-primary">MODHVADIYA</span>
                                </h2>

                                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                    <p>
                                        Lead photographer at MG Photography with 8+ years of experience crafting cinematic, emotion-driven imagery.
                                    </p>
                                    <p>
                                        My work emphasizes the interplay of light, shadow, and human connection. Featured in major publications and brand campaigns worldwide.
                                    </p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <Card className="bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary transition-colors">
                                    <CardContent className="p-6 space-y-3">
                                        <Mail className="w-6 h-6 text-primary" />
                                        <div>
                                            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">Email</p>
                                            <p className="font-bold">hello@mgphotography.com</p>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="bg-card/50 backdrop-blur-sm border-2 border-border hover:border-accent transition-colors">
                                    <CardContent className="p-6 space-y-3">
                                        <Phone className="w-6 h-6 text-accent" />
                                        <div>
                                            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">Phone</p>
                                            <p className="font-bold">+91 97147 88719</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="py-32">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <div className="text-center space-y-6">
                            <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="text-sm font-bold tracking-widest text-primary">GET IN TOUCH</span>
                            </div>
                            <h2 className="text-6xl lg:text-7xl font-display font-bold tracking-tight">
                                LET'S CREATE
                                <br />
                                <span className="text-primary">TOGETHER</span>
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-[1fr,400px] gap-8">
                            <Card className="bg-card/50 backdrop-blur-sm border-2 border-border">
                                <CardContent className="p-8">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <Input
                                                name="name"
                                                placeholder="YOUR NAME *"
                                                required
                                                className="h-14 bg-background border-2 border-border focus:border-primary uppercase tracking-wide font-bold"
                                            />
                                            <Input
                                                name="email"
                                                type="email"
                                                placeholder="EMAIL *"
                                                required
                                                className="h-14 bg-background border-2 border-border focus:border-primary uppercase tracking-wide font-bold"
                                            />
                                        </div>
                                        <Input
                                            name="subject"
                                            placeholder="SUBJECT"
                                            className="h-14 bg-background border-2 border-border focus:border-primary uppercase tracking-wide font-bold"
                                        />
                                        <Textarea
                                            name="message"
                                            placeholder="TELL ME ABOUT YOUR PROJECT *"
                                            required
                                            className="min-h-[160px] bg-background border-2 border-border focus:border-primary uppercase tracking-wide font-bold resize-none"
                                        />
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full h-14 bg-primary hover:bg-primary/90 text-background font-display text-xl tracking-wider"
                                        >
                                            SEND MESSAGE
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>

                            <div className="space-y-4">
                                <Card className="bg-card/50 backdrop-blur-sm border-2 border-border">
                                    <CardContent className="p-6 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <MapPin className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground tracking-widest uppercase">Studio</p>
                                                <p className="font-bold">Jamnagar, Gujarat</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="rounded-3xl overflow-hidden border-2 border-border shadow-xl">
                                    <iframe
                                        title="MG Photography, Jamnagar"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.341259159888!2d70.05772917500028!3d22.4706995795651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3956711b1e2e8a23%3A0x9d57f7a2bb8a6f40!2sMG%20Photography!5e0!3m2!1sen!2sin!4v1738239023000!5m2!1sen!2sin"
                                        width="100%"
                                        height="280"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>

                                <Card className="bg-card/50 backdrop-blur-sm border-2 border-border">
                                    <CardContent className="p-6">
                                        <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">Connect</p>
                                        <div className="flex gap-3">
                                            <a
                                                href="https://www.instagram.com/mg_photography_jam/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent hover:scale-110 flex items-center justify-center text-background transition-all"
                                            >
                                                <Instagram className="w-6 h-6" />
                                            </a>
                                            <a
                                                href="https://www.youtube.com/@mgphotography2837/featured"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary hover:scale-110 flex items-center justify-center text-background transition-all"
                                            >
                                                <Youtube className="w-6 h-6" />
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 border-t border-border/50">
                    <div className="text-center space-y-3">
                        <p className="font-display text-lg tracking-widest text-muted-foreground">
                            © {new Date().getFullYear()} MG PHOTOGRAPHY
                        </p>
                        <p className="text-xs text-muted-foreground tracking-wider">
                            CRAFTED BY UDAY PANDAVADARA
                        </p>
                    </div>
                </footer>
            </div>

            {/* Lightbox */}
            <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
                <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-4 border-primary/50 bg-transparent rounded-3xl overflow-hidden">
                    <img
                        src={lightboxImage || ""}
                        alt="Enlarged view"
                        className="w-full h-full object-contain"
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Index;