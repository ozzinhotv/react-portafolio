// src/icons/icon.ts
import type { IconifyIcon } from '@iconify/react';

// ——— Simple Icons (brands) ———
import typescript from '@iconify/icons-simple-icons/typescript';
import javascript from '@iconify/icons-simple-icons/javascript';
import html5 from '@iconify/icons-simple-icons/html5';
import css3 from '@iconify/icons-simple-icons/css3';
import react from '@iconify/icons-simple-icons/react';
import angular from '@iconify/icons-simple-icons/angular';
import nextdotjs from '@iconify/icons-simple-icons/nextdotjs';
import tailwindcss from '@iconify/icons-simple-icons/tailwindcss';
import bootstrap from '@iconify/icons-simple-icons/bootstrap';

import nodedotjs from '@iconify/icons-simple-icons/nodedotjs';
import github from '@iconify/icons-simple-icons/github';
import visualstudiocode from '@iconify/icons-simple-icons/visualstudiocode';
import vite from '@iconify/icons-simple-icons/vite';
import vercel from '@iconify/icons-simple-icons/vercel';
import express from '@iconify/icons-simple-icons/express';

import python from '@iconify/icons-simple-icons/python';
import flask from '@iconify/icons-simple-icons/flask';
import jest from '@iconify/icons-simple-icons/jest';

import microsoftoffice from '@iconify/icons-simple-icons/microsoftoffice';
import microsoftword from '@iconify/icons-simple-icons/microsoftword';
import microsoftexcel from '@iconify/icons-simple-icons/microsoftexcel';
import microsoftpowerpoint from '@iconify/icons-simple-icons/microsoftpowerpoint';
import googledrive from '@iconify/icons-simple-icons/googledrive';
import gmail from '@iconify/icons-simple-icons/gmail';
import googlecalendar from '@iconify/icons-simple-icons/googlecalendar';
import googlemeet from '@iconify/icons-simple-icons/googlemeet';
import clickup from '@iconify/icons-simple-icons/clickup';
import zoom from '@iconify/icons-simple-icons/zoom';

import figma from '@iconify/icons-simple-icons/figma';
import canva from '@iconify/icons-simple-icons/canva';
import trello from '@iconify/icons-simple-icons/trello';
import notion from '@iconify/icons-simple-icons/notion';

// ——— Lucide (conceptos / genéricos) ———
// npm i @iconify/icons-lucide
import repeat from '@iconify/icons-lucide/repeat';                 // recursion
import gitBranch from '@iconify/icons-lucide/git-branch';          // graph-traversal
import undo2 from '@iconify/icons-lucide/undo-2';                  // backtracking
import shapes from '@iconify/icons-lucide/shapes';                 // oop
import workflow from '@iconify/icons-lucide/workflow';             // algorithms
import fileCog from '@iconify/icons-lucide/file-cog';              // file-io
import waves from '@iconify/icons-lucide/waves';                   // buffered-streams
import shieldAlert from '@iconify/icons-lucide/shield-alert';      // exception/error-handling
import checkCheck from '@iconify/icons-lucide/check-check';        // data-validation
import boxes from '@iconify/icons-lucide/boxes';                   // collections
import lock from '@iconify/icons-lucide/lock';                     // encapsulation
import monitorSmartphone from '@iconify/icons-lucide/monitor-smartphone'; // responsive-design

import database from '@iconify/icons-lucide/database';             // sql (genérico)
import keyRound from '@iconify/icons-lucide/key-round';            // jwt / auth
import server from '@iconify/icons-lucide/server';                 // rest-api
import route from '@iconify/icons-lucide/route';                   // react-router
import gitMerge from '@iconify/icons-lucide/git-merge';            // context-api (concepto)
import downloadCloud from '@iconify/icons-lucide/download-cloud'  // fetch api
import tagOutline from '@iconify/icons-lucide/tag';                // fallback

// —————————————————————————————————————
// BRANDS (simple-icons) visibles por slug
// —————————————————————————————————————
export const ICONS: Record<string, IconifyIcon> = {
  // Web
  typescript, javascript, html5, css3, react, angular, nextdotjs, tailwindcss, bootstrap,
  // Dev tools
  nodedotjs, github, visualstudiocode, vite, vercel, express,
  // Lenguajes / backend
  python, flask,
  // Office/Productividad
  microsoftoffice, microsoftword, microsoftexcel, microsoftpowerpoint,
  googledrive, gmail, googlecalendar, googlemeet, clickup, zoom,
  // Diseño / gestión
  figma, canva, trello, notion,
  // Testing
  jest,
};

// —————————————————————————————————————
// CONCEPTOS (lucide) para tags no-marcas
// —————————————————————————————————————
const CONCEPT_ICONS: Record<string, IconifyIcon> = {
  // conceptos algoritmos/estructuras
  'recursion': repeat,
  'graph-traversal': gitBranch,
  'backtracking': undo2,
  'oop': shapes,
  'algorithms': workflow,
  'file-io': fileCog,
  'buffered-streams': waves,
  'exception-handling': shieldAlert,
  'error-handling': shieldAlert,
  'data-validation': checkCheck,
  'collections': boxes,
  'encapsulation': lock,
  'responsive-design': monitorSmartphone,

  // conceptos full-stack cineverse
  'sql': database,
  'jwt': keyRound,
  'jwt-auth': keyRound,
  'auth': keyRound,
  'rest-api': server,
  'api-rest': server,
  'api': server,
  'fetch': downloadCloud,
  'fetch-api': downloadCloud,
  'react-router': route,
  'reactrouter': route,
  'context-api': gitMerge,
  'contextapi': gitMerge,
};

// —————————————————————————————————————
// ALIASES tolerantes (typos/variantes → brands)
// —————————————————————————————————————
export const ICON_ALIASES: Record<string, keyof typeof ICONS> = {
  // typos comunes
  ccs3: 'css3',
  boostrap: 'bootstrap',
  // variantes de nombre
  nextjs: 'nextdotjs',
  nodejs: 'nodedotjs',
  tailwind: 'tailwindcss',
  vscode: 'visualstudiocode',
  // otras abreviaturas habituales
  js: 'javascript',
  html: 'html5',
  css: 'css3',
};

// —————————————————————————————————————
// Normalización + resolver con fallback
// —————————————————————————————————————
function toSlug(raw: string): string {
  return (raw || '')
    .toLowerCase()
    .replace(/\s*&\s*/g, '-and-')
    .replace(/\s*\+\s*/g, '-plus-')
    .replace(/\s*\/\s*/g, '-')   // e.g., "File I/O" -> "file-io"
    .replace(/\./g, '')          // "Node.js" -> "nodejs"
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '');
}

export function resolveIcon(raw?: string): IconifyIcon | undefined {
  if (!raw) return undefined;
  const slug = toSlug(raw);

  // 1) alias → brand
  const alias = ICON_ALIASES[slug];
  if (alias && ICONS[alias]) return ICONS[alias];

  // 2) brand directo
  if (ICONS[slug]) return ICONS[slug];

  // 3) concepto (incluye variantes como 'reactrouter', 'jwt-auth', 'api-rest', etc.)
  if (CONCEPT_ICONS[slug]) return CONCEPT_ICONS[slug];

  // 4) fallback visual
  return tagOutline;
}
