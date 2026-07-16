import { getOrganizations, getRepositories, getUser, GitHubApiError, GitHubNotFoundError } from "@/lib/github/api";
import { mapDeveloperToCardData, mapGithubToDeveloper } from "@/lib/github/mapper";
import { ProfileCardDisplay } from "@/components/profile/ProfileCardDisplay";
import type { Developer } from "@/types/developer";

type ProfilePageProps = {
  params: Promise<{
    username: string;
  }>;
};

function renderDeveloperProfile(developer: Developer) {
  const cardData = mapDeveloperToCardData(developer);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-20 text-slate-100">
      <div className="mx-auto flex max-w-[600px] flex-col gap-8 px-4">
        <ProfileCardDisplay cardData={cardData} />
      </div>
    </main>
  );
}

function renderError(message: string) {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-20 text-slate-100">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-rose-500/20 bg-slate-900/80 p-10 shadow-2xl shadow-rose-500/10">
        <p className="text-sm uppercase tracking-[0.35em] text-rose-300">Unable to load profile</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-50">{message}</h1>
        <p className="mt-6 text-base leading-8 text-slate-300">
          Please check the username and try again.
        </p>
      </div>
    </main>
  );
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params;

  try {
    const [user, repositories, organizations] = await Promise.all([
      getUser(username),
      getRepositories(username),
      getOrganizations(username),
    ]);

    const developer = mapGithubToDeveloper(user, repositories, organizations);
    return renderDeveloperProfile(developer);
  } catch (error) {
    console.error(error);
    if (error instanceof GitHubNotFoundError) {
      return renderError(`User ${username} not found.`);
    }

    if (error instanceof GitHubApiError) {
      return renderError(error.message);
    }

    return renderError("An unexpected error occurred while loading the profile.");
  }
}
