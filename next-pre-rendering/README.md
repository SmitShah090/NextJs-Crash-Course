> # **Pre-Rendring in NextJs** :

* NextJs supports two types of pre-rendring:
* **Static Generation** : 
    * A method of pre-rendering where the HTML pages are generated at build time
    * Pages can be built once, cached by a CDN and served to clients almost instantly
    * **Example**: Marketing or Blogging site
    * For a normal page, use **getStaticProps** function to fetch the data ahead of time
    * For a dynamic page, you also need the **getStaticPaths** function
    * Pages can't be updated without a full re-build 

* **Server-side rendring** :
    * Fetch data at request time
    * Personalize data based on user information in the incoming request
    * **Example** : News Listing Page
    * **getServerSideProps** function helps with SSR data fetching
    * Combining pre-rendring with client-side data fetching
    * Shallow routing - Routing wihout calling **getStaticProps/getServerSideProps** 