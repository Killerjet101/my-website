import { motion } from "framer-motion";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";



interface RepoProps {
    repo: string;
    owner: string;
    description: string;
    link: string;
    stars: number;
    forks: number;
    language: string;
    color: string;
}

const RepoItem = ({ repo, owner, description, link, stars, forks, language, color }: RepoProps) => {
    return (
        <a href={link} rel="noreferrer" target="_blank">
            <div className="flex flex-col h-40 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 cursor-pointer">
                <h1 className="font-semibold mb-1">{repo}</h1>
                <p className="text-sm text-gray-800/70 dark:text-gray-100/70">{description}</p>
                <div className="mt-auto flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p className="flex flex-row items-center">
                        <motion.div
                            className="w-3 h-3 rounded-full mr-1"
                            style={{ background: color, border: `solid 3px ${color}` }}
                        />
                        {language}
                    </p>

                    <p className="flex flex-row items-center justify-center">
                        <AiOutlineStar className="mr-1 w-4 h-4" /> {stars}
                    </p>
                    <p className="flex flex-row items-center justify-center">
                        <BiGitRepoForked className="mr-1 w-4 h-4" /> {forks}
                    </p>

                    <p className="text-black/60 dark:text-white/30 flex flex-row items-center justify-center">
                        - {owner}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default RepoItem;
