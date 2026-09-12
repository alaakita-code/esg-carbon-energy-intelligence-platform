const VERSION="0.7.0-rc.1";
function json(data,status=200){return new Response(JSON.stringify(data,null,2),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}})}
export default{async fetch(request,env){const u=new URL(request.url);
if(u.pathname==="/api/health")return json({ok:true,service:"ESG Carbon & Energy Intelligence Platform",version:VERSION,timestamp:new Date().toISOString()});
if(u.pathname==="/api/version")return json({version:VERSION,release:"RC1"});
if(u.pathname==="/api/status")return json({status:"ready",persistence:env.DB?"D1-bound":"browser-localStorage",assets:true});
if(u.pathname.startsWith("/api/"))return json({error:"Not Found"},404);
return env.ASSETS.fetch(request)}};
