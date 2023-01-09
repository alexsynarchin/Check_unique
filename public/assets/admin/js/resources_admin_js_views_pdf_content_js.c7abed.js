"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_js_views_pdf_content_js"],{

/***/ "./resources/admin/js/views/pdf/content.js":
/*!*************************************************!*\
  !*** ./resources/admin/js/views/pdf/content.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar title = 'Plans for the Next Iteration of Vue.js';\nvar content = \"<p>Last week at<a href=\\\"https://vuejs.london/summary\\\" rel=\\\"nofollow\\\">Vue.js London</a>I gave a brief sneak peek of what\\u2019s coming in the next major version of Vue. This post provides an in-depth overview of the plan.</p>\\n<p><img class=\\\" wscnph\\\" src=\\\"https://wpimg.wallstcn.com/b8a1d7be-0b73-41b8-be8c-7c01c93cab66.png\\\" data-wscntype=\\\"image\\\" data-wscnh=\\\"742\\\" data-wscnw=\\\"692\\\" /></p>\\n<h3>Why a new majorversion?</h3>\\n<p>Vue 2.0 was released<a href=\\\"https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8\\\" rel=\\\"nofollow\\\">exactly two years ago</a>(how time flies!). During this period, the core has remained backwards compatible with five minor releases. We\\u2019ve accumulated a number of ideas that would bring improvements, but they were held off because they would result in breaking changes. At the same time, the JavaScript ecosystem and the language itself has been evolving rapidly. There are greatly improved tools that could enhance our workflow, and many new language features that could unlock simpler, more complete, and more efficient solutions to the problems Vue is trying to solve. What\\u2019s more exciting is that we are seeing ES2015 support becoming a baseline for all major evergreen browsers. Vue 3.0 aims to leverage these new language features to make Vue core smaller, faster, and more powerful.</p>\\n<p>Vue 3.0 is currently in prototyping phase, and we have already implemented a runtime close to feature-parity with 2.x.<strong>Many of the items listed below are either already implemented, or confirmed to be feasible. Ones that are not yet implemented or still in exploration phase are marked with a *.</strong></p>\\n<h3>The Details</h3>\\n<h4>High-Level APIChanges</h4>\\n<blockquote>TL;DR: Everything except render function API and scoped-slots syntax will either remain the same or can be made 2.x compatible via a compatibility build.</blockquote>\\n<p>Since it\\u2019s a new major, there is going to be some breaking changes. However, we take backwards compatibility seriously, so we want to start communicating these changes as soon as possible. Here\\u2019s the currently planned public API changes:</p>\\n<ul><li>Template syntax will remain 99% the same. There may be small tweaks in scoped slots syntax, but other than that we have no plans to change anything else for templates.</li><li>3.0 will support class-based components natively, with the aim to provide an API that is pleasant to use in native ES2015 without requiring any transpilation or stage-x features. Most current options will have a reasonable mapping in the class-based API. Stage-x features such as class fields and decorators can still be used optionally to enhance the authoring experience. In addition, the API is designed with TypeScript type inference in mind. The 3.x codebase will itself be written in TypeScript, and providing improved TypeScript support. (That said, usage of TypeScript in an application is still entirely optional.)</li><li>The 2.x object-based component format will still be supported by internally transforming the object to a corresponding class.</li><li>Mixins will still be supported.*</li><li>Top level APIs will likely receive an overhaul to avoid globally mutating the Vue runtime when installing plugins. Instead, plugins will be applied and scoped to a component tree. This will make it easier to test components that rely on specific plugins, and also make it possible to mount multiple Vue applications on the same page with different plugins, but using the same Vue runtime.*</li><li>Functional components can finally be plain functions \\u2014however, async components will now need to be explicitly created via a helper function.</li><li>The part that will receive the most changes is the Virtual DOM format used in render functions. We are currently collecting feedback from major library authors and will be sharing more details as we are more confident of the changes, but as long as you don\\u2019t heavily rely on hand-written (non-JSX) render functions in your app, upgrading should be a reasonably straightforward process.</li></ul>\\n<h4>Source Code Architecture</h4>\\n<blockquote>TL;DR: better decoupled internal modules, TypeScript, and a codebase that is easier to contribute to.</blockquote>\\n<p>We are re-writing 3.0 from the ground up for a cleaner and more maintainable architecture, in particular trying to make it easier to contribute to. We are breaking some internal functionalities into individual packages in order to isolate the scope of complexity. For example, the observer module will become its own package, with its own public API and tests. Note this does not affect framework-level API\\u2014 you will not have to manually import individual bits from multiple packages in order to use Vue. Instead, the final Vue package is assembled using these internal packages.</p>\\n<p>The codebase is also now written in TypeScript. Although this will make proficiency in TypeScript a pre-requisite for contributing to the new codebase, we believe the type information and IDE support will actually make it easier for a new contributor to make meaningful contributions.</p>\\n<p>Decoupling the observer and scheduler into separate packages also allows us to easily experiment with alternative implementations of these parts. For example, we can implement an IE11 compatible observer implementation with the same API, or an alternative scheduler that leverages<code>requestIdleCallback</code>to yield to the browser during long updates.*</p>\\n<p><img class=\\\" wscnph\\\" src=\\\"https://wpimg.wallstcn.com/4d0b5fb2-d7f9-48fd-8f1b-03362b534dd9.png\\\" data-wscntype=\\\"image\\\" data-wscnh=\\\"716\\\" data-wscnw=\\\"460\\\" /></p>\\n<h4>Observation Mechanism</h4>\\n<blockquote>TL;DR: more complete, precise, efficient and debuggable reactivity tracking &amp; API for creating observables.</blockquote>\\n<p>3.0 will ship with a Proxy-based observer implementation that provides reactivity tracking with full language coverage. This eliminates a number of limitations of Vue 2\\u2019s current implementation based on<code>Object.defineProperty</code>:</p>\\n<p>The new observer also features the following:</p>\\n<p>Easily understand why a component is re-rendering</p>\\n<p><img class=\\\" wscnph\\\" src=\\\"https://wpimg.wallstcn.com/a0c9d811-1ef9-4628-8976-f7c1aaa66da0.png\\\" data-wscntype=\\\"image\\\" data-wscnh=\\\"540\\\" data-wscnw=\\\"789\\\" /></p>\\n<h4>Other Runtime Improvements</h4>\\n<blockquote>TL;DR: smaller, faster, tree-shakable features, fragments &amp; portals, custom renderer API.</blockquote>\\n<h4>Compiler Improvements*</h4>\\n<blockquote>TL;DR: tree-shaking friendly output, more AOT optimizations, parser with better error info and source map support.</blockquote>\\n<h4>IE11 Support*</h4>\\n<blockquote>TL;DR: it will be supported, but in a separate build with the same reactivity limitations of Vue 2.x.</blockquote>\\n<p>The new codebase currently targets evergreen browsers only and assumes baseline native ES2015 support. But alas, we know a lot of our users still need to support IE11 for the foreseeable future. Most of the ES2015 features used can be transpiled / polyfilled for IE11, with the exception for Proxies. Our plan is to implement an alternative observer with the same API, but using the good old ES5<code>Object.defineProperty</code>API. A separate build of Vue 3.x will be distributed using this observer implementation. However, this build will be subject to the same change detection caveats of Vue 2.x and thus not fully compatible with the \\u201Cmodern\\u201D build of 3.x. We are aware that this imposes some inconvenience for library authors as they will need to be aware of compatibility for two different builds, but we will make sure to provide clear guidelines on this when we reach that stage.</p>\\n<h3>How Do We GetThere</h3>\\n<p>First of all, although we are announcing it today, we do not have a definitive timeline yet. What we do know at the moment is the steps we will be taking to get there:</p>\\n<h4>1. Internal Feedback for the Runtime Prototype</h4>\\n<p>This is the phase we are in right now. Currently, we already have a working runtime prototype that includes the new observer, Virtual DOM and component implementation. We have invited a group of authors of influential community projects to provide feedback for the internal changes, and would like to make sure they are comfortable with the changes before moving forward. We want to ensure that important libraries in the ecosystem will be ready at the same time when we release 3.0, so that users relying on those projects can upgrade easily.</p>\\n<h4>2. Public Feedback viaRFCs</h4>\\n<p>Once we gain a certain level of confidence in the new design, for each breaking change we will be opening a dedicated RFC issue which includes:</p>\\n<p>We will anticipate public feedback from the wider community to help us consolidate these ideas.</p>\\n<h4>3. Introduce Compatible Features in 2.x &amp;2.x-next</h4>\\n<p>We are not forgetting about 2.x! In fact, we plan to use 2.x to progressively accustom users to the new changes. We will be gradually introducing confirmed API changes into 2.x via opt-in adaptors, and 2.x-next will allow users to try out the new Proxy-based observer.</p>\\n<p>The last minor release in 2.x will become LTS and continue to receive bug and security fixes for 18 months when 3.0 is released.</p>\\n<h4>4. AlphaPhase</h4>\\n<p>Next, we will finish up the compiler and server-side rendering parts of 3.0 and start making alpha releases. These will mostly be for stability testing purposes in small greenfield apps.</p>\\n<h4>5. BetaPhase</h4>\\n<p>During beta phase, our main goal is updating support libraries and tools like Vue Router, Vuex, Vue CLI, Vue DevTools and make sure they work smoothly with the new core. We will also be working with major library authors from the community to help them get ready for 3.0.</p>\\n<h4>6. RCPhase</h4>\\n<p>Once we consider the API and codebase stable, we will enter RC phase with API freeze. During this phase we will also work on a \\u201Ccompat build\\u201D: a build of 3.0 that includes compatibility layers for 2.x API. This build will also ship with a flag you can turn on to emit deprecation warnings for 2.x API usage in your app. The compat build can be used as a guide to upgrade your app to 3.0.</p>\\n<h4>7. IE11build</h4>\\n<p>The last task before the final release will be the IE11 compatibility build as mentioned above.</p>\\n<h4>8. FinalRelease</h4>\\n<p>In all honesty, we don\\u2019t know when this will happen yet, but likely in 2019. Again, we care more about shipping something that is solid and stable rather than hitting specific dates. There is a lot of work to be done, but we are excited for what\\u2019s coming next!</p>\";\nvar data = {\n  title: title,\n  content: content\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYWRtaW4vanMvdmlld3MvcGRmL2NvbnRlbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLEtBQUssR0FBRyx3Q0FBd0M7QUFFdEQsSUFBTUMsT0FBTyw0Z1ZBZ0QrUDtBQUU1USxJQUFNQyxJQUFJLEdBQUc7RUFDWEYsS0FBSyxFQUFMQSxLQUFLO0VBQ0xDLE9BQU8sRUFBUEE7QUFDRixDQUFDO0FBRUQsaUVBQWVDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYWRtaW4vanMvdmlld3MvcGRmL2NvbnRlbnQuanM/Y2E3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0aXRsZSA9ICdQbGFucyBmb3IgdGhlIE5leHQgSXRlcmF0aW9uIG9mIFZ1ZS5qcyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBgPHA+TGFzdCB3ZWVrIGF0PGEgaHJlZj1cImh0dHBzOi8vdnVlanMubG9uZG9uL3N1bW1hcnlcIiByZWw9XCJub2ZvbGxvd1wiPlZ1ZS5qcyBMb25kb248L2E+SSBnYXZlIGEgYnJpZWYgc25lYWsgcGVlayBvZiB3aGF04oCZcyBjb21pbmcgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBWdWUuIFRoaXMgcG9zdCBwcm92aWRlcyBhbiBpbi1kZXB0aCBvdmVydmlldyBvZiB0aGUgcGxhbi48L3A+XG48cD48aW1nIGNsYXNzPVwiIHdzY25waFwiIHNyYz1cImh0dHBzOi8vd3BpbWcud2FsbHN0Y24uY29tL2I4YTFkN2JlLTBiNzMtNDFiOC1iZThjLTdjMDFjOTNjYWI2Ni5wbmdcIiBkYXRhLXdzY250eXBlPVwiaW1hZ2VcIiBkYXRhLXdzY25oPVwiNzQyXCIgZGF0YS13c2Nudz1cIjY5MlwiIC8+PC9wPlxuPGgzPldoeSBhIG5ldyBtYWpvcnZlcnNpb24/PC9oMz5cbjxwPlZ1ZSAyLjAgd2FzIHJlbGVhc2VkPGEgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS90aGUtdnVlLXBvaW50L3Z1ZS0yLTAtaXMtaGVyZS1lZjFmMjZhY2Y0YjhcIiByZWw9XCJub2ZvbGxvd1wiPmV4YWN0bHkgdHdvIHllYXJzIGFnbzwvYT4oaG93IHRpbWUgZmxpZXMhKS4gRHVyaW5nIHRoaXMgcGVyaW9kLCB0aGUgY29yZSBoYXMgcmVtYWluZWQgYmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aCBmaXZlIG1pbm9yIHJlbGVhc2VzLiBXZeKAmXZlIGFjY3VtdWxhdGVkIGEgbnVtYmVyIG9mIGlkZWFzIHRoYXQgd291bGQgYnJpbmcgaW1wcm92ZW1lbnRzLCBidXQgdGhleSB3ZXJlIGhlbGQgb2ZmIGJlY2F1c2UgdGhleSB3b3VsZCByZXN1bHQgaW4gYnJlYWtpbmcgY2hhbmdlcy4gQXQgdGhlIHNhbWUgdGltZSwgdGhlIEphdmFTY3JpcHQgZWNvc3lzdGVtIGFuZCB0aGUgbGFuZ3VhZ2UgaXRzZWxmIGhhcyBiZWVuIGV2b2x2aW5nIHJhcGlkbHkuIFRoZXJlIGFyZSBncmVhdGx5IGltcHJvdmVkIHRvb2xzIHRoYXQgY291bGQgZW5oYW5jZSBvdXIgd29ya2Zsb3csIGFuZCBtYW55IG5ldyBsYW5ndWFnZSBmZWF0dXJlcyB0aGF0IGNvdWxkIHVubG9jayBzaW1wbGVyLCBtb3JlIGNvbXBsZXRlLCBhbmQgbW9yZSBlZmZpY2llbnQgc29sdXRpb25zIHRvIHRoZSBwcm9ibGVtcyBWdWUgaXMgdHJ5aW5nIHRvIHNvbHZlLiBXaGF04oCZcyBtb3JlIGV4Y2l0aW5nIGlzIHRoYXQgd2UgYXJlIHNlZWluZyBFUzIwMTUgc3VwcG9ydCBiZWNvbWluZyBhIGJhc2VsaW5lIGZvciBhbGwgbWFqb3IgZXZlcmdyZWVuIGJyb3dzZXJzLiBWdWUgMy4wIGFpbXMgdG8gbGV2ZXJhZ2UgdGhlc2UgbmV3IGxhbmd1YWdlIGZlYXR1cmVzIHRvIG1ha2UgVnVlIGNvcmUgc21hbGxlciwgZmFzdGVyLCBhbmQgbW9yZSBwb3dlcmZ1bC48L3A+XG48cD5WdWUgMy4wIGlzIGN1cnJlbnRseSBpbiBwcm90b3R5cGluZyBwaGFzZSwgYW5kIHdlIGhhdmUgYWxyZWFkeSBpbXBsZW1lbnRlZCBhIHJ1bnRpbWUgY2xvc2UgdG8gZmVhdHVyZS1wYXJpdHkgd2l0aCAyLnguPHN0cm9uZz5NYW55IG9mIHRoZSBpdGVtcyBsaXN0ZWQgYmVsb3cgYXJlIGVpdGhlciBhbHJlYWR5IGltcGxlbWVudGVkLCBvciBjb25maXJtZWQgdG8gYmUgZmVhc2libGUuIE9uZXMgdGhhdCBhcmUgbm90IHlldCBpbXBsZW1lbnRlZCBvciBzdGlsbCBpbiBleHBsb3JhdGlvbiBwaGFzZSBhcmUgbWFya2VkIHdpdGggYSAqLjwvc3Ryb25nPjwvcD5cbjxoMz5UaGUgRGV0YWlsczwvaDM+XG48aDQ+SGlnaC1MZXZlbCBBUElDaGFuZ2VzPC9oND5cbjxibG9ja3F1b3RlPlRMO0RSOiBFdmVyeXRoaW5nIGV4Y2VwdCByZW5kZXIgZnVuY3Rpb24gQVBJIGFuZCBzY29wZWQtc2xvdHMgc3ludGF4IHdpbGwgZWl0aGVyIHJlbWFpbiB0aGUgc2FtZSBvciBjYW4gYmUgbWFkZSAyLnggY29tcGF0aWJsZSB2aWEgYSBjb21wYXRpYmlsaXR5IGJ1aWxkLjwvYmxvY2txdW90ZT5cbjxwPlNpbmNlIGl04oCZcyBhIG5ldyBtYWpvciwgdGhlcmUgaXMgZ29pbmcgdG8gYmUgc29tZSBicmVha2luZyBjaGFuZ2VzLiBIb3dldmVyLCB3ZSB0YWtlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHNlcmlvdXNseSwgc28gd2Ugd2FudCB0byBzdGFydCBjb21tdW5pY2F0aW5nIHRoZXNlIGNoYW5nZXMgYXMgc29vbiBhcyBwb3NzaWJsZS4gSGVyZeKAmXMgdGhlIGN1cnJlbnRseSBwbGFubmVkIHB1YmxpYyBBUEkgY2hhbmdlczo8L3A+XG48dWw+PGxpPlRlbXBsYXRlIHN5bnRheCB3aWxsIHJlbWFpbiA5OSUgdGhlIHNhbWUuIFRoZXJlIG1heSBiZSBzbWFsbCB0d2Vha3MgaW4gc2NvcGVkIHNsb3RzIHN5bnRheCwgYnV0IG90aGVyIHRoYW4gdGhhdCB3ZSBoYXZlIG5vIHBsYW5zIHRvIGNoYW5nZSBhbnl0aGluZyBlbHNlIGZvciB0ZW1wbGF0ZXMuPC9saT48bGk+My4wIHdpbGwgc3VwcG9ydCBjbGFzcy1iYXNlZCBjb21wb25lbnRzIG5hdGl2ZWx5LCB3aXRoIHRoZSBhaW0gdG8gcHJvdmlkZSBhbiBBUEkgdGhhdCBpcyBwbGVhc2FudCB0byB1c2UgaW4gbmF0aXZlIEVTMjAxNSB3aXRob3V0IHJlcXVpcmluZyBhbnkgdHJhbnNwaWxhdGlvbiBvciBzdGFnZS14IGZlYXR1cmVzLiBNb3N0IGN1cnJlbnQgb3B0aW9ucyB3aWxsIGhhdmUgYSByZWFzb25hYmxlIG1hcHBpbmcgaW4gdGhlIGNsYXNzLWJhc2VkIEFQSS4gU3RhZ2UteCBmZWF0dXJlcyBzdWNoIGFzIGNsYXNzIGZpZWxkcyBhbmQgZGVjb3JhdG9ycyBjYW4gc3RpbGwgYmUgdXNlZCBvcHRpb25hbGx5IHRvIGVuaGFuY2UgdGhlIGF1dGhvcmluZyBleHBlcmllbmNlLiBJbiBhZGRpdGlvbiwgdGhlIEFQSSBpcyBkZXNpZ25lZCB3aXRoIFR5cGVTY3JpcHQgdHlwZSBpbmZlcmVuY2UgaW4gbWluZC4gVGhlIDMueCBjb2RlYmFzZSB3aWxsIGl0c2VsZiBiZSB3cml0dGVuIGluIFR5cGVTY3JpcHQsIGFuZCBwcm92aWRpbmcgaW1wcm92ZWQgVHlwZVNjcmlwdCBzdXBwb3J0LiAoVGhhdCBzYWlkLCB1c2FnZSBvZiBUeXBlU2NyaXB0IGluIGFuIGFwcGxpY2F0aW9uIGlzIHN0aWxsIGVudGlyZWx5IG9wdGlvbmFsLik8L2xpPjxsaT5UaGUgMi54IG9iamVjdC1iYXNlZCBjb21wb25lbnQgZm9ybWF0IHdpbGwgc3RpbGwgYmUgc3VwcG9ydGVkIGJ5IGludGVybmFsbHkgdHJhbnNmb3JtaW5nIHRoZSBvYmplY3QgdG8gYSBjb3JyZXNwb25kaW5nIGNsYXNzLjwvbGk+PGxpPk1peGlucyB3aWxsIHN0aWxsIGJlIHN1cHBvcnRlZC4qPC9saT48bGk+VG9wIGxldmVsIEFQSXMgd2lsbCBsaWtlbHkgcmVjZWl2ZSBhbiBvdmVyaGF1bCB0byBhdm9pZCBnbG9iYWxseSBtdXRhdGluZyB0aGUgVnVlIHJ1bnRpbWUgd2hlbiBpbnN0YWxsaW5nIHBsdWdpbnMuIEluc3RlYWQsIHBsdWdpbnMgd2lsbCBiZSBhcHBsaWVkIGFuZCBzY29wZWQgdG8gYSBjb21wb25lbnQgdHJlZS4gVGhpcyB3aWxsIG1ha2UgaXQgZWFzaWVyIHRvIHRlc3QgY29tcG9uZW50cyB0aGF0IHJlbHkgb24gc3BlY2lmaWMgcGx1Z2lucywgYW5kIGFsc28gbWFrZSBpdCBwb3NzaWJsZSB0byBtb3VudCBtdWx0aXBsZSBWdWUgYXBwbGljYXRpb25zIG9uIHRoZSBzYW1lIHBhZ2Ugd2l0aCBkaWZmZXJlbnQgcGx1Z2lucywgYnV0IHVzaW5nIHRoZSBzYW1lIFZ1ZSBydW50aW1lLio8L2xpPjxsaT5GdW5jdGlvbmFsIGNvbXBvbmVudHMgY2FuIGZpbmFsbHkgYmUgcGxhaW4gZnVuY3Rpb25zIOKAlGhvd2V2ZXIsIGFzeW5jIGNvbXBvbmVudHMgd2lsbCBub3cgbmVlZCB0byBiZSBleHBsaWNpdGx5IGNyZWF0ZWQgdmlhIGEgaGVscGVyIGZ1bmN0aW9uLjwvbGk+PGxpPlRoZSBwYXJ0IHRoYXQgd2lsbCByZWNlaXZlIHRoZSBtb3N0IGNoYW5nZXMgaXMgdGhlIFZpcnR1YWwgRE9NIGZvcm1hdCB1c2VkIGluIHJlbmRlciBmdW5jdGlvbnMuIFdlIGFyZSBjdXJyZW50bHkgY29sbGVjdGluZyBmZWVkYmFjayBmcm9tIG1ham9yIGxpYnJhcnkgYXV0aG9ycyBhbmQgd2lsbCBiZSBzaGFyaW5nIG1vcmUgZGV0YWlscyBhcyB3ZSBhcmUgbW9yZSBjb25maWRlbnQgb2YgdGhlIGNoYW5nZXMsIGJ1dCBhcyBsb25nIGFzIHlvdSBkb27igJl0IGhlYXZpbHkgcmVseSBvbiBoYW5kLXdyaXR0ZW4gKG5vbi1KU1gpIHJlbmRlciBmdW5jdGlvbnMgaW4geW91ciBhcHAsIHVwZ3JhZGluZyBzaG91bGQgYmUgYSByZWFzb25hYmx5IHN0cmFpZ2h0Zm9yd2FyZCBwcm9jZXNzLjwvbGk+PC91bD5cbjxoND5Tb3VyY2UgQ29kZSBBcmNoaXRlY3R1cmU8L2g0PlxuPGJsb2NrcXVvdGU+VEw7RFI6IGJldHRlciBkZWNvdXBsZWQgaW50ZXJuYWwgbW9kdWxlcywgVHlwZVNjcmlwdCwgYW5kIGEgY29kZWJhc2UgdGhhdCBpcyBlYXNpZXIgdG8gY29udHJpYnV0ZSB0by48L2Jsb2NrcXVvdGU+XG48cD5XZSBhcmUgcmUtd3JpdGluZyAzLjAgZnJvbSB0aGUgZ3JvdW5kIHVwIGZvciBhIGNsZWFuZXIgYW5kIG1vcmUgbWFpbnRhaW5hYmxlIGFyY2hpdGVjdHVyZSwgaW4gcGFydGljdWxhciB0cnlpbmcgdG8gbWFrZSBpdCBlYXNpZXIgdG8gY29udHJpYnV0ZSB0by4gV2UgYXJlIGJyZWFraW5nIHNvbWUgaW50ZXJuYWwgZnVuY3Rpb25hbGl0aWVzIGludG8gaW5kaXZpZHVhbCBwYWNrYWdlcyBpbiBvcmRlciB0byBpc29sYXRlIHRoZSBzY29wZSBvZiBjb21wbGV4aXR5LiBGb3IgZXhhbXBsZSwgdGhlIG9ic2VydmVyIG1vZHVsZSB3aWxsIGJlY29tZSBpdHMgb3duIHBhY2thZ2UsIHdpdGggaXRzIG93biBwdWJsaWMgQVBJIGFuZCB0ZXN0cy4gTm90ZSB0aGlzIGRvZXMgbm90IGFmZmVjdCBmcmFtZXdvcmstbGV2ZWwgQVBJ4oCUIHlvdSB3aWxsIG5vdCBoYXZlIHRvIG1hbnVhbGx5IGltcG9ydCBpbmRpdmlkdWFsIGJpdHMgZnJvbSBtdWx0aXBsZSBwYWNrYWdlcyBpbiBvcmRlciB0byB1c2UgVnVlLiBJbnN0ZWFkLCB0aGUgZmluYWwgVnVlIHBhY2thZ2UgaXMgYXNzZW1ibGVkIHVzaW5nIHRoZXNlIGludGVybmFsIHBhY2thZ2VzLjwvcD5cbjxwPlRoZSBjb2RlYmFzZSBpcyBhbHNvIG5vdyB3cml0dGVuIGluIFR5cGVTY3JpcHQuIEFsdGhvdWdoIHRoaXMgd2lsbCBtYWtlIHByb2ZpY2llbmN5IGluIFR5cGVTY3JpcHQgYSBwcmUtcmVxdWlzaXRlIGZvciBjb250cmlidXRpbmcgdG8gdGhlIG5ldyBjb2RlYmFzZSwgd2UgYmVsaWV2ZSB0aGUgdHlwZSBpbmZvcm1hdGlvbiBhbmQgSURFIHN1cHBvcnQgd2lsbCBhY3R1YWxseSBtYWtlIGl0IGVhc2llciBmb3IgYSBuZXcgY29udHJpYnV0b3IgdG8gbWFrZSBtZWFuaW5nZnVsIGNvbnRyaWJ1dGlvbnMuPC9wPlxuPHA+RGVjb3VwbGluZyB0aGUgb2JzZXJ2ZXIgYW5kIHNjaGVkdWxlciBpbnRvIHNlcGFyYXRlIHBhY2thZ2VzIGFsc28gYWxsb3dzIHVzIHRvIGVhc2lseSBleHBlcmltZW50IHdpdGggYWx0ZXJuYXRpdmUgaW1wbGVtZW50YXRpb25zIG9mIHRoZXNlIHBhcnRzLiBGb3IgZXhhbXBsZSwgd2UgY2FuIGltcGxlbWVudCBhbiBJRTExIGNvbXBhdGlibGUgb2JzZXJ2ZXIgaW1wbGVtZW50YXRpb24gd2l0aCB0aGUgc2FtZSBBUEksIG9yIGFuIGFsdGVybmF0aXZlIHNjaGVkdWxlciB0aGF0IGxldmVyYWdlczxjb2RlPnJlcXVlc3RJZGxlQ2FsbGJhY2s8L2NvZGU+dG8geWllbGQgdG8gdGhlIGJyb3dzZXIgZHVyaW5nIGxvbmcgdXBkYXRlcy4qPC9wPlxuPHA+PGltZyBjbGFzcz1cIiB3c2NucGhcIiBzcmM9XCJodHRwczovL3dwaW1nLndhbGxzdGNuLmNvbS80ZDBiNWZiMi1kN2Y5LTQ4ZmQtOGYxYi0wMzM2MmI1MzRkZDkucG5nXCIgZGF0YS13c2NudHlwZT1cImltYWdlXCIgZGF0YS13c2NuaD1cIjcxNlwiIGRhdGEtd3Njbnc9XCI0NjBcIiAvPjwvcD5cbjxoND5PYnNlcnZhdGlvbiBNZWNoYW5pc208L2g0PlxuPGJsb2NrcXVvdGU+VEw7RFI6IG1vcmUgY29tcGxldGUsIHByZWNpc2UsIGVmZmljaWVudCBhbmQgZGVidWdnYWJsZSByZWFjdGl2aXR5IHRyYWNraW5nICZhbXA7IEFQSSBmb3IgY3JlYXRpbmcgb2JzZXJ2YWJsZXMuPC9ibG9ja3F1b3RlPlxuPHA+My4wIHdpbGwgc2hpcCB3aXRoIGEgUHJveHktYmFzZWQgb2JzZXJ2ZXIgaW1wbGVtZW50YXRpb24gdGhhdCBwcm92aWRlcyByZWFjdGl2aXR5IHRyYWNraW5nIHdpdGggZnVsbCBsYW5ndWFnZSBjb3ZlcmFnZS4gVGhpcyBlbGltaW5hdGVzIGEgbnVtYmVyIG9mIGxpbWl0YXRpb25zIG9mIFZ1ZSAy4oCZcyBjdXJyZW50IGltcGxlbWVudGF0aW9uIGJhc2VkIG9uPGNvZGU+T2JqZWN0LmRlZmluZVByb3BlcnR5PC9jb2RlPjo8L3A+XG48cD5UaGUgbmV3IG9ic2VydmVyIGFsc28gZmVhdHVyZXMgdGhlIGZvbGxvd2luZzo8L3A+XG48cD5FYXNpbHkgdW5kZXJzdGFuZCB3aHkgYSBjb21wb25lbnQgaXMgcmUtcmVuZGVyaW5nPC9wPlxuPHA+PGltZyBjbGFzcz1cIiB3c2NucGhcIiBzcmM9XCJodHRwczovL3dwaW1nLndhbGxzdGNuLmNvbS9hMGM5ZDgxMS0xZWY5LTQ2MjgtODk3Ni1mN2MxYWFhNjZkYTAucG5nXCIgZGF0YS13c2NudHlwZT1cImltYWdlXCIgZGF0YS13c2NuaD1cIjU0MFwiIGRhdGEtd3Njbnc9XCI3ODlcIiAvPjwvcD5cbjxoND5PdGhlciBSdW50aW1lIEltcHJvdmVtZW50czwvaDQ+XG48YmxvY2txdW90ZT5UTDtEUjogc21hbGxlciwgZmFzdGVyLCB0cmVlLXNoYWthYmxlIGZlYXR1cmVzLCBmcmFnbWVudHMgJmFtcDsgcG9ydGFscywgY3VzdG9tIHJlbmRlcmVyIEFQSS48L2Jsb2NrcXVvdGU+XG48aDQ+Q29tcGlsZXIgSW1wcm92ZW1lbnRzKjwvaDQ+XG48YmxvY2txdW90ZT5UTDtEUjogdHJlZS1zaGFraW5nIGZyaWVuZGx5IG91dHB1dCwgbW9yZSBBT1Qgb3B0aW1pemF0aW9ucywgcGFyc2VyIHdpdGggYmV0dGVyIGVycm9yIGluZm8gYW5kIHNvdXJjZSBtYXAgc3VwcG9ydC48L2Jsb2NrcXVvdGU+XG48aDQ+SUUxMSBTdXBwb3J0KjwvaDQ+XG48YmxvY2txdW90ZT5UTDtEUjogaXQgd2lsbCBiZSBzdXBwb3J0ZWQsIGJ1dCBpbiBhIHNlcGFyYXRlIGJ1aWxkIHdpdGggdGhlIHNhbWUgcmVhY3Rpdml0eSBsaW1pdGF0aW9ucyBvZiBWdWUgMi54LjwvYmxvY2txdW90ZT5cbjxwPlRoZSBuZXcgY29kZWJhc2UgY3VycmVudGx5IHRhcmdldHMgZXZlcmdyZWVuIGJyb3dzZXJzIG9ubHkgYW5kIGFzc3VtZXMgYmFzZWxpbmUgbmF0aXZlIEVTMjAxNSBzdXBwb3J0LiBCdXQgYWxhcywgd2Uga25vdyBhIGxvdCBvZiBvdXIgdXNlcnMgc3RpbGwgbmVlZCB0byBzdXBwb3J0IElFMTEgZm9yIHRoZSBmb3Jlc2VlYWJsZSBmdXR1cmUuIE1vc3Qgb2YgdGhlIEVTMjAxNSBmZWF0dXJlcyB1c2VkIGNhbiBiZSB0cmFuc3BpbGVkIC8gcG9seWZpbGxlZCBmb3IgSUUxMSwgd2l0aCB0aGUgZXhjZXB0aW9uIGZvciBQcm94aWVzLiBPdXIgcGxhbiBpcyB0byBpbXBsZW1lbnQgYW4gYWx0ZXJuYXRpdmUgb2JzZXJ2ZXIgd2l0aCB0aGUgc2FtZSBBUEksIGJ1dCB1c2luZyB0aGUgZ29vZCBvbGQgRVM1PGNvZGU+T2JqZWN0LmRlZmluZVByb3BlcnR5PC9jb2RlPkFQSS4gQSBzZXBhcmF0ZSBidWlsZCBvZiBWdWUgMy54IHdpbGwgYmUgZGlzdHJpYnV0ZWQgdXNpbmcgdGhpcyBvYnNlcnZlciBpbXBsZW1lbnRhdGlvbi4gSG93ZXZlciwgdGhpcyBidWlsZCB3aWxsIGJlIHN1YmplY3QgdG8gdGhlIHNhbWUgY2hhbmdlIGRldGVjdGlvbiBjYXZlYXRzIG9mIFZ1ZSAyLnggYW5kIHRodXMgbm90IGZ1bGx5IGNvbXBhdGlibGUgd2l0aCB0aGUg4oCcbW9kZXJu4oCdIGJ1aWxkIG9mIDMueC4gV2UgYXJlIGF3YXJlIHRoYXQgdGhpcyBpbXBvc2VzIHNvbWUgaW5jb252ZW5pZW5jZSBmb3IgbGlicmFyeSBhdXRob3JzIGFzIHRoZXkgd2lsbCBuZWVkIHRvIGJlIGF3YXJlIG9mIGNvbXBhdGliaWxpdHkgZm9yIHR3byBkaWZmZXJlbnQgYnVpbGRzLCBidXQgd2Ugd2lsbCBtYWtlIHN1cmUgdG8gcHJvdmlkZSBjbGVhciBndWlkZWxpbmVzIG9uIHRoaXMgd2hlbiB3ZSByZWFjaCB0aGF0IHN0YWdlLjwvcD5cbjxoMz5Ib3cgRG8gV2UgR2V0VGhlcmU8L2gzPlxuPHA+Rmlyc3Qgb2YgYWxsLCBhbHRob3VnaCB3ZSBhcmUgYW5ub3VuY2luZyBpdCB0b2RheSwgd2UgZG8gbm90IGhhdmUgYSBkZWZpbml0aXZlIHRpbWVsaW5lIHlldC4gV2hhdCB3ZSBkbyBrbm93IGF0IHRoZSBtb21lbnQgaXMgdGhlIHN0ZXBzIHdlIHdpbGwgYmUgdGFraW5nIHRvIGdldCB0aGVyZTo8L3A+XG48aDQ+MS4gSW50ZXJuYWwgRmVlZGJhY2sgZm9yIHRoZSBSdW50aW1lIFByb3RvdHlwZTwvaDQ+XG48cD5UaGlzIGlzIHRoZSBwaGFzZSB3ZSBhcmUgaW4gcmlnaHQgbm93LiBDdXJyZW50bHksIHdlIGFscmVhZHkgaGF2ZSBhIHdvcmtpbmcgcnVudGltZSBwcm90b3R5cGUgdGhhdCBpbmNsdWRlcyB0aGUgbmV3IG9ic2VydmVyLCBWaXJ0dWFsIERPTSBhbmQgY29tcG9uZW50IGltcGxlbWVudGF0aW9uLiBXZSBoYXZlIGludml0ZWQgYSBncm91cCBvZiBhdXRob3JzIG9mIGluZmx1ZW50aWFsIGNvbW11bml0eSBwcm9qZWN0cyB0byBwcm92aWRlIGZlZWRiYWNrIGZvciB0aGUgaW50ZXJuYWwgY2hhbmdlcywgYW5kIHdvdWxkIGxpa2UgdG8gbWFrZSBzdXJlIHRoZXkgYXJlIGNvbWZvcnRhYmxlIHdpdGggdGhlIGNoYW5nZXMgYmVmb3JlIG1vdmluZyBmb3J3YXJkLiBXZSB3YW50IHRvIGVuc3VyZSB0aGF0IGltcG9ydGFudCBsaWJyYXJpZXMgaW4gdGhlIGVjb3N5c3RlbSB3aWxsIGJlIHJlYWR5IGF0IHRoZSBzYW1lIHRpbWUgd2hlbiB3ZSByZWxlYXNlIDMuMCwgc28gdGhhdCB1c2VycyByZWx5aW5nIG9uIHRob3NlIHByb2plY3RzIGNhbiB1cGdyYWRlIGVhc2lseS48L3A+XG48aDQ+Mi4gUHVibGljIEZlZWRiYWNrIHZpYVJGQ3M8L2g0PlxuPHA+T25jZSB3ZSBnYWluIGEgY2VydGFpbiBsZXZlbCBvZiBjb25maWRlbmNlIGluIHRoZSBuZXcgZGVzaWduLCBmb3IgZWFjaCBicmVha2luZyBjaGFuZ2Ugd2Ugd2lsbCBiZSBvcGVuaW5nIGEgZGVkaWNhdGVkIFJGQyBpc3N1ZSB3aGljaCBpbmNsdWRlczo8L3A+XG48cD5XZSB3aWxsIGFudGljaXBhdGUgcHVibGljIGZlZWRiYWNrIGZyb20gdGhlIHdpZGVyIGNvbW11bml0eSB0byBoZWxwIHVzIGNvbnNvbGlkYXRlIHRoZXNlIGlkZWFzLjwvcD5cbjxoND4zLiBJbnRyb2R1Y2UgQ29tcGF0aWJsZSBGZWF0dXJlcyBpbiAyLnggJmFtcDsyLngtbmV4dDwvaDQ+XG48cD5XZSBhcmUgbm90IGZvcmdldHRpbmcgYWJvdXQgMi54ISBJbiBmYWN0LCB3ZSBwbGFuIHRvIHVzZSAyLnggdG8gcHJvZ3Jlc3NpdmVseSBhY2N1c3RvbSB1c2VycyB0byB0aGUgbmV3IGNoYW5nZXMuIFdlIHdpbGwgYmUgZ3JhZHVhbGx5IGludHJvZHVjaW5nIGNvbmZpcm1lZCBBUEkgY2hhbmdlcyBpbnRvIDIueCB2aWEgb3B0LWluIGFkYXB0b3JzLCBhbmQgMi54LW5leHQgd2lsbCBhbGxvdyB1c2VycyB0byB0cnkgb3V0IHRoZSBuZXcgUHJveHktYmFzZWQgb2JzZXJ2ZXIuPC9wPlxuPHA+VGhlIGxhc3QgbWlub3IgcmVsZWFzZSBpbiAyLnggd2lsbCBiZWNvbWUgTFRTIGFuZCBjb250aW51ZSB0byByZWNlaXZlIGJ1ZyBhbmQgc2VjdXJpdHkgZml4ZXMgZm9yIDE4IG1vbnRocyB3aGVuIDMuMCBpcyByZWxlYXNlZC48L3A+XG48aDQ+NC4gQWxwaGFQaGFzZTwvaDQ+XG48cD5OZXh0LCB3ZSB3aWxsIGZpbmlzaCB1cCB0aGUgY29tcGlsZXIgYW5kIHNlcnZlci1zaWRlIHJlbmRlcmluZyBwYXJ0cyBvZiAzLjAgYW5kIHN0YXJ0IG1ha2luZyBhbHBoYSByZWxlYXNlcy4gVGhlc2Ugd2lsbCBtb3N0bHkgYmUgZm9yIHN0YWJpbGl0eSB0ZXN0aW5nIHB1cnBvc2VzIGluIHNtYWxsIGdyZWVuZmllbGQgYXBwcy48L3A+XG48aDQ+NS4gQmV0YVBoYXNlPC9oND5cbjxwPkR1cmluZyBiZXRhIHBoYXNlLCBvdXIgbWFpbiBnb2FsIGlzIHVwZGF0aW5nIHN1cHBvcnQgbGlicmFyaWVzIGFuZCB0b29scyBsaWtlIFZ1ZSBSb3V0ZXIsIFZ1ZXgsIFZ1ZSBDTEksIFZ1ZSBEZXZUb29scyBhbmQgbWFrZSBzdXJlIHRoZXkgd29yayBzbW9vdGhseSB3aXRoIHRoZSBuZXcgY29yZS4gV2Ugd2lsbCBhbHNvIGJlIHdvcmtpbmcgd2l0aCBtYWpvciBsaWJyYXJ5IGF1dGhvcnMgZnJvbSB0aGUgY29tbXVuaXR5IHRvIGhlbHAgdGhlbSBnZXQgcmVhZHkgZm9yIDMuMC48L3A+XG48aDQ+Ni4gUkNQaGFzZTwvaDQ+XG48cD5PbmNlIHdlIGNvbnNpZGVyIHRoZSBBUEkgYW5kIGNvZGViYXNlIHN0YWJsZSwgd2Ugd2lsbCBlbnRlciBSQyBwaGFzZSB3aXRoIEFQSSBmcmVlemUuIER1cmluZyB0aGlzIHBoYXNlIHdlIHdpbGwgYWxzbyB3b3JrIG9uIGEg4oCcY29tcGF0IGJ1aWxk4oCdOiBhIGJ1aWxkIG9mIDMuMCB0aGF0IGluY2x1ZGVzIGNvbXBhdGliaWxpdHkgbGF5ZXJzIGZvciAyLnggQVBJLiBUaGlzIGJ1aWxkIHdpbGwgYWxzbyBzaGlwIHdpdGggYSBmbGFnIHlvdSBjYW4gdHVybiBvbiB0byBlbWl0IGRlcHJlY2F0aW9uIHdhcm5pbmdzIGZvciAyLnggQVBJIHVzYWdlIGluIHlvdXIgYXBwLiBUaGUgY29tcGF0IGJ1aWxkIGNhbiBiZSB1c2VkIGFzIGEgZ3VpZGUgdG8gdXBncmFkZSB5b3VyIGFwcCB0byAzLjAuPC9wPlxuPGg0PjcuIElFMTFidWlsZDwvaDQ+XG48cD5UaGUgbGFzdCB0YXNrIGJlZm9yZSB0aGUgZmluYWwgcmVsZWFzZSB3aWxsIGJlIHRoZSBJRTExIGNvbXBhdGliaWxpdHkgYnVpbGQgYXMgbWVudGlvbmVkIGFib3ZlLjwvcD5cbjxoND44LiBGaW5hbFJlbGVhc2U8L2g0PlxuPHA+SW4gYWxsIGhvbmVzdHksIHdlIGRvbuKAmXQga25vdyB3aGVuIHRoaXMgd2lsbCBoYXBwZW4geWV0LCBidXQgbGlrZWx5IGluIDIwMTkuIEFnYWluLCB3ZSBjYXJlIG1vcmUgYWJvdXQgc2hpcHBpbmcgc29tZXRoaW5nIHRoYXQgaXMgc29saWQgYW5kIHN0YWJsZSByYXRoZXIgdGhhbiBoaXR0aW5nIHNwZWNpZmljIGRhdGVzLiBUaGVyZSBpcyBhIGxvdCBvZiB3b3JrIHRvIGJlIGRvbmUsIGJ1dCB3ZSBhcmUgZXhjaXRlZCBmb3Igd2hhdOKAmXMgY29taW5nIG5leHQhPC9wPmA7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIHRpdGxlLFxuICBjb250ZW50LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbnRlbnQiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/admin/js/views/pdf/content.js\n");

/***/ })

}]);