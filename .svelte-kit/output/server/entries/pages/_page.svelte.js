import { a as attr } from "../../chunks/attributes.js";
function _page($$renderer) {
  let id = "";
  let password = "";
  $$renderer.push(`<div class="bg-black flex flex-col items-center justify-center gap-5 min-h-screen w-full text-white"><h1 class="font-bold text-[#5865F2] text-3xl md:text-4xl lg:text-5xl">Discord Verify</h1> <input class="bg-neutral-950 border border-neutral-900 p-2 focus:border-0 rounded-md" placeholder="Discord Name"/> <input class="bg-neutral-950 border border-neutral-900 p-2 focus:border-0 rounded-md" placeholder="Discord ID"${attr("value", id)}/> <input class="bg-neutral-950 border border-neutral-900 p-2 focus:border-0 rounded-md" placeholder="Discord Password" type="password"${attr("value", password)}/> <div class="flex flex-row items-center justify-center text-neutral-400 gap-2"><input id="terms" class="bg-neutral-950 rounded-full" placeholder="Discord Name" type="checkbox"/> <label for="terms">I accept that this info is securly stored and used to verify my discord account.</label></div> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <button class="bg-[#5865F2] rounded-2xl py-2 px-4" type="submit">Verify now.</button></div>`);
}
export {
  _page as default
};
