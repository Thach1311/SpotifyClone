import { useContext } from "react";
import { Songs } from "../Context";

function DetailSong() {
    const {song} = useContext(Songs)
    return (<div className="col-span-1  flex flex-col items-center">
        <h2 className="text-[#38bdf8] font-[700] text-[16px]">Now playing</h2>
        <h2 className="text-[24px] text-[#A3A3A3]">{song.name}</h2>
        <div className="h-[255px] w-[255px] m-[20px]">
            <img src={song.links.images[0].url} alt="avatar"/>
        </div>
        <div className="flex justify-around items-center "> 
            <img className="h-[63px] w-[63px] rounded-[100%] mr-[40px]" src={song.links.images[1].url} alt="author"/> 
            <span className="text-white">{song.author}</span>
        </div>
    </div>);
}

export default DetailSong;