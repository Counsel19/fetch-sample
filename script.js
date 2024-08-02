const baseUrl = "https://jsonplaceholder.typicode.com";

// METHODS
// 1. GET : Retrieve infomation
// 2. POST : Add Informaation
// 3. PUT : Update an Info
// 4. PATCH : Updates Informaation
// 5. DELETE: Delete Info

// Statuc Codes

// 200 - 299 => Success Status
//  200 => success
//  201 => created

// 300 -399 => Redirect Status

// 400 - 499 => Client Side Error
//  400 => Bad Request
//  401 => Not Authenticated
//  403 => Forbidden Error
//  404 => Not Found

// 500 - 599 => Server Side Error
// 500 => Internal Server Error

// {
//     id: 1,
//     title: '...',
//     body: '...',
//     userId: 1
//   }

// {
//     title: ""
// }

const outputDiv = document.getElementById("output");

let allPost = [];
let selectedPost = {}

// Fetch wil never throw an erro until its a network error
const fetchAllPost = async () => {
  try {
    const response = await fetch(`${baseUrl}/posts`);
    if (response.ok) {
      allPost = await response.json();
    } else {
      throw new Error("Wrong URL ");
    }
  } catch (error) {
    console.log(error.message);
  }
};
const fetSinglePost = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/posts/${id}`)
    selectedPost = await respomse
  } catch (error) {
    console.log(error.message)
  }
}

const displayPost = () => {
  let allPostELm = "";

  allPost.forEach((post) => {
    allPostELm += `
        
        <div
        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          > ${post.title} </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> ${post.body}</p>
        <a
          href="single-post.html"
          onclick=""
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
        `;
  });

  outputDiv.innerHTML = allPostELm;
};

window.onload = async () => {
  await fetchAllPost();
  displayPost();
};

/*    */
