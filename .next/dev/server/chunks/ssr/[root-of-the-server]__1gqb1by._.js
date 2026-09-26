module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/faq/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaqPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$centre$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/centre.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$faqs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/faqs.ts [app-rsc] (ecmascript)");
;
;
;
const faqDescription = "Read sample answers about movement classes, health checkups, and consultations at Wellness Centre.";
const metadata = {
    title: "Frequently asked questions",
    description: faqDescription,
    alternates: {
        canonical: "/faq/"
    },
    openGraph: {
        title: `Frequently asked questions | ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$centre$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["centreProfile"].name}`,
        description: faqDescription,
        siteName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$centre$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["centreProfile"].name,
        url: "/faq/",
        type: "website",
        images: [
            {
                url: "/images/wellness-social.webp",
                width: 1200,
                height: 630,
                alt: "Wellness Centre sample social image"
            }
        ]
    }
};
const categoryOrder = [
    "general",
    "yoga",
    "health-checkup",
    "physician-consultation",
    "psychologist-consultation"
];
const categoryLabels = {
    general: "General",
    yoga: "Yoga",
    "health-checkup": "Health checkups",
    "physician-consultation": "Physician consultations",
    "psychologist-consultation": "Psychologist consultations"
};
function FaqPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "page-shell faq-page",
        id: "main-content",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "faq-intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "Helpful answers"
                    }, void 0, false, {
                        fileName: "[project]/src/app/faq/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Questions, clearly answered."
                    }, void 0, false, {
                        fileName: "[project]/src/app/faq/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "These sample answers explain the site concept. Confirm services and details with the centre before making plans."
                    }, void 0, false, {
                        fileName: "[project]/src/app/faq/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/faq/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "faq-groups",
                children: categoryOrder.map((category)=>{
                    const entries = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$faqs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faqs"].filter((entry)=>(entry.category ?? "general") === category);
                    if (entries.length === 0) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "faq-group",
                        "aria-labelledby": `faq-group-${category}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: `faq-group-${category}`,
                                children: categoryLabels[category]
                            }, void 0, false, {
                                fileName: "[project]/src/app/faq/page.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "faq-list",
                                children: entries.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "faq-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                children: entry.question
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/faq/page.tsx",
                                                lineNumber: 75,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: entry.answer
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/faq/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, entry.id, true, {
                                        fileName: "[project]/src/app/faq/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/faq/page.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this)
                        ]
                    }, category, true, {
                        fileName: "[project]/src/app/faq/page.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/faq/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/faq/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/faq/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/faq/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/content/faqs.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "faqs",
    ()=>faqs
]);
const faqs = [
    {
        id: "offerings-overview",
        question: "What can I find at Wellness Centre?",
        answer: "This sample site lists movement classes, health checkups, and physician and psychologist consultations. Confirm actual services with the centre.",
        category: "general"
    },
    {
        id: "first-class",
        question: "Can I join a class without experience?",
        answer: "The sample listings do not specify experience requirements. Check with the centre before attending a class.",
        category: "yoga"
    },
    {
        id: "checkup-scope",
        question: "What is included in a health checkup?",
        answer: "This sample site does not define a real checkup package. Confirm its scope and suitability with a qualified healthcare professional.",
        category: "health-checkup"
    },
    {
        id: "appointments",
        question: "Can I book an appointment here?",
        answer: "No. This website presents mock information and does not offer booking or collect personal details.",
        category: "physician-consultation"
    },
    {
        id: "psychologist-support",
        question: "Does the psychologist consultation provide medical advice?",
        answer: "No. This sample website is informational and does not provide personal medical advice. Contact a qualified professional for individual care. If you are in immediate danger, contact local emergency services.",
        category: "psychologist-consultation"
    },
    {
        id: "sample-details",
        question: "Are the contact details and opening hours real?",
        answer: "No. All centre details on this sample website are illustrative and must be confirmed before visiting.",
        category: "general"
    }
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1gqb1by._.js.map