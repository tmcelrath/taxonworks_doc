import{_ as i,r,o,c as s,a as e,b as a,e as n,d}from"./app.0d17f42f.js";const h={},c=d(`<h1 id="glossary" tabindex="-1"><a class="header-anchor" href="#glossary" aria-hidden="true">#</a> Glossary</h1><p><em>I read the word(s) X on this site, or heard them in relation to TaxonWorks. What do they mean according to this community?</em></p><h3 id="buffered" tabindex="-1"><a class="header-anchor" href="#buffered" aria-hidden="true">#</a> Buffered</h3><p>A prefix (<code>buffered_</code>) used to indicate verbatim text that is part of a CollectionObject record. Buffered fields are used TaxonWorks in a digitization workflow as the first step of transcribing labels, or images, to digital data. Buffered fields are write-once, they after addition they should not be changed, nor do they track changes to <code>parsed</code> values.</p><h3 id="cached-values" tabindex="-1"><a class="header-anchor" href="#cached-values" aria-hidden="true">#</a> Cached (values)</h3><p>Fields prefixed in <code>cached_</code> are auto-generated by TaxonWorks based on other values in the record and/or records related to the record. They are used as indicies for searching and for display purposes, particularly <code>cached_&lt;&gt;_html</code> values.</p><h3 id="context-sensitive" tabindex="-1"><a class="header-anchor" href="#context-sensitive" aria-hidden="true">#</a> Context sensitive</h3><p>Something that appears similar at the outset (e.g. an Icon), but changes in behaviour or appearance given where and when it is encountered in the application.</p><h3 id="hot-keys" tabindex="-1"><a class="header-anchor" href="#hot-keys" aria-hidden="true">#</a> Hot keys</h3><p>Typing a combination of keys to trigger a behaviour in the <a href="/about/glossary#UI">UI</a>. Universal hot keys include concepts like <code>ctrl-c</code> for &quot;Copy text to clipboard&quot;. TaxonWorks has numerous hot key combinations that speed tasks.</p><h3 id="identifiers" tabindex="-1"><a class="header-anchor" href="#identifiers" aria-hidden="true">#</a> Identifiers</h3><p>Identifiers distinguish instances, i.e. specific things. TaxonWorks supports many different types of identifiers, and multiple identifiers can be added to individual instances. Some identifier types map 1:1 with physical things like the catalog number attached to specimen in collections, others types are strictly digitial. Some identifiers are <code>Global</code>, some are <code>Local</code>. Global identifiers are those that come from well thought out systems that mint identifiers that are intended to be truly globally (universally) unique. Local identifiers have a user-defined Namespace (the fixed bit of the identifier that doesn&#39;t change across the identifier) and a value, which must be unique within that Namespace.</p><h3 id="naive-matching" tabindex="-1"><a class="header-anchor" href="#naive-matching" aria-hidden="true">#</a> Naïve matching</h3><p>Used in context of tracing text in <code>buffered</code> fields to the <code>verbatim</code> fields include parsed out values. &quot;Naïve&quot; means we anticipate a very simple match, string to string, no fuzziness, no AI, etc.</p><h3 id="otu-operational-taxonomic-unit" tabindex="-1"><a class="header-anchor" href="#otu-operational-taxonomic-unit" aria-hidden="true">#</a> OTU (Operational Taxonomic Unit)</h3><p>The biological unit that is useful to work with. They act as proxies.</p><h3 id="parsed-values" tabindex="-1"><a class="header-anchor" href="#parsed-values" aria-hidden="true">#</a> Parsed values</h3><p>In TaxonWorks <code>parsed values</code> are the formalized representation of the data. For example the verbatim date &quot;12.iv.1997&quot; parsed into three fields in TaxonWorks: <code>start_date_day</code> (12), <code>start_date_month</code> (4), \`start_date_year (1997).</p><h3 id="parsing" tabindex="-1"><a class="header-anchor" href="#parsing" aria-hidden="true">#</a> Parsing</h3><p>Breaking down <code>buffered</code> or <code>verbatim</code> values into further fields, or semantic relationships.</p><h3 id="project" tabindex="-1"><a class="header-anchor" href="#project" aria-hidden="true">#</a> Project</h3><p>An instance of TaxonWorks supports multiple projects. Each project may have one or more users. Data in one project are only accessible in that project -- with a couple of key strategic exceptions (e.g. &quot;Community&quot; data like source publications that are public, or people names) where data are shared across projects.</p><h3 id="pull-request" tabindex="-1"><a class="header-anchor" href="#pull-request" aria-hidden="true">#</a> Pull Request</h3><p>A simple means to elegantly suggest changes to a website or code repository by editing a clone of that respository and then sending a message back to the origin that includes those changes. The changes can be considered by the maintainers of the original respostory and integrated, or not.</p><h3 id="stage-2" tabindex="-1"><a class="header-anchor" href="#stage-2" aria-hidden="true">#</a> Stage 2</h3><p>A temporary(?) code-name referencing a step in the digitization process that represents moving from Buffered or Verbatim values to <code>parsed values</code>.</p><h3 id="staged-or-staged-images" tabindex="-1"><a class="header-anchor" href="#staged-or-staged-images" aria-hidden="true">#</a> Staged (or staged images)</h3><p>A reference to a digitization process in where all data are laid out for complete capture within an image. TaxonWorks uses stages that have areas defined to match specific types of data, for example &quot;Catalog numbers&quot;, &quot;Specimen&quot;, &quot;Image registration&quot;.</p><h3 id="ui" tabindex="-1"><a class="header-anchor" href="#ui" aria-hidden="true">#</a> UI</h3><p><strong>U</strong>ser <strong>i</strong>nterface = the buttons, inputs, layout, and views in the application.</p><h3 id="ux" tabindex="-1"><a class="header-anchor" href="#ux" aria-hidden="true">#</a> UX</h3><p><strong>U</strong>ser <strong>e</strong>xperience = how you navigate, interpret, think about and make use of the <a href="/about/glossary#UI">UI</a>.</p><h3 id="verbatim-fields" tabindex="-1"><a class="header-anchor" href="#verbatim-fields" aria-hidden="true">#</a> Verbatim fields</h3><p>Verbatim fields in TaxonWorks are a small set of CollectingEvent fields that contain parts of the Verbatim or Buffered values. For example given a label like:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>USA:TX:Brazos Co.
Lick Creek Park
12.iv.1997
M. Yoder, YPT
</code></pre></div><p>Then the TaxonWorks verbatim fields <code>verbatim_locality</code> would contain &#39;Lick Creek Park&#39; and the <code>verbatim_date</code> would include <code>12.iv.1997</code>.</p><h2 id="other-glossaries-and-descriptions" tabindex="-1"><a class="header-anchor" href="#other-glossaries-and-descriptions" aria-hidden="true">#</a> Other glossaries and descriptions</h2><p><em>Heard a term in the context of a biodiversity informatics discussion that you don not understand? One of these resources might define it.</em></p>`,38),l={href:"https://www.tdwg.org/standards/",target:"_blank",rel:"noopener noreferrer"};function u(p,f){const t=r("ExternalLinkIcon");return o(),s("div",null,[c,e("ul",null,[e("li",null,[e("a",l,[a("TDWG Standards"),n(t)]),a(" - TaxonWorks exports, and maps to numerous TDWG defined terms.")])])])}const m=i(h,[["render",u],["__file","glossary.html.vue"]]);export{m as default};
