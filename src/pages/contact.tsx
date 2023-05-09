import React from "react";
import { useLanyard } from "use-lanyard";
import MessageComponent from "../components/talk/MessageComponent";
import ContactLink from "../components/talk/ContactLink";
import { SiDiscord, SiGmail, SiInstagram, SiGithub, SiReddit, SiSnapchat } from 'react-icons/si';
import { motion } from "framer-motion";
import TimeStatus from "../components/talk/TimeStatus";

const statusMap = {
	online: 'bg-green-500',
	idle: 'bg-yellow-500',
	dnd: 'bg-red-500',
	offline: 'bg-gray-500',
};

const Talk = () => {
    const { data: user } = useLanyard("224207524411211777");
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-36 w-full"
        >
            <h1 className="text-black dark:text-white font-bold text-3xl mb-3 mt-8">Let's chat 💬</h1>
            <p className="text-gray-800 dark:text-gray-200 mb-6">
                Have an inquiry, or want to connect? Feel free to leave a message below, get in touch via Discord,
                or email. Any other way maybe be a risk of not getting a response. Just an fyi.
            </p>

            <TimeStatus />

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-20">
                <MessageComponent />

                <div className="row-start-1 md:row-auto">
                    <ContactLink
                        name={
                            user ? (
                                <span>
                                    {user?.discord_user.username}#
                                    {user?.discord_user.discriminator}

                                    <span
                                        className={`${
                                            statusMap[
                                                user?.discord_status as keyof typeof statusMap
                                            ]
                                        } ml-1.5 h-2.5 w-2.5 inline-block rounded-full`}
                                    />
                                </span>
                            ) : null
                        }
                        description="Discord"
                        icon={<SiDiscord className="w-6 h-6 text-[#5865F2]" />}
                        link="https://discord.com/users/224207524411211777"
                        borderColor="hover:border-[#5865F2]/50"
                    />

                    <ContactLink
                        name="Killerjet101"
                        description="Reddit"
                        icon={<SiReddit className="w-6 h-6 text-[#ff4500]" />}
                        link="https://www.reddit.com/user/Killerjet101"
                        borderColor="hover:border-[#ff4500]/50"
                    />

                    <ContactLink
                        name="con.___.man"
                        description="Instagram"
                        icon={<SiInstagram className="w-6 h-6" style="background: linear-gradient(90deg, #F58529, #DD2A7B, #8134AF);"/>}
                        link="https://www.instagram.com/con.___.man/"
                        borderColor="hover:border-gray-400/50"
                    />
			
		    <ContactLink
                        name="ccon.man"
                        description="Snapchat"
                        icon={<SiSnapchat className="w-6 h-6 text-[#fffc00]" />}
                        link="https://www.snapchat.com/"
                        borderColor="hover:border-[#fffc00]/50"
                    />

                    <ContactLink
                        name="Killerjet101"
                        description="Github"
                        icon={<SiGithub className="w-6 h-6 text-gray-400" />}
                        link="https://github.com/Killerjet101"
                        borderColor="hover:border-gray-400/50"
                    />

                    <ContactLink
                        name="Kill3rjet101@gmail.com"
                        description="Email"
                        icon={<SiGmail className="w-6 h-6 text-gray-400" />}
                        link="mailto:Kill3rjet101@gmail.com"
                        borderColor="hover:border-gray-400/50"
                    />
            </div>
        </div>
        </motion.div >
    );
};

export default Talk;
