import { getOrganizations, getRepositories, getUser, GitHubApiError, GitHubNotFoundError } from "@/lib/github/api";
import { mapDeveloperToCardData, mapGithubToDeveloper } from "@/lib/github/mapper";
import { ProfileCardDisplay } from "@/components/profile/ProfileCardDisplay";
import type { Metadata } from "next";
import type { Developer } from "@/types/developer";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://devdex.app";

type ProfilePageProps = {
  params: Promise<{
    username: string;
  }>;
};

const USERNAME_RE = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,38})$/;

function sanitizeUsername(raw: string): string {
  // Strip path traversal and invalid characters
  return raw.replace(/[^a-zA-Z0-9-]/g, "").slice(0, 39);
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { username } = await params;
  const safe = sanitizeUsername(username);

  if (!safe || !USERNAME_RE.test(safe)) {
    return {
      title: `Invalid username | DevDex`,
      robots: { index: false, follow: false },
    };
  }

  try {
    const user = await getUser(safe);
    const name = user.name || safe;
    const avatar = user.avatar_url;

    return {
      title: `${name}'s Developer Card`,
      description: `Check out ${name}'s collectible developer card on DevDex. Visualizing GitHub stats as legendary cards.`,
      alternates: { canonical: `/profile/${safe}` },
      openGraph: {
        title: `${name}'s Developer Card | DevDex`,
        description: `Visualizing ${name}'s GitHub profile as a collectible card.`,
        url: `${SITE_URL}/profile/${safe}`,
        images: avatar ? [{ url: avatar, alt: `${name}'s avatar` }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: `${name}'s Developer Card | DevDex`,
        description: `Visualizing ${name}'s GitHub profile as a collectible card.`,
        images: avatar ? [avatar] : [],
      },
    };
  } catch {
    return {
      title: `Profile not found | DevDex`,
      robots: { index: false, follow: false },
    };
  }
}

function renderDeveloperProfile(developer: Developer, username: string) {
  const cardData = mapDeveloperToCardData(developer);

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-20 text-slate-100">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4">
        <header className="text-center">
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
            {developer.displayName || username}'s Developer Card
          </h1>
          <p className="mt-2 text-slate-400">@{username}</p>
        </header>
        <ProfileCardDisplay cardData={cardData} />
      </div>
    </div>
  );
}

function renderError(message: string) {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-20 text-slate-100">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-rose-500/20 bg-slate-900/80 p-10 shadow-2xl shadow-rose-500/10">
        <p className="text-sm uppercase tracking-[0.35em] text-rose-300">Unable to load profile</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-50">{message}</h1>
        <p className="mt-6 text-base leading-8 text-slate-300">
          Please check the username and try again.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params;
  const safe = sanitizeUsername(username);

  if (!safe || !USERNAME_RE.test(safe)) {
    return renderError(`Invalid username format.`);
  }

  try {
    const [user, repositories, organizations] = await Promise.all([
      getUser(safe),
      getRepositories(safe),
      getOrganizations(safe),
    ]);

    const developer = mapGithubToDeveloper(user, repositories, organizations);
    return renderDeveloperProfile(developer, safe);
  } catch (error) {
    if (error instanceof GitHubNotFoundError) {
      return renderError(`User @${safe} not found.`);
    }

    if (error instanceof GitHubApiError) {
      if (error.status === 403) {
        return renderError(`GitHub API rate limit exceeded. Please try again later.`);
      }
      return renderError(`GitHub error: ${error.message}`);
    }

    return renderError("An unexpected error occurred while loading the profile.");
  }
}