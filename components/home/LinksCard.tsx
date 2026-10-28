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
            <div className="flex items-center justify-center gap-16 text-zinc-600">
                <a href="https://github.com/ammarsiddiqui0" className="hover:text-white/80 hover:scale-115 transition-all duration-300">
                    <FaGithub size={30} />
                </a>
                <a href="https://www.instagram.com/ammarsiddiqui04/" className="hover:text-pink-400 hover:scale-115 transition-all duration-300">
                    <FaInstagram size={30} />
                </a>
                <a href="https://in.linkedin.com/in/ammarsiddiqui0" className="hover:text-sky-500/80 hover:scale-115 transition-all duration-300">
                    <FaLinkedin size={30} />
                </a>
                <a href="mailto:ammarmaks24@gmail.com" className="hover:text-yellow-400/80 hover:scale-115 transition-all duration-300">
                    <Mail size={30} />
                </a>
            </div> 
        </Card>
    )
}
export default LinksCard;