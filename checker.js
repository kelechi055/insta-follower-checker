//Make sure the user is on instagram.com

if (window.location.origin !== "https://www.instagram.com") {
  alert("Make sure you're on Instagram. Redirecting to Instagram... Copy, Paste and run this in console again.");
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

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

//  Making recursive API calls until all pages are loaded
const concatFriendshipsApiResponse = async (list, userId, count, nextMaxId = "") => {
  let url = `https://www.instagram.com/api/v1/friendships/${userId}/${list}/?count=${count}`;
  if (nextMaxId) {
    url += `&max_id=${nextMaxId}`;
  }
};

const data = await fetch(url, fetchOptions).then(response => response.json());

if (data.next_max_id) {
  const sleepDuration = random(800, 1500);
  console.log(`Loaded ${data.users.length} ${list}. Sleeping for ${sleepDuration}ms to avoid rate limiting.`);

  await sleep(sleepDuration);

  const nextPageUsers = await concatFriendshipsApiResponse(list, userId, count, data.next_max_id);
  return data.users.concat(nextPageUsers);
}

return data.users;
};
