import { getOrganizations, getRepositories, getUser, GitHubApiError, GitHubNotFoundError } from "@/lib/github/api";
import { mapGithubToDeveloper } from "@/lib/github/mapper";
import type { Developer } from "@/types/developer";

type ProfilePageProps = {
  params: Promise<{
    username: string;
  }>;
};

function renderDeveloperProfile(developer: Developer) {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-20 text-slate-100">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-indigo-500/20 bg-slate-900/80 p-10 shadow-2xl shadow-indigo-500/10">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:items-center">
          <div className="flex items-center justify-center rounded-[1.75rem] bg-slate-800/70 p-6">
            <img
              src={developer.avatar}
              alt={`${developer.username} avatar`}
              className="h-[220px] w-[220px] rounded-[1.5rem] object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">GitHub Username</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-50">
              {developer.displayName}
            </h1>
            <p className="mt-2 text-lg text-slate-300">@{developer.username}</p>
            <p className="mt-6 text-base leading-8 text-slate-300">{developer.bio || "No bio available."}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-100 shadow-sm shadow-slate-800/30">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Followers</p>
                <p className="mt-2 text-3xl font-semibold">{developer.followers}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-100 shadow-sm shadow-slate-800/30">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Following</p>
                <p className="mt-2 text-3xl font-semibold">{developer.following}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-100 shadow-sm shadow-slate-800/30">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Public repositories</p>
                <p className="mt-2 text-3xl font-semibold">{developer.repositories}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-100 shadow-sm shadow-slate-800/30">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Location</p>
                <p className="mt-2 text-lg">{developer.location || "Not specified"}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-100 shadow-sm shadow-slate-800/30">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Company</p>
                <p className="mt-2 text-lg">{developer.company || "Not specified"}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-100 shadow-sm shadow-slate-800/30">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Profile URL</p>
                <a
                  href={developer.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-lg font-semibold text-indigo-300 hover:text-indigo-200"
                >
                  {developer.profileUrl}
                </a>
              </div>
            </div>
          </div>
        </div>
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
