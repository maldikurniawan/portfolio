import { MdDoNotDisturb } from "react-icons/md";
import { SiMoleculer } from "react-icons/si";

export default function ButtonParticles({ isEnable }) {
    return !isEnable ? (
        <MdDoNotDisturb className="h-full w-full p-1" />
    ) : (
        <SiMoleculer className="h-full w-full p-1" />
    );
}
