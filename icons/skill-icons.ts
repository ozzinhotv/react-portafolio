// icons/skill-icons.ts
import type { IconifyIcon } from "@iconify/react";

// Simple Icons (brands)
import typescript from "@iconify/icons-simple-icons/typescript";
import javascript from "@iconify/icons-simple-icons/javascript";
import html5 from "@iconify/icons-simple-icons/html5";
import css3 from "@iconify/icons-simple-icons/css3";
import react from "@iconify/icons-simple-icons/react";
import angular from "@iconify/icons-simple-icons/angular";
import nextdotjs from "@iconify/icons-simple-icons/nextdotjs";
import tailwindcss from "@iconify/icons-simple-icons/tailwindcss";
import bootstrap from "@iconify/icons-simple-icons/bootstrap";
import nodedotjs from "@iconify/icons-simple-icons/nodedotjs";
import express from "@iconify/icons-simple-icons/express";
import vite from "@iconify/icons-simple-icons/vite";
import vercel from "@iconify/icons-simple-icons/vercel";
import github from "@iconify/icons-simple-icons/github";
import visualstudiocode from "@iconify/icons-simple-icons/visualstudiocode";
import python from "@iconify/icons-simple-icons/python";
import flask from "@iconify/icons-simple-icons/flask";
import jest from "@iconify/icons-simple-icons/jest";
import vitest from "@iconify/icons-simple-icons/vitest";
import cypress from "@iconify/icons-simple-icons/cypress";
import playwright from "@iconify/icons-simple-icons/playwright";
import eslint from "@iconify/icons-simple-icons/eslint";
import prettier from "@iconify/icons-simple-icons/prettier";
import yarn from "@iconify/icons-simple-icons/yarn";
import pnpm from "@iconify/icons-simple-icons/pnpm";
import bun from "@iconify/icons-simple-icons/bun";
import webpack from "@iconify/icons-simple-icons/webpack";
import rollupdotjs from "@iconify/icons-simple-icons/rollupdotjs";
import figma from "@iconify/icons-simple-icons/figma";
import canva from "@iconify/icons-simple-icons/canva";
import trello from "@iconify/icons-simple-icons/trello";
import notion from "@iconify/icons-simple-icons/notion";
import microsoftoffice from "@iconify/icons-simple-icons/microsoftoffice";
import microsoftword from "@iconify/icons-simple-icons/microsoftword";
import microsoftexcel from "@iconify/icons-simple-icons/microsoftexcel";
import microsoftpowerpoint from "@iconify/icons-simple-icons/microsoftpowerpoint";
import googledrive from "@iconify/icons-simple-icons/googledrive";
import gmail from "@iconify/icons-simple-icons/gmail";
import googlecalendar from "@iconify/icons-simple-icons/googlecalendar";
import googlemeet from "@iconify/icons-simple-icons/googlemeet";
import clickup from "@iconify/icons-simple-icons/clickup";
import zoom from "@iconify/icons-simple-icons/zoom";
import prisma from "@iconify/icons-simple-icons/prisma";
import graphql from "@iconify/icons-simple-icons/graphql";
import apollographql from "@iconify/icons-simple-icons/apollographql";
import postman from "@iconify/icons-simple-icons/postman";
import swagger from "@iconify/icons-simple-icons/swagger";
import mysql from "@iconify/icons-simple-icons/mysql";
import postgresql from "@iconify/icons-simple-icons/postgresql";
import sqlite from "@iconify/icons-simple-icons/sqlite";
import mongodb from "@iconify/icons-simple-icons/mongodb";
import supabase from "@iconify/icons-simple-icons/supabase";
import firebase from "@iconify/icons-simple-icons/firebase";
import docker from "@iconify/icons-simple-icons/docker";
import amazonaws from "@iconify/icons-simple-icons/amazonaws";
import cloudflare from "@iconify/icons-simple-icons/cloudflare";
import netlify from "@iconify/icons-simple-icons/netlify";

