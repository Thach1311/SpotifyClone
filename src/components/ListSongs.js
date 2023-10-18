import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";
function ListSongs() {
    const { DataSongs,handleSetSong,song } = useContext(Songs);
    const [isSong, setIsSong] = useState(0);
    const handlePlaySong = (idSong) => {
        setIsSong(idSong)
        handleSetSong(idSong)
    };
    useEffect(()=>{
        setIsSong(song.id)
    }, [song])
    return (
        <div className="col-span-2 overflow-y-scroll">
            <table className="table-auto w-full ">
                <thead className="text-white">
                    <th className="w-[10%]">#</th>
                    <th className="text-left">Title</th>
                    <th className="w-[10%]">Author</th>
                    <th className="w-[10%]">
                        <i className="fa fa-download"></i>
                    </th>
                </thead>
                <tbody className="text-[#a3a3a3]">
                    {DataSongs.map((song, index) => (
                        <tr
                            className={`hover:bg-[#888888] hover:text-white text-center  ${isSong === song.id && 'text-cyan-400'}`}
                            key={index}
                            onClick={() => handlePlaySong(song.id)}

                        >
                            <td>{index + 1}</td>
                            <td className="text-left">{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td>
                                {" "}
                                <i className="fa fa-download"></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListSongs;
