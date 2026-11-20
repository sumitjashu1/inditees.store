INDITEES PREMIUM WEBSITE — FREE STATIC SITE
=============================================

এই ওয়েবসাইটে কোনো monthly hosting fee লাগবে না যদি GitHub Pages/Cloudflare Pages-এর free tier ব্যবহার করো। Domain renewal fee তোমার domain provider-এর কাছে আলাদা দিতে হবে।

শুরু করার আগে (খুব জরুরি):
1) config.js খুলে whatsappNumber: ''-এর মধ্যে নিজের WhatsApp নম্বর বসাও।
   India হলে 91 + 10 digit নম্বর, কোনো +, space বা hyphen নয়।
   উদাহরণ: whatsappNumber: '919876543210' — এটি শুধু format, আসল নম্বর নয়।
2) instagramUrl এবং instagramHandle ঠিক আছে কিনা দেখো।
3) config.js-এর product, color, size ও price আপডেট করো। price: null থাকলে Ask for price দেখাবে।
   price: 299 দিলে ₹299 দেখাবে।
4) assets-এর SVG ছবিগুলো illustration, actual product photo নয়।
   নিজের genuine product photo থাকলে সেগুলো ব্যবহার করো।
5) Shipping, payment, return/exchange policy customer-এর সঙ্গে স্পষ্টভাবে confirm করো।

WEBSITE PREVIEW
index.html double click করে Chrome-এ খুলে দেখতে পারবে।

FREE HOSTING: GITHUB PAGES
1) github.com-এ account তৈরি/লগইন করো।
2) নতুন PUBLIC repository তৈরি করো, যেমন inditees-website।
3) ZIP extract করে ভেতরের সব file/folder repo-র root-এ upload করো।
4) Repository > Settings > Pages > Build and deployment > Deploy from a branch.
5) Branch: main, folder: /(root) সিলেক্ট করে Save করো।
6) প্রথমে GitHub দেওয়া URL-এ website check করো।
7) Settings > Pages > Custom domain-এ inditees.store বসাও।
8) তোমার domain registrar-এর DNS-এ GitHub Pages-এর official instructions অনুযায়ী A/AAAA records configure করো।
   HTTPS certificate active হলে Enforce HTTPS চালু করো।
   Documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

ALTERNATIVE: CLOUDFLARE PAGES
1) dash.cloudflare.com > Workers & Pages > Create > Pages.
2) এই site upload/deploy করো।
3) Custom domains থেকে inditees.store add করো এবং DNS setup complete করো।
4) Documentation: https://developers.cloudflare.com/pages/configuration/custom-domains/

IMPORTANT
- এখানে কোনো checkout, card payment, database বা automatic order storage নেই।
- WhatsApp button prefilled enquiry message খুলবে। Customer WhatsApp-এ send করলে তবেই message যাবে।
- Free hosting service and limits may change.
- Physical shop আছে বলে site-এ দাবি করা হয়নি।
- Fake reviews বা fake trust badges যোগ করা হয়নি।
