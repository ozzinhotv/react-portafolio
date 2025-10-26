export type HeaderIconId="home"|"about"|"skills"|"programming-web"|"dev-tools-frameworks"|"office-productivity"|"design-pm-tools"|"languages"|"projects"|"experience"|"education"|"archivo"|"obra"|"vida"|"contact"|"my-story"|"technical-interests"|"what-drives-me"|"beyond-coding";

export const HEADER_ICONS:Record<HeaderIconId,string>={
  home:"lucide:layout-dashboard",about:"lucide:book-open",projects:"lucide:folder",experience:"lucide:briefcase",education:"lucide:graduation-cap",contact:"lucide:mail",
  skills:"lucide:layout-dashboard","programming-web":"lucide:square-dashed-bottom-code","dev-tools-frameworks":"lucide:wrench","office-productivity":"lucide:briefcase","design-pm-tools":"lucide:pen-tool",languages:"lucide:languages",
  archivo:"lucide:folder",obra:"lucide:image",vida:"lucide:calendar",
  "my-story":"lucide:sparkles","technical-interests":"lucide:cpu","what-drives-me":"lucide:target","beyond-coding":"lucide:heart"
};

const ICON_SLUGS:Record<string,string>={
  sparkles:"lucide:sparkles",cpu:"lucide:cpu",bot:"lucide:bot",shield:"lucide:shield",gamepad:"lucide:gamepad",target:"lucide:target",heart:"lucide:heart",
  globe:"lucide:globe","app-window":"lucide:app-window",server:"lucide:server",database:"lucide:database",rocket:"lucide:rocket",code:"lucide:code",folder:"lucide:folder",github:"lucide:github",
  mail:"lucide:mail",linkedin:"lucide:linkedin","map-pin":"lucide:map-pin","arrow-right":"lucide:arrow-right",instagram:"lucide:instagram"
};

export function getHeaderIcon(idOrSlug?:string){const k=(idOrSlug??"").toLowerCase().trim();return (HEADER_ICONS as Record<string,string>)[k]??ICON_SLUGS[k]??"lucide:layout-dashboard";}
