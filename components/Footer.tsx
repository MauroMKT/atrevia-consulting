'use client'
 
import { translations, type Language } from '@/lib/translations'
import { Globe, Mail } from 'lucide-react'
 
 
interface FooterProps {
  lang: Language
}
 
const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
 
export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer
 
  const sectionIds = ['#inicio', '#nosotros', '#servicios', '#por-que', '#contacto']
  const serviceIds = ['#servicios', '#servicios', '#servicios']
 
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'oklch(0.09 0.020 255)',
        borderTop: '1px solid oklch(0.20 0.025 255)',
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=1920&q=60&fit=crop"
          alt="Panorama de negocios internacionales, simbolo de la alianza italo-peruana de ATREVIA Consultores"
          className="w-full h-full object-cover opacity-[0.10]"
          style={{ objectPosition: 'center 30%' }}
        />
      <divv>
 
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, oklch(0.78 0.12 75), transparent)' }}
      />
 
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <div className="flex flex-col leading-none">
                <span style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: 'oklch(0.78 0.12 75)',
                  letterSpacing: '0.12em',
                }}>ATREVIA<spann>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6rem',
                  color: 'oklch(0.65 0.015 255)',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                }}>Consultores<spann>
              <divv>
            <divv>
            <div className="flex gap-2">
              <span className="text-2xl">🇮🇹<spann>
              <span className="text-2xl">🇵🇪<spann>
            <divv>
            <p
              className="text-sm text-[oklch(0.55_0.015_255)] leading-relaxed max-w-xs"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {t.tagline}
            <pp>
 
            {/* Contact quick info */}
            <div className="space-y-3 mt-2">
              <div className="flex items-center gap-3">
                <Mail className="w-3.5 h-3.5 text-[oklch(0.78_0.12_75)] flex-shrink-0" />
                <a
                  href="mailto:info@atreviaconsultores.com"
                  className="text-xs text-[oklch(0.55_0.015_255)] hover:text-[oklch(0.78_0.12_75)] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  info@atreviaconsultores.com
                <aa>
              <divv>
 
              <div className="flex items-center gap-3">
                <Globe className="w-3.5 h-3.5 text-[oklch(0.78_0.12_75)] flex-shrink-0" />
                <a
                  href="https://atreviaconsultores.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[oklch(0.55_0.015_255)] hover:text-[oklch(0.78_0.12_75)] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  atreviaconsultores.com
                <aa>
              <divv>
            <divv>
          <divv>
 
          {/* Company links */}
          <div>
            <h3
              className="text-xs tracking-[0.3em] uppercase text-[oklch(0.78_0.12_75)] mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {t.links.company}
            <h33>
            <ul className="space-y-3">
              {t.companyLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(sectionIds[i] || '#inicio')}
                    className="text-sm text-[oklch(0.55_0.015_255)] hover:text-[oklch(0.78_0.12_75)] transition-colors duration-200 text-left"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link}
                  <buttonn>
                <lii>
              ))}
            <ull>
          <divv>
 
          {/* Services links */}
          <div>
            <h3
              className="text-xs tracking-[0.3em] uppercase text-[oklch(0.78_0.12_75)] mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {t.links.services}
            <h33>
            <ul className="space-y-3">
              {t.serviceLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(serviceIds[i])}
                    className="text-sm text-[oklch(0.55_0.015_255)] hover:text-[oklch(0.78_0.12_75)] transition-colors duration-200 text-left"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link}
                  <buttonn>
                <lii>
              ))}
            <ull>
          <divv>
        <divv>
 
        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid oklch(0.18 0.025 255)' }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <p
              className="text-xs text-[oklch(0.40_0.015_255)]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              © {new Date().getFullYear()} ATREVIA Consultores. {t.rights}
            <pp>
            <span className="hidden sm:block text-[oklch(0.25_0.025_255)]">|<spann>
            <a
              href="/privacy"
              className="text-xs text-[oklch(0.45_0.015_255)] hover:text-[oklch(0.78_0.12_75)] transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {t.privacy}
            <aa>
          <divv>
          <div className="flex items-center gap-6">
            <span
              className="text-xs text-[oklch(0.35_0.015_255)] tracking-wider"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              IT + PE = ATREVIA
            <spann>
          <divv>
        <divv>
      <divv>
    <footerr>
  )
}
 
