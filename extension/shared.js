export const $ = (s) => document.querySelector(s);
export const status = (message) => { $('#status').textContent = message; };
export function node(tag, text, className) { const e=document.createElement(tag); if(text!==undefined)e.textContent=text;if(className)e.className=className;return e; }
export async function copy(text) { try { await navigator.clipboard.writeText(text);status('Copied to clipboard.'); } catch { status('Clipboard unavailable. Select and copy the text manually.'); } }
export function download(name, value, type='application/json') { const url=URL.createObjectURL(new Blob([value],{type}));const a=node('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000); }
export const formatDate = (v) => new Date(v).toLocaleDateString(undefined,{month:'short',day:'numeric'});
export function confirmDelete(message) { return window.confirm(message); }
