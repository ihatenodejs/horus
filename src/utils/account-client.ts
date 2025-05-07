import { authClient } from "@/lib/auth-client"

export async function signInGithub() {
  await authClient.signIn.social({
    provider: "github"
  })
}