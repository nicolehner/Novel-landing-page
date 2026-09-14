/* Novel Cocktail Co. — shared page behavior (reveal-on-scroll, mobile menu, age gate,
   FAQ accordion, contact form). Loaded by every page; call initPage() once the
   real page content is in the DOM. index.html's router calls it again on each
   hash change; static pages call it once at the bottom of the page. */

function initPage(){
  // reveal-on-scroll
  const io = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll(".rv").forEach(el=>io.observe(el));

  // FAQ accordions
  document.querySelectorAll(".faq-q").forEach(q=>q.addEventListener("click",()=>{
    const item=q.parentElement, a=item.querySelector(".faq-a"), open=item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach(o=>{o.classList.remove("open");o.querySelector(".faq-a").style.maxHeight=null;o.querySelector(".faq-q").setAttribute("aria-expanded","false")});
    if(!open){item.classList.add("open");a.style.maxHeight=a.scrollHeight+"px";q.setAttribute("aria-expanded","true")}
  }));

  // contact form — operators book a call on Calendly + email Nico; drinkers just email Nico
  const form=document.getElementById("contactForm");
  if(form){
    const seg=document.getElementById("whoSeg"),submitBtn=document.getElementById("submitBtn");
    const NICO_EMAIL="nico@nicolehner.com";
    const copy={
      venue:{btn:"Book my call →",h3:"Almost there.",body:"We've opened Calendly in a new tab — grab a 30-minute slot. We've also started an email to us with your details — just hit send in the window that opened."},
      drinker:{btn:"Send it our way →",h3:"Consider it poured.",body:"We've started an email to us with your note — just hit send in the window that opened, and we'll see it."}
    };
    function buildMailto(who,v){
      const subject=who==="venue" ? `Novel site inquiry — ${v.venue||v.name}` : `Novel site note — ${v.name}`;
      const lines=[`Name: ${v.name}`,`Email: ${v.email}`];
      if(who==="venue"){
        lines.push(`Venue: ${v.venue||"—"}`,`City: ${v.city||"—"}`,`License type: ${v.lic||"—"}`,`Existing draft system: ${v.draft||"—"}`);
      }
      lines.push(`Message: ${v.msg||"—"}`);
      return `mailto:${NICO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    }
    seg.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{
      seg.querySelectorAll("button").forEach(x=>x.classList.remove("on"));b.classList.add("on");
      const isVenue=b.dataset.v==="venue";
      document.querySelectorAll(".venue-only").forEach(r=>r.style.display=isVenue?"grid":"none");
      submitBtn.textContent=copy[b.dataset.v].btn;
    }));
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const name=document.getElementById("f-name"),email=document.getElementById("f-email");
      if(!name.value.trim()||!email.value.includes("@")){name.reportValidity();email.reportValidity();return}
      const who=seg.querySelector(".on").dataset.v;
      const vals={
        name:name.value.trim(),email:email.value.trim(),
        venue:document.getElementById("f-venue").value.trim(),
        city:document.getElementById("f-city").value.trim(),
        lic:document.getElementById("f-lic").value,
        draft:document.getElementById("f-draft").value,
        msg:document.getElementById("f-msg").value.trim()
      };
      if(who==="venue")window.open("https://calendly.com/nico-nicolehner/30min","_blank","noopener");
      window.location.href=buildMailto(who,vals);
      document.getElementById("successH3").textContent=copy[who].h3;
      document.getElementById("successBody").textContent=copy[who].body;
      form.style.display="none";
      document.getElementById("formSuccess").style.display="block";
    });
  }
}

document.getElementById("burger")?.addEventListener("click",()=>document.getElementById("mobileMenu")?.classList.toggle("open"));
function enterSite(){
  try{ localStorage.setItem("novel21ok","1"); }catch(e){}
  document.getElementById("gate").style.display="none";
}
