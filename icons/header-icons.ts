import type { IconifyIcon } from '@iconify/react';

// ——— Lucide ———
import lucideSquareDashedBottomCode from '@iconify/icons-lucide/square-dashed-bottom-code';
import wrench from '@iconify/icons-lucide/wrench';
import briefcase from '@iconify/icons-lucide/briefcase';
import penTool from '@iconify/icons-lucide/pen-tool';
import languages from '@iconify/icons-lucide/languages';
import layoutDashboard from '@iconify/icons-lucide/layout-dashboard';
import bookOpen from '@iconify/icons-lucide/book-open';
import graduationCap from '@iconify/icons-lucide/graduation-cap';
import folder from '@iconify/icons-lucide/folder';
import image from '@iconify/icons-lucide/image';
import calendar from '@iconify/icons-lucide/calendar';
import mail from '@iconify/icons-lucide/mail';

// ABOUT (existentes)
import sparkles from '@iconify/icons-lucide/sparkles';
import cpu from '@iconify/icons-lucide/cpu';
import bot from '@iconify/icons-lucide/bot';
import shield from '@iconify/icons-lucide/shield';
import gamepad from '@iconify/icons-lucide/gamepad';
import target from '@iconify/icons-lucide/target';
import heart from '@iconify/icons-lucide/heart';

// PROJECTS (slugs p.icon + CTA)
import globe from '@iconify/icons-lucide/globe';
import appWindow from '@iconify/icons-lucide/app-window';
import server from '@iconify/icons-lucide/server';
import database from '@iconify/icons-lucide/database';
import rocket from '@iconify/icons-lucide/rocket';
import code from '@iconify/icons-lucide/code';
import github from '@iconify/icons-lucide/github';

// CONTACT (slugs usados por tus JSON)
import linkedin from '@iconify/icons-lucide/linkedin';
import mapPin from '@iconify/icons-lucide/map-pin';
import arrowRight from '@iconify/icons-lucide/arrow-right';
import instagram from '@iconify/icons-lucide/instagram';

// ——— TIPOS ———
export type HeaderIconId =
  | 'home' | 'about' | 'skills'
  | 'programming-web' | 'dev-tools-frameworks' | 'office-productivity' | 'design-pm-tools' | 'languages'
  | 'projects' | 'experience' | 'education'
  | 'archivo' | 'obra' | 'vida' | 'contact'
  // About
  | 'my-story' | 'technical-interests' | 'what-drives-me' | 'beyond-coding';

// ——— MAPA POR ID (secciones/cards) ———
export const HEADER_ICONS: Record<HeaderIconId, IconifyIcon> = {
  home: layoutDashboard,
  about: bookOpen,
  projects: folder,
  experience: briefcase,
  education: graduationCap,
  contact: mail,

  skills: layoutDashboard,
  'programming-web': lucideSquareDashedBottomCode,
  'dev-tools-frameworks': wrench,
  'office-productivity': briefcase,
  'design-pm-tools': penTool,
  languages,

  archivo: folder,
  obra: image,
  vida: calendar,

  'my-story': sparkles,
  'technical-interests': cpu,
  'what-drives-me': target,
  'beyond-coding': heart,
};

// ——— SLUGS reutilizables (About, Projects, Contact) ———
const ICON_SLUGS: Record<string, IconifyIcon> = {
  // about
  sparkles, cpu, bot, shield, gamepad, target, heart,

  // projects (header por tarjeta) + CTA
  globe, 'app-window': appWindow, server, database, rocket, code, folder, github,

  // contact (cards, cta, social)
  mail, linkedin, 'map-pin': mapPin, 'arrow-right': arrowRight, instagram,
};

// ——— RESOLVER ———
export function getHeaderIcon(idOrSlug: string): IconifyIcon {
  const key = (idOrSlug ?? '').toLowerCase().trim();

  // 1) por ID de sección/card
  const byId = (HEADER_ICONS as Record<string, IconifyIcon>)[key];
  if (byId) return byId;

  // 2) por slug explícito (contact: card.icon / cta.icon / social.icon)
  const bySlug = ICON_SLUGS[key];
  if (bySlug) return bySlug;

  // 3) fallback
  return layoutDashboard;
}
