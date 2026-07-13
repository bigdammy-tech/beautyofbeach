
BeautyOfBeaches — eProject Submission
Project
BeautyOfBeaches: a Single-Page, responsive website cataloguing famous beaches by zone (North, South, East, West), built with HTML5, CSS3 and JavaScript.
Files in this submission
•	beautyofbeach.html — page structure and all three modal dialogs
•	beautyofbeach.css — all styling, layout and animation
•	beautyofbeach.js — all data and behaviour
•	logo.svg, favicon-32.png, favicon-180.png — branding assets
•	/videos — local video files referenced by the Gallery (see Assumptions below)
•	BeautyOfBeaches_eProject_Report.docx — full project report (synopsis, analysis, design, DFDs, flowcharts, screenshots, source code walkthrough, user guide, developer's guide)
•	README.docx — this file
How to run
No installation or build step is required. Open beautyofbeach.html directly in any modern browser (Chrome, Edge, Firefox, Safari), or deploy the folder as-is to any static web host.
Assumptions
•	No backend server or database is used or required; all beach, gallery, flight and bus data is stored as JSON-shaped JavaScript objects/arrays inside beautyofbeach.js, per the specification's allowance for a JSON/TXT data store.
•	The “download as PDF or DOC” requirement is met with a browser-generated, Word-openable file rather than a bundled PDF library, to keep the project dependency-free.
•	All flight/bus prices, schedules, and contact details shown on the site are illustrative placeholder data for demonstration only, not real bookable offers.
•	Internet Explorer, referenced in the original hardware/software requirements, is treated as out of scope since Microsoft ended support for IE11 in June 2022; the site targets current Chrome, Edge, Firefox and Safari instead, consistent with the specification's own browser list.
•	Gallery video files are expected under a local /videos folder alongside beautyofbeach.html; they are not hosted on an external server.
•	The visitor counter is per-browser (via localStorage), not a global counter, since no server-side store is available in a static deployment.
•	The Geolocation-based location shown in the ticker requires the user to grant location permission, and in most browsers requires the page to be served over HTTPS or from localhost; it falls back to “Location unavailable” otherwise.

