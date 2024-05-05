# Angular SSR 

Server-side rendering (SSR) is a process that involves rendering pages on the server, resulting in initial HTML content which contains initial page state. Once the HTML content is delivered to a browser, Angular initializes the application and utilizes the data contained within the HTML.


# Why SSR?

**Improved performance:** SSR can improve the performance of web applications by delivering fully rendered HTML to the client, which the browser can parse and display even before it downloads the application JavaScript. This can be especially beneficial for users on low-bandwidth connections or mobile devices.
**Improved Core Web Vitals:** SSR results in performance improvements that can be measured using Core Web Vitals (CWV) statistics, such as reduced First Contentful Paint (FCP) and Largest Contentful Paint (LCP), as well as Cumulative Layout Shift (CLS).
**Better SEO:** SSR can improve the search engine optimization (SEO) of web applications by making it easier for search engines to crawl and index the content of the application.



# How to build Angualr SSR application?

Run `ng new <AppName> --ssr` for new angular SSR application 

### Add SSR to existing application 

Run `ng add @angular/ssr` to add SSR to existing app. 

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. it has both client and server folder.
