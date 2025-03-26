import { redirect } from "next/navigation";

export function GET(request) {
  const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const authURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=repo,user`;
  redirect(authURL);
}