// Lucide (concepts)
import repeat from "@iconify/icons-lucide/repeat";
import gitBranch from "@iconify/icons-lucide/git-branch";
import undo2 from "@iconify/icons-lucide/undo-2";
import shapes from "@iconify/icons-lucide/shapes";
import workflow from "@iconify/icons-lucide/workflow";
import fileCog from "@iconify/icons-lucide/file-cog";
import waves from "@iconify/icons-lucide/waves";
import shieldAlert from "@iconify/icons-lucide/shield-alert";
import checkCheck from "@iconify/icons-lucide/check-check";
import boxes from "@iconify/icons-lucide/boxes";
import lock from "@iconify/icons-lucide/lock";
import monitorSmartphone from "@iconify/icons-lucide/monitor-smartphone";
import database from "@iconify/icons-lucide/database";
import keyRound from "@iconify/icons-lucide/key-round";
import server from "@iconify/icons-lucide/server";
import route from "@iconify/icons-lucide/route";
import gitMerge from "@iconify/icons-lucide/git-merge";
import downloadCloud from "@iconify/icons-lucide/download-cloud";
import tagOutline from "@iconify/icons-lucide/tag";

// ——— BRANDS ———
export const ICONS: Record<string, IconifyIcon> = {
  // web
  typescript, javascript, html5, css3, react, angular, nextdotjs, tailwindcss, bootstrap,
  // runtime/tooling
  nodedotjs, express, vite, vercel, github, visualstudiocode,
  yarn, pnpm, bun, webpack, rollupdotjs,
  // languages/back
  python, flask,
  // testing/lint
  jest, vitest, cypress, playwright, eslint, prettier,
  // design/productivity
  figma, canva, trello, notion,
  // office
  microsoftoffice, microsoftword, microsoftexcel, microsoftpowerpoint, googledrive,
  gmail, googlecalendar, googlemeet, clickup, zoom,
  // data/api
  prisma, graphql, apollographql, postman, swagger,
  // db/bff
  mysql, postgresql, sqlite, mongodb, supabase, firebase,
  // infra
  docker, amazonaws, cloudflare, netlify,
};

// ——— CONCEPTS ———
const CONCEPT_ICONS: Record<string, IconifyIcon> = {
  recursion: repeat,
  "graph-traversal": gitBranch,
  backtracking: undo2,
  oop: shapes,
  algorithms: workflow,
  "file-io": fileCog,
  "buffered-streams": waves,
  "exception-handling": shieldAlert,
  "error-handling": shieldAlert,
  "data-validation": checkCheck,
  collections: boxes,
  encapsulation: lock,
  "responsive-design": monitorSmartphone,
  sql: database,
  jwt: keyRound,
  "jwt-auth": keyRound,
  auth: keyRound,
  "rest-api": server,
  "api-rest": server,
  api: server,
  fetch: downloadCloud,
  "fetch-api": downloadCloud,
  "react-router": route,
  reactrouter: route,
  "context-api": gitMerge,
  contextapi: gitMerge,
};

// ——— ALIASES ———
export const ICON_ALIASES: Record<string, keyof typeof ICONS> = {
  // typos
  ccs3: "css3",
  boostrap: "bootstrap",
  // variants
  nextjs: "nextdotjs",
  nodejs: "nodedotjs",
  tailwind: "tailwindcss",
  vscode: "visualstudiocode",
  // short
  js: "javascript",
  html: "html5",
  css: "css3",
  // cloud
  aws: "amazonaws",
  awscloud: "amazonaws",
  amazonwebservices: "amazonaws",
  // db
  pg: "postgresql",
  postgres: "postgresql",
  postgre: "postgresql",
  mongo: "mongodb",
  supa: "supabase",
  // misc
  gh: "github",
  vsc: "visualstudiocode",
  rollup: "rollupdotjs",
};

// ——— Normalizar + resolver ———
function toSlug(raw: string): string {
  return (raw || "")
    .toLowerCase()
    .replace(/\s*&\s*/g, "-and-")
    .replace(/\s*\+\s*/g, "-plus-")
    .replace(/\s*\/\s*/g, "-")
    .replace(/\./g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

export function resolveIcon(raw?: string): IconifyIcon | undefined {
  if (!raw) return undefined;
  const slug = toSlug(raw);
  const alias = ICON_ALIASES[slug];
  if (alias && ICONS[alias]) return ICONS[alias];
  if (ICONS[slug]) return ICONS[slug];
  if (CONCEPT_ICONS[slug]) return CONCEPT_ICONS[slug];
  return tagOutline;
}
