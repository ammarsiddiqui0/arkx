import Card from "@/components/ui/Card";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

import { SiAnilist } from "react-icons/si";

import { Mail, FileText } from "lucide-react";

function LinksCard() {
    return (
        <Card className="h-full flex items-center justify-center hover:border-zinc-700">
            <div className="grid grid-cols-3 gap-y-10 gap-x-24 text-zinc-600">
                <a href="" className="hover:text-white/80 hover:scale-115 transition-all duration-300">
                    <FaGithub size={30} />
                </a>
                <a href="" className="hover:text-purple-400/80 hover:scale-115 transition-all duration-300">
                    <FaInstagram size={30} />
                </a>
                <a href="" className="hover:text-sky-500/80 hover:scale-115 transition-all duration-300">
                    <FaLinkedin size={30} />
                </a>
                <a href="" className="hover:text-yellow-400/80 hover:scale-115 transition-all duration-300">
                    <Mail size={30} />
                </a>
                <a href="" className="hover:text-cyan-200/80 hover:scale-115 transition-all duration-300">
                    <SiAnilist size={30} />
                </a>
                <a href="" className="hover:text-red-400/80 hover:scale-115 transition-all duration-300">
                    <FaPinterest size={30} />
                </a>
            </div> 
        </Card>
    )
}
export default LinksCard;