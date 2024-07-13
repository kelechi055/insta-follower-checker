//Make sure the user is on instagram.com

if (window.location.origin !== "https://www.instagram.com") {
  alert("Make sure you're on Instagram. Redirecting to Instagram... You have to run the code in the console again.");
  window.location.assign("https://www.instagram.com");
  console.clear();
}

const fetchOptions = {
  method: "GET",
  headers: {
    "X-IG-App-ID": "936619743392459"
  },
  credentials: "include"
};

let username;
