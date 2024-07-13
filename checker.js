//Make sure the user is on instagram

if (window.location.origin !== "https://www.instagram.com") {
  window.alert(
    "Make sure youre on instagram. Redirecting to instagram...You have to run the code into the console again.",
  );
  window.location.href = "https://www.instagram.com";
  console.clear();
}

const fetchOptions = {
  credentials: "include",
  headers: {
    "X-IG-App-ID": "936619743392459",
  },
  method: "GET",
};

let username;
